import { Request, Response } from 'express';
import { User } from '../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export const register = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;

  try {
    // Vérifie si l'email est déjà utilisé
    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
      res.status(409).json({ error: 'Email déjà utilisé.' });
      return;
    }

    // Vérifie si le username est déjà pris
    const existingUsername = await User.findOne({ where: { username } });
    if (existingUsername) {
      res.status(409).json({ error: 'Nom d\'utilisateur déjà utilisé.' });
      return;
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création de l'utilisateur
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const userPayload = {
      id: newUser.getDataValue('id'),
      username: newUser.getDataValue('username'),
      email: newUser.getDataValue('email'),
    };

    // Génération du token
    const token = jwt.sign(userPayload, JWT_SECRET, { expiresIn: '2h' });

    res.status(201).json({
      message: 'Utilisateur créé.',
      token,
      user: userPayload,
    });

  } catch (err) {
    console.error('❌ Erreur lors de l\'inscription :', err);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    // Vérifie que l'utilisateur existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401).json({ error: 'Identifiants incorrects.' });
      return;
    }

    // Vérifie le mot de passe
    const passwordMatch = await bcrypt.compare(password, user.getDataValue('password'));
    if (!passwordMatch) {
      res.status(401).json({ error: 'Identifiants incorrects.' });
      return;
    }

    const userPayload = {
      id: user.getDataValue('id'),
      username: user.getDataValue('username'),
      email: user.getDataValue('email'),
    };

    // Génération du token
    const token = jwt.sign(userPayload, JWT_SECRET, { expiresIn: '2h' });

    res.status(200).json({
      message: 'Connexion réussie.',
      token,
      user: userPayload,
    });

  } catch (err) {
    console.error('❌ Erreur lors de la connexion :', err);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
};
