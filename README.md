## Serves

https://github.com/davidjt7/primeGenerator

## Run

- Install deps

```
yarn
```

- Run server

```
yarn start
```

## Sample Requests

### GET /

req.body -

```javascript
{
    "start": 4,
    "end": 10,
    "strategy": "best"
}
```

res.body -

```javascript
[5, 7];
```

### GET /history

res.body -

```javascript
[
  {
    timestamp: 1615053516068,
    range: '4 - 20',
    strategy: 'best',
    timeElapsed: '0 s, 0.087 ms',
    numberOfPrimes: 6,
  },
  {
    timestamp: 1615053525036,
    range: '4 - 10',
    strategy: 'best',
    timeElapsed: '0 s, 0.022 ms',
    numberOfPrimes: 2,
  },
];
```
