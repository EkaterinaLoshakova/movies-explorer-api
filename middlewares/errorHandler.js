const { INTERNAL_SERVER_ERROR } = require('../utils/constants');

module.exports = ((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  if (statusCode === 500) {
    console.log(500, err.message);
  }
  res.status(statusCode).send({
    message: statusCode === 500 ? INTERNAL_SERVER_ERROR : message,
  });
  next();
});
