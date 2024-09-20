const logger = (req, res, next) => {
  //store in db also log it
  console.log({ url: req.originalUrl, date: new Date() }); //or store in db
  next();
};

module.exports = { logger };
