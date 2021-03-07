const respond = (message, res) => {
  res.send(message);
};

const validate = (req, res) => {
  if (!Number.isInteger(req.body.start) || !Number.isInteger(req.body.end)) {
    respond('Invalid start and/or end', res);
  }
  if (!req.body.strategy) {
    respond('Strategy required', res);
  }
};

module.exports = {
  respond,
  validate,
};
