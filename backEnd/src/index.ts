import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './config/database';
import './models';
import routes from './routes';

// Chargement des variables d'environnememnt dans .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware JSON
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Routes
app.use('/api', routes); // ex: /api/auth/register

// Test route
app.get('/', (req, res) => {
  res.send('🚀 API TravelTheWorld opérationnelle');
});

// Connexion à la BDD et lancement du serveur
sequelize.sync({ alter: true }).then(() => {
  console.log('🗃️ Base de données synchronisée');
  app.listen(PORT, () => {
    console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('❌ Erreur de synchronisation Sequelize :', err);
});