const sumAll = function (rangeStart, rangeEnd) {
  let sum = 0;
  let swapArgs = 0;
  if (rangeStart > rangeEnd) {
    swapArgs = rangeStart;
    rangeStart = rangeEnd;
    rangeEnd = swapArgs;
  }
  if (
    !Number.isInteger(rangeStart) ||
    !Number.isInteger(rangeEnd) ||
    rangeStart < 0 ||
    rangeEnd < 0
  )
    return "ERROR";
  for (let i = rangeStart; i <= rangeEnd; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line.
module.exports = sumAll;
