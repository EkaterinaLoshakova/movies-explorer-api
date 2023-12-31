const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
  windowMs: 20 * 60 * 1000,
  max: 150,
  standardHeaders: true,
  legacyHeaders: false,
});
