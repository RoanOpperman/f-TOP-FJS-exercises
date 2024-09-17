const removeFromArray = function (arrayObject, ...inputs) {
  const arrayArgument = arrayObject;
  const referenceArgument = inputs;
  const resultArr = [];
  for (let i = 0; i < arrayArgument.length; i++) {
    let enablePushResult = true;
    for (let r = 0; r < referenceArgument.length; r++) {
      if (arrayArgument[i] === referenceArgument[r]) {
        enablePushResult = false;
        break;
      }
    }
    if (enablePushResult) {
      resultArr.push(arrayArgument[i]);
    }
  }
  return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
