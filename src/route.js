const express = require("express");

const router = express.Router();

const middleware = (req, res, next) => {
  //   console.log("router  level middleware");
  next();
};

//route level middleware
router.get("/", middleware, (req, res) => {
  console.log(req.userId);
  //   console.log("inside route method");
  res.send("hello world");
});

router.post("/", (req, res) => {
  console.log("inside route method");
});

module.exports = router;
