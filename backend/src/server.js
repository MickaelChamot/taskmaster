import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import createPool from "./config/database.js";  // ← CHANGEMENT : import de la fonction createPool

// ← NOUVEAU : On crée le pool ICI, APRÈS avoir chargé dotenv
const pool = createPool(process.env.DATABASE_URL);

const app = express();
const port = 8000;

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running"
  });
});

const testDatabaseConnection = async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Connexion à la base de données réussie !');
    console.log('📅 Heure du serveur DB:', result.rows[0].now);
  } catch (error) {
    console.error('❌ Erreur de connexion à la base de données:');
    console.error('Message:', error.message);
    console.error('Code:', error.code);
  }
};

app.listen(port, async () => {
  console.log(`🚀 Le serveur est en marche sur http://localhost:${port}`);
  await testDatabaseConnection();
});