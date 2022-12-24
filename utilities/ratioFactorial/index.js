const factorial = require("../factorial/index.js");
const ratio = require("../ratio/index.js");

const ratioAndFactorial = (num1, num2, num3) => {
  return ratio(num1, num2);
  return factorial(num3);
};
module.exports = ratioAndFactorial;
console.log(ratioAndFactorial(6, 3, 5));
