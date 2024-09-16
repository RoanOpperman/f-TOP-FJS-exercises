const reverseString = function (inputString) {
  let reversedString = "";
  for (let i = inputString.length; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }
  return reversedString;
};
reverseString("hello");
reverseString("hello there");
reverseString("123! abc! Hello, Odinite.");
reverseString("");
module.exports = reverseString;
