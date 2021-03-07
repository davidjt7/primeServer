const getTimeElapsed = (timer) =>
  `${process.hrtime(timer)[0]} s, ${(
    process.hrtime(timer)[1] / 1000000
  ).toFixed(3)} ms`;

module.exports = {
  getTimeElapsed,
};
