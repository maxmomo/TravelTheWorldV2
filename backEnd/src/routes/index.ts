import { Router } from 'express';

import authRoutes from './auth.routes';
import tripRoutes from './trip.routes';
import planningRoutes from './planning.routes';
import docuementRoutes from './document.routes';

const router = Router();

router.use('/auth', authRoutes); 
router.use('/trips', tripRoutes);
router.use('/plannings', planningRoutes);
router.use('/documents', docuementRoutes);

export default router;