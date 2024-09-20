const express = require("express");
const mainRouter = require("./src/route");
const { logger } = require("./src/logger");

const app = express();

//Application level middleware
app.use(express.json());
app.use(logger);
const processToken = (req, res, next) => {
  const userId = 1234; //supose we get this from token
  req.userId = userId;
  //   console.log("app level middleware1");
  next();
};

const middleware2 = (req, res, next) => {
  //   console.log("app level middleware2");
  next();
};
//application level middleware
app.use("/main", processToken, middleware2, mainRouter);

app.listen(3000).on("listening", () => {
  console.log("listening on port 3000");
});
