const { Log } = require('../db/log');

const historyController = async (_req, res) => {
  const history = await Log.find({}).select('-_id -__v');
  res.send(history);
};

module.exports = {
  historyController,
};
