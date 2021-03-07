const validatePrime = (req, res, next) => {
  if (!Number.isInteger(req.body.start) || !Number.isInteger(req.body.end)) {
    res.send('Invalid start and/or end');
    return;
  }
  if (!req.body.strategy) {
    res.send('Strategy required');
    return;
  }
  next();
};

module.exports = {
  validatePrime,
};
