import express from 'express';
import { authenticateUser } from '../middleware/authMiddleware';
import {
  uploadDocument, // 👈 ajoute bien ceci
  deleteDocument,
  updateDocument,
  getDocumentsByPlanning
} from '../controllers/document.controller';

const router = express.Router();

// Route d’upload de document (POST)
router.post('/upload', authenticateUser, uploadDocument);

// Update d’un document (PUT)
router.put('/document/:id', authenticateUser, updateDocument);

// Suppression
router.delete('/document/:id', authenticateUser, deleteDocument);

// Récupération des documents par planning
router.get('/:planningId/document', authenticateUser, getDocumentsByPlanning)

export default router;
