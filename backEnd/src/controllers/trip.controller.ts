import { Request, Response } from 'express';
import { Trip, UserTrip, User } from '../models';

// ==========================================
// ============ CREATE A TRIP ===============
// ==========================================

export const createTrip = async (req: Request, res: Response): Promise<void> => {
  const { title, startDate, endDate, budget, adults, children } = req.body;

  if (!req.user) {
    res.status(401).json({ error: 'Utilisateur non authentifié.' });
    return;
  }

  const generateInviteCode = (length = 6): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  try {
    let key;
    let existing;
    do {
      key = generateInviteCode(6);
      existing = await Trip.findOne({ where: { key } });
    } while (existing);

    const newTrip = await Trip.create({
      title,
      startDate,
      endDate,
      budget,
      adults,
      children,
      key
    });

    await UserTrip.create({
      userId: req.user.id,
      tripId: newTrip.getDataValue('id'),
      role: 'admin',
    });

    res.status(201).json({
      message: 'Voyage créé avec succès.',
      trip: newTrip,
    });
  } catch (err) {
    console.error('❌ Erreur lors de la création du voyage :', err);
    res.status(500).json({ error: 'Erreur serveur lors de la création du voyage.' });
  }
};

// ==========================================
// ========= GET TRIPS FOR USER =============
// ==========================================

export const getUserTrips = async (req: Request, res: Response): Promise<void> => {

  if (!req.user) {
    res.status(401).json({ error: 'Utilisateur non authentifié.' });
    return;
  }

  try {
    const userTrips = await Trip.findAll({
      include: [{
        model: UserTrip,
        where: { userId: req.user.id },
        attributes: [], // on ne retourne pas les données de liaison
      }],
    });

    res.status(200).json({
      trips: userTrips,
    });
  } catch (err) {
    console.error('❌ Erreur lors de la récupération des voyages :', err);
    res.status(500).json({ error: 'Erreur serveur lors de la récupération des voyages.' });
  }
};

// ==========================================
// ============ GET TRIP BY ID ==============
// ==========================================

export const getTrip = async (req: Request, res: Response): Promise<void> => {
  if (!req.user) {
    res.status(401).json({ error: 'Utilisateur non authentifié.' });
    return;
  }

  const tripId = req.params.id;

  try {
    const trip = await Trip.findByPk(tripId);

    if (!trip) {
      res.status(404).json({ error: 'Voyage introuvable.' });
      return;
    }

    res.status(200).json({ trip });

  } catch (err) {
    console.error('❌ Erreur lors de la récupération du voyage :', err);
    res.status(500).json({ error: 'Erreur serveur lors de la récupération du voyage.' });
  }
};

// ==========================================
// ============ JOIN A TRIP BY CODE =========
// ==========================================

export const joinTrip = async (req: Request, res: Response): Promise<void> => {
  const { key } = req.body;

  if (!req.user) {
    res.status(401).json({ error: 'Utilisateur non authentifié.' });
    return;
  }

  if (!key) {
    res.status(400).json({ error: 'Code d’invitation manquant.' });
    return;
  }

  try {
    const trip = await Trip.findOne({ where: { key } });

    if (!trip) {
      res.status(404).json({ error: 'Aucun voyage trouvé avec ce code.' });
      return;
    }

    // Vérifie si l'utilisateur est déjà dans le voyage
    const alreadyJoined = await UserTrip.findOne({
      where: {
        userId: req.user.id,
        tripId: trip.getDataValue('id')
      },
    });

    if (alreadyJoined) {
      res.status(409).json({ error: 'Vous avez déjà rejoint ce voyage.' });
      return;
    }

    // Ajoute l'utilisateur au voyage
    await UserTrip.create({
      userId: req.user.id,
      tripId: trip.getDataValue('id'),
    });

    res.status(200).json({
      message: 'Voyage rejoint avec succès.',
      trip,
    });
  } catch (err) {
    console.error('❌ Erreur lors de la jointure au voyage :', err);
    res.status(500).json({ error: 'Erreur serveur lors de la jointure au voyage.' });
  }
};

// ==========================================
// ======== GET MEMBERS OF A TRIP ===========
// ==========================================

export const getTripMembers = async (req: Request, res: Response): Promise<void> => {
  const { id: tripId } = req.params;

  if (!req.user) {
    res.status(401).json({ error: 'Utilisateur non authentifié.' });
    return;
  }

  try {
    const trip = await Trip.findByPk(tripId, {
      include: [{
        model: UserTrip,
        include: [User]
      }]
    });

    console.log(tripId)

    if (!trip) {
      res.status(404).json({ error: 'Voyage introuvable.' });
      return;
    }

    const members = (trip as any).UserTrips.map((userTrip: any) => ({
      id: userTrip.User.id,
      username: userTrip.User.username,
      email: userTrip.User.email,
      role: userTrip.role,
    }));

    res.status(200).json({ members });
  } catch (err) {
    console.error('❌ Erreur lors de la récupération des membres :', err);
    res.status(500).json({ error: 'Erreur serveur lors de la récupération des membres.' });
  }
};