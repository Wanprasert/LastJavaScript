/*
highestDigit(379) -> 9
highestDigit(2) -> 2
highestDigit(377401) -> 7 
*/

function highestDigit(num) {
  return Math.max(...num.toString().split(""));
}
console.log(highestDigit(379)); //9
console.log(highestDigit(2)); //2
console.log(highestDigit(377401)); //7
