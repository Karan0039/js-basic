const express = require("express");
const mainRouter = require("./src/routes/main");

const app = express();

app.use(express.json());

app.use("/", mainRouter);

app.listen(3000).on("listening", () => console.log("listening on port 5000"));
