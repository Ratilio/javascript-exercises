const removeFromArray = function(array, ...remove) {
  //the triple point in the arguments is to indicates multiple arguments but not in an array
  
  //filter removes from array the objects that "not" includes the object in the arguments
  return array.filter(i => !remove.includes(i));
};

// Do not edit below this line
module.exports = removeFromArray;
