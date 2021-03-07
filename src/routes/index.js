const { app } = require('../app');
const { historyController } = require('../controllers/history');
const { primeController } = require('../controllers/prime');
const { validatePrime } = require('../validators/prime');

app.get('/history', historyController);
app.get('/', validatePrime, primeController);

module.exports = {
  app,
};
