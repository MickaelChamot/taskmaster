import pg from "pg";
const { Pool } = pg;

// ← CHANGEMENT : On exporte une FONCTION au lieu d'un pool direct
const createPool = (connectionString) => {  // ← NOUVEAU : fonction qui prend la connection string en paramètre
  return new Pool({
    connectionString: connectionString,  // ← CHANGEMENT : on utilise le paramètre
    ssl: {
      rejectUnauthorized: false
    }
  });
};

export default createPool;  // ← CHANGEMENT : on exporte la fonction, pas le pool