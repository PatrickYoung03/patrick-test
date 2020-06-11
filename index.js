const express = require("express");
const app = express();
const router = express.Router();
const { fizzbuzz } = require("./app.js");

const port = 3000;

app.use(router);

// routes
router.get("/fizzbuzz/:num", (req, res) => {
  const { num } = req.params;
  const result = fizzbuzz(num);
  res.json({ message: result });
});

// models

app.listen(port, console.log(`app listening on port: ${port}`));
