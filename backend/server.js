const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello Word !");
});

app.listen(port, () => {
  console.log(`Le serveur est en marche sur http://localhost:${port}`);
});
