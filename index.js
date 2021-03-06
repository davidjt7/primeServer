const {
  getPrimes,
  isPrimeNaive,
  isPrimeOptimized,
  sieveOfEratosthenes,
} = require("simple-prime-generator/primeGenerator");

const express = require("express");
const bodyParser = require("body-parser");
const { respond, validate } = require("./src/util");

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  validate(req, res);

  switch (req.body.strategy) {
    case "best":
      respond(sieveOfEratosthenes(req.body.start, req.body.end), res);
      break;
    case "opt":
      respond(getPrimes(req.body.start, req.body.end, isPrimeOptimized), res);
      break;
    case "naive":
      respond(getPrimes(req.body.start, req.body.end, isPrimeNaive), res);
      break;
    default:
      respond("Invalid strategy", res);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
