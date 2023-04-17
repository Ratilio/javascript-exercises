const repeatString = function(string, repetitions) {
  let word = '';
  if (repetitions < 0) word = 'ERROR';
  
  for (let index = 0; index < repetitions; index++) {
    word += string;
  }
  return word;
};

// Do not edit below this line
module.exports = repeatString;
