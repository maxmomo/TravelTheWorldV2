import express from 'express';
import { authenticateUser } from '../middleware/authMiddleware';
import { deletePlanning, updatePlanning } from '../controllers/planning.controller';

const router = express.Router();

// ==============================
// ========= PLANNING ===========
// ==============================

// Suppression d'un planning (protégé)
router.delete('/:id', authenticateUser, deletePlanning);

// Modification d'un planning (protégé)
router.patch('/:id', authenticateUser, updatePlanning);

export default router;