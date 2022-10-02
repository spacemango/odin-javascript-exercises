const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 >= num2 ? num1 - num2 : num2 - num1;
};

const sum = function (nums) {
  return nums.reduce((acc, num) =>
    acc + num, 0);
};

const multiply = function (nums) {

  return nums.reduce((acc, num) => acc * num, 1);
};

const power = function (num, pow) {
  return Math.pow(num, pow);
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }

  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
