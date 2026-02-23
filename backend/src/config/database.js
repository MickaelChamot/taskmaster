import pg from "pg";
const { Pool } = pg;


const createPool = (connectionString) => { 
  return new Pool({
    connectionString: connectionString,  
    ssl: {
      rejectUnauthorized: false
    }
  });
};

export default createPool;  