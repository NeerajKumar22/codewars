// We need a function that can transform a string into a number. 
// What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, 
// and every string is a perfectly valid representation of an integral number.

var stringToNumber = function (str) {
  if (str) {
    return Number(str)
  }
  return null;
}

// var stringToNumber = Number;

// const stringToNumber = str => parseInt(str);

// var stringToNumber = function(str){
//  return +str;
// }
console.log(stringToNumber("123"));