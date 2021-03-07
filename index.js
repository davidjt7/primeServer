const {
  getPrimes,
  isPrimeNaive,
  isPrimeOptimized,
  sieveOfEratosthenes,
} = require('simple-prime-generator/src/primeGenerator');
const { respond, validate } = require('./src/util');
const { app } = require('./src/app');

const port = 8080;

const history = [];

app.get('/history', (_req, res) => {
  respond(history, res);
});

app.get(
  '/',
  (req, res) => validate(req, res),
  (req, res) => {
    const { strategy } = req.body;
    const timestamp = Date.now();
    const range = `${req.body.start} - ${req.body.end}`;
    const timer = process.hrtime();
    let result = null;
    switch (strategy) {
      case 'best':
        result = sieveOfEratosthenes(req.body.start, req.body.end);
        history.push({
          timestamp,
          range,
          strategy,
          timeElapsed: `${process.hrtime(timer)[0]} s, ${(
            process.hrtime(timer)[1] / 1000000
          ).toFixed(3)} ms`,
          numberOfPrimes: result.length,
        });
        respond(result, res);
        break;
      case 'opt':
        result = getPrimes(req.body.start, req.body.end, isPrimeOptimized);
        history.push({
          timestamp,
          range,
          strategy,
          timeElapsed: `${process.hrtime(timer)[0]} s, ${(
            process.hrtime(timer)[1] / 1000000
          ).toFixed(3)} ms`,
          numberOfPrimes: result.length,
        });
        respond(result, res);
        break;
      case 'naive':
        result = getPrimes(req.body.start, req.body.end, isPrimeNaive);
        history.push({
          timestamp,
          range,
          strategy,
          timeElapsed: `${process.hrtime(timer)[0]} s, ${(
            process.hrtime(timer)[1] / 1000000
          ).toFixed(3)} ms`,
          numberOfPrimes: result.length,
        });
        respond(result, res);
        break;
      default:
        history.push({
          timestamp,
          range,
          strategy,
          timeElapsed: `${process.hrtime(timer)[0]} s, ${(
            process.hrtime(timer)[1] / 1000000
          ).toFixed(3)} ms`,
          numberOfPrimes: 0,
        });
        respond('Invalid strategy', res);
    }
  }
);

app.listen(port, () => {});
