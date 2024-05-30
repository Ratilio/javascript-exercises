const add = function(a, c) {
  return a + c;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((total, index) => total + index, 0);
};

const multiply = function(array) {
  return array.reduce((multiplier, product) => multiplier * product, 1);
};

const power = function(a, b) {
  return Math.pow(a, b);	
};

const factorial = function(n) {
  if(n === 0) return 1;
  let total = 1;
  for (let i = n; i > 0; i--) {
    total *= i;
  }
  return total;
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
