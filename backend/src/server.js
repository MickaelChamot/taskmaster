const express = require("express");

const app = express();
const port = 8000;

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "server is running",
  });
});

app.listen(port, () => {
  console.log(`Le serveur est en marche sur http://localhost:${port}`);
});
