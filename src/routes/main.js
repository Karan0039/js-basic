const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("helloworld");
});

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.send({ body });
});

module.exports = router;
