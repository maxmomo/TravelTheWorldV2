import express from 'express';
import { createTrip, getTrip, getTripMembers, getUserTrips, joinTrip } from '../controllers/trip.controller';
import { authenticateUser } from '../middleware/authMiddleware';
import { createPlanning, getTripPlannings } from '../controllers/planning.controller';

const router = express.Router();

// ==============================
// ========== TRIPS ============
// ==============================

// Création d’un voyage (protégé)
router.post('/', authenticateUser, createTrip);

// Récupération des voyages de l'utilisateur connecté (protégé)
router.get('/my-trips', authenticateUser, getUserTrips);

// Récupération d'un voyage pour l'utilisateur (protégé)
router.get('/:id', authenticateUser, getTrip);

// Création d’un planning (protégé)
router.post('/:tripId/planning', authenticateUser, createPlanning);

// Récupération des plannings du voyage (protégé)
router.get('/:tripId/planning', authenticateUser, getTripPlannings);

// Rejoindre un voyage avec une clé (protégé)
router.post('/join', authenticateUser, joinTrip);

router.get('/:id/members', authenticateUser, getTripMembers);

export default router;