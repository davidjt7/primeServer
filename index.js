const {
  getPrimes,
  isPrimeNaive,
  isPrimeOptimized,
  sieveOfEratosthenes,
} = require("simple-prime-generator/primeGenerator");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;

app.use(bodyParser.json())

app.get("/", (req, res) => {
    if(!Number.isInteger(req.body.start) || !Number.isInteger(req.body.end)){
        res.send("Invalid start and/or end");
        return;
    }
    if(!req.body.strategy){
        res.send("Strategy required");
        return;
    }

    switch(req.body.strategy){
        case 'best':
            res.send(sieveOfEratosthenes(req.body.start, req.body.end));
            return;
        case 'opt':
            res.send(getPrimes(req.body.start, req.body.end, isPrimeOptimized));
            return;
        case 'naive':
            res.send(getPrimes(req.body.start, req.body.end, isPrimeNaive));
            return;
        default:
            res.send("Invalid strategy");
            return;
    }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
