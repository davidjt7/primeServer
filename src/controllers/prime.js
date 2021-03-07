const {
  sieveOfEratosthenes,
  getPrimes,
  isPrimeOptimized,
  isPrimeNaive,
} = require('simple-prime-generator/src/primeGenerator');
const { Log } = require('../db/log');
const { getTimeElapsed } = require('../utils');

const primeController = (req, res) => {
  const { strategy, start, end } = req.body;
  const timestamp = Date.now();
  const range = `${start} - ${end}`;
  const timer = process.hrtime();
  let result = null;

  switch (strategy) {
    case 'best':
      result = sieveOfEratosthenes(start, end);
      Log.create({
        timestamp,
        range,
        strategy,
        timeElapsed: getTimeElapsed(timer),
        numberOfPrimes: result.length,
      });
      res.send(result);
      return;
    case 'opt':
      result = getPrimes(start, end, isPrimeOptimized);
      Log.create({
        timestamp,
        range,
        strategy,
        timeElapsed: getTimeElapsed(timer),
        numberOfPrimes: result.length,
      });
      res.send(result);
      return;
    case 'naive':
      result = getPrimes(start, end, isPrimeNaive);
      Log.create({
        timestamp,
        range,
        strategy,
        timeElapsed: getTimeElapsed(timer),
        numberOfPrimes: result.length,
      });
      res.send(result);
      return;
    default:
      Log.create({
        timestamp,
        range,
        strategy,
        timeElapsed: getTimeElapsed(timer),
        numberOfPrimes: 0,
      });
      res.send('Invalid strategy');
  }
};

module.exports = {
  primeController,
};
