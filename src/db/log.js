const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  timestamp: String,
  range: String,
  strategy: String,
  timeElapsed: String,
  numberOfPrimes: Number,
});
const Log = mongoose.model('Log', logSchema);

module.exports = {
  Log,
};
