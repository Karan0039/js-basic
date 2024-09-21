var express = require("express");
const { Users } = require("../models/user");
var router = express.Router();

router.post("/create", async function (req, res, next) {
  try {
    let { email, password } = req.body;
    let addedUser = await Users.create({ email, password }); //gives object that has been added
    res.send({ addedUser });
  } catch (err) {
    console.log(err);
  }
});

router.get("/get-all", async function (req, res, next) {
  let users = await Users.find(); // gives array of all added users
  res.send({ users });
});

module.exports = router;
