import { Request, Response } from 'express';
import { Document, PlanningItem, Trip, UserTrip } from '../models';
import { deleteFromS3, getSignedS3Url, uploadToS3 } from '../services/s3Service';
import { v4 as uuidv4 } from 'uuid';

// ===============================
// ======= DELETE DOCUMENT =======
// ===============================

export const deleteDocument = async (req: Request, res: Response) => {
  if (!req.user) {
    res.status(401).json({ error: 'Utilisateur non authentifié.' });
    return;
  }

  const { id } = req.params;

  try {
    const document = await Document.findByPk(id);
    if (!document) {
      res.status(404).json({ message: 'Document non trouvé' });
      return;
    }

    const planning = await PlanningItem.findByPk(document.getDataValue('planningId'));
    if (!planning) {
      res.status(404).json({ message: 'Planning introuvable' });
      return;
    }

    const trip = await Trip.findByPk(planning.getDataValue('tripId')) as any;
    if (!trip) {
      res.status(404).json({ message: 'Voyage introuvable' });
      return;
    }

    const userTrip = await UserTrip.findOne({
      where: { tripId: trip.id, userId: req.user.id },
    });

    if (!userTrip) {
      res.status(403).json({ message: 'Accès interdit' });
      return;
    }

    await deleteFromS3(document.getDataValue('fileKey'));
    await document.destroy();

    res.status(200).json({ message: 'Document supprimé avec succès' });
  } catch (err) {
    console.error('❌ Erreur suppression document :', err);
    res.status(500).json({ error: 'Erreur serveur lors de la suppression du document.' });
  }
};

// ===============================
// ======= UPDATE DOCUMENT =======
// ===============================

export const updateDocument = async (req: Request, res: Response) => {

  if (!req.user) {
    res.status(401).json({ error: 'Utilisateur non authentifié.' });
    return;
  }
  const { id } = req.params;
  const { filename, mimeType, base64File } = req.body;

  if (!filename || !mimeType || !base64File) {
    res.status(400).json({ error: 'Champs requis manquants.' });
    return;
  }

  try {
    const document = await Document.findByPk(id);
    if (!document) {
      res.status(404).json({ message: 'Document non trouvé' });
      return;
    }

    const planning = await PlanningItem.findByPk(document.getDataValue('planningId'));
    if (!planning) {
      res.status(404).json({ message: 'Planning introuvable' });
      return;
    }

    const trip = await Trip.findByPk(planning.getDataValue('tripId')) as any;
    if (!trip) {
      res.status(404).json({ message: 'Voyage introuvable' });
      return;
    }

    const userTrip = await UserTrip.findOne({
      where: { tripId: trip.id, userId: req.user.id },
    });

    if (!userTrip) {
      res.status(403).json({ message: 'Accès interdit' });
      return;
    }

    // Supprimer ancien fichier
    await deleteFromS3(document.getDataValue('fileKey'));

    // Upload nouveau fichier
    const newFileKey = `documents/${uuidv4()}-${filename}`;
    await uploadToS3(base64File, newFileKey, mimeType);

    // Mise à jour du document
    document.set({
      filename,
      fileKey: newFileKey,
    });
    await document.save();

    res.status(200).json({ message: 'Document mis à jour', document });
  } catch (err) {
    console.error('❌ Erreur update document :', err);
    res.status(500).json({ error: 'Erreur serveur lors de la mise à jour.' });
  }
};

// ===============================
// ======= UPLOAD DOCUMENT =======
// ===============================

export const uploadDocument = async (req: Request, res: Response) => {
  if (!req.user) {
    res.status(401).json({ error: 'Utilisateur non authentifié.' });
    return;
  }

  const { planningId, userId, filename, mimeType, base64File } = req.body;

  if (!planningId || !filename || !mimeType || !base64File) {
    res.status(400).json({ error: 'Champs requis manquants.' });
    return;
  }

  try {
    const planning = await PlanningItem.findByPk(planningId);
    if (!planning) {
      res.status(404).json({ error: 'Planning introuvable.' });
      return;
    }

    const trip = await Trip.findByPk(planning.getDataValue('tripId')) as any;
    if (!trip) {
      res.status(404).json({ error: 'Voyage introuvable.' });
      return;
    }

    const userTrip = await UserTrip.findOne({
      where: { tripId: trip.id, userId: req.user.id },
    });

    if (!userTrip) {
      res.status(403).json({ error: 'Accès interdit.' });
      return;
    }

    const fileKey = `documents/${userId}/${planningId}/${uuidv4()}-${filename}`;
    const buffer = Buffer.from(base64File, 'base64');
    const uploadResult = await uploadToS3(buffer, fileKey, mimeType);

    const document = await Document.create({
      planningId,
      userId: req.user.id,
      filename,
      fileKey,
    });

    res.status(200).json({ message: 'Document uploadé', document, url: uploadResult });
  } catch (err) {
    console.error('❌ Erreur upload document :', err);
    res.status(500).json({ error: 'Erreur serveur lors de l’upload du document.' });
  }
};

// ===============================
// ======= GET DOCUMENTS BY PLANNING =======
// ===============================

export const getDocumentsByPlanning = async (req: Request, res: Response) => {
  if (!req.user) {
    res.status(401).json({ error: 'Utilisateur non authentifié.' });
    return;
  }

  const { planningId } = req.params;

  try {
    const planning = await PlanningItem.findByPk(planningId);
    if (!planning) {
      res.status(404).json({ error: 'Planning introuvable.' });
      return;
    }

    const trip = await Trip.findByPk(planning.getDataValue('tripId'));
    if (!trip) {
      res.status(404).json({ error: 'Voyage introuvable.' });
      return;
    }

    const documents = await Document.findAll({
      where: { planningId },
      attributes: ['id', 'filename', 'fileKey', 'createdAt'],
      order: [['createdAt', 'DESC']],
    });

    const documentsWithUrls = await Promise.all(
      documents.map(async (doc) => {
        const signedUrl = await getSignedS3Url(doc.getDataValue('fileKey'));
        return {
          id: doc.getDataValue('id'),
          filename: doc.getDataValue('filename'),
          url: signedUrl,
          createdAt: doc.getDataValue('createdAt'),
        };
      })
    );

    res.status(200).json({ documents: documentsWithUrls });
  } catch (err) {
    console.error('❌ Erreur récupération documents :', err);
    res.status(500).json({ error: 'Erreur serveur lors de la récupération des documents.' });
  }
};