const repeatString = function (stringToRepeat, num) {
  let resultString = '';
  for (let i = 1; i <= num; i++) {
    resultString += stringToRepeat;
  }
  if (num < 0) {
    return 'ERROR';
  } else {
    return resultString;
  }
};
repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('goodbye', -1);
repeatString('', 12);
repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
