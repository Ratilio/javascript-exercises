const reverseString = function(string) {
  let word = ''; 
  //sting.length-1 is necessary or it will leave a blank space "undefined"
  for (let index = string.length-1; index >= 0; index--) {
    word += string[index];
  }
  return word;
};

// Do not edit below this line
module.exports = reverseString;
