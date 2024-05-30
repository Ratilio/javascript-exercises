const palindromes = function (array) {
  let punctuation = /[^a-z]/g;//regex to only accept letters
  let newArray = array.toLowerCase().replace(punctuation, "");//creates new array, transform to lower case and eliminates punctuation and glues all the letters into one element
  let reverseArray = newArray.split('').reverse().join('');//creates new array, splits every letter into elements of array, reverse it and joins the array into one element
  return reverseArray === newArray;
};

// Do not edit below this line
module.exports = palindromes;
