import { Request, Response } from 'express';
import { PlanningItem } from '../models';

// ==========================================
// =========== CREATE A PLANNING ============
// ==========================================

export const createPlanning = async (req: Request, res: Response): Promise<void> => {
  const { tripId } = req.params;
  const { type, title, startDate, endDate, link, price, booked, note, location, transportMode, arrivalCity, departureCity } = req.body;

  if (!req.user) {
    res.status(401).json({ error: 'Utilisateur non authentifié.' });
    return;
  }

  if (!type || !startDate || !endDate) {
    res.status(400).json({ error: 'Champs obligatoires manquants.' });
    return;
  }

  try {
    const newItem = await PlanningItem.create({
      tripId: parseInt(tripId),
      type,
      title,
      startDate,
      endDate,
      link,
      price,
      booked,
      note,
      location,
      transportMode,
      arrivalCity,
      departureCity
    });

    res.status(201).json({
      message: 'Planification créée avec succès.',
      item: newItem,
    });
  } catch (err) {
    console.error('❌ Erreur lors de la création de la planification :', err);
    res.status(500).json({ error: 'Erreur serveur lors de la création.' });
  }
};

// ==========================================
// ========= GET PLANNINGS FOR TRIP =========
// ==========================================

export const getTripPlannings = async (req: Request, res: Response): Promise<void> => {

  if (!req.user) {
    res.status(401).json({ error: 'Utilisateur non authentifié.' });
    return;
  }

  const tripId = req.params.tripId;

  try {
    const plannings = await PlanningItem.findAll({
      where: { tripId },
      order: [['startDate', 'ASC']],
    });

    res.status(200).json(plannings);
  } catch (err) {
    console.error('❌ Erreur lors de la récupération des plannings :', err);
    res.status(500).json({ error: 'Erreur serveur lors de la récupération des plannings.' });
  }
};

// ===================================
// ========= DELETE PLANNING =========
// ===================================

export const deletePlanning = async (req: Request, res: Response): Promise<void> => {

  if (!req.user) {
    res.status(401).json({ error: 'Utilisateur non authentifié.' });
    return;
  }

  const id = req.params.id;

  try {
    const deleted = await PlanningItem.destroy({ where: { id } });

    if (deleted === 0) {
      res.status(404).json({ message: 'Planning non trouvé' });
    }

    res.status(200).json({ message: 'Planning supprimé avec succès' });
  } catch (err) {
    console.error('❌ Erreur lors de la suppression du planning :', err);
    res.status(500).json({ error: 'Erreur serveur lors de la récupération des plannings.' });
  }
};

// ===================================
// ========= UPDATE PLANNING =========
// ===================================

export const updatePlanning = async (req: Request, res: Response): Promise<void> => {
  if (!req.user) {
    res.status(401).json({ error: 'Utilisateur non authentifié.' });
    return;
  }

  const id = req.params.id;
  const updates = req.body;

  try {
    const planning = await PlanningItem.findByPk(id);

    if (!planning) {
      res.status(404).json({ error: 'Planning non trouvé' });
      return;
    }

    await planning.update(updates);

    res.status(200).json(planning);
  } catch (err) {
    console.error('❌ Erreur lors de la mise à jour du planning :', err);
    res.status(500).json({ error: 'Erreur serveur lors de la mise à jour.' });
  }
};