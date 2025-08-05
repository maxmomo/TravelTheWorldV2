import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models';

export const authenticateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
      res.status(401).json({ error: 'Accès non autorisé. Token manquant.' });
      return;
    }

    const token = authHeader.replace('Bearer ', '');
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      res.status(500).json({ error: 'Clé secrète non définie.' });
      return;
    }

    const decoded = jwt.verify(token, secret) as { id: number };
    const user = await User.findByPk(decoded.id);

    if (!user) {
      res.status(401).json({ error: 'Utilisateur introuvable.' });
      return;
    }

    req.user = {
      id: user.getDataValue('id'),
      username: user.getDataValue('username'),
      email: user.getDataValue('email'),
    };

    next();
  } catch (err) {
    console.error('❌ Erreur d’authentification :', err);
    res.status(401).json({ error: 'Token invalide.' });
  }
};
