import { Request, Response } from 'express';
import { Trip, UserTrip } from '../models';

// ==========================================
// ============ CREATE A TRIP ===============
// ==========================================

export const createTrip = async (req: Request, res: Response): Promise<void> => {
  const { title, startDate, endDate, budget, adults, children } = req.body;

  if (!req.user) {
    res.status(401).json({ error: 'Utilisateur non authentifié.' });
    return;
  }

  try {
    const newTrip = await Trip.create({
      title,
      startDate,
      endDate,
      budget,
      adults,
      children,
    });

    await UserTrip.create({
      userId: req.user.id,
      tripId: newTrip.getDataValue('id'),
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