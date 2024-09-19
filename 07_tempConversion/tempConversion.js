const convertToCelsius = function (tempInFahr) {
  let tempCelsiusResult = (tempInFahr - 32) * (5 / 9);
  return Number(tempCelsiusResult.toFixed(1));
};

const convertToFahrenheit = function (tempInCelsius) {
  let tempFahrResult = (9 / 5) * tempInCelsius + 32;
  return Number(tempFahrResult.toFixed(1));
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
