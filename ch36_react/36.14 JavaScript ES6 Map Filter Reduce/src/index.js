import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function mappingFunction(x) {
  return Math.floor((x * x) / 2);
}
const numbersMapped = numbers.map(mappingFunction);
console.log(numbersMapped); // [4, 1568, 2, 1152, 12]

//Filter - Create a new array by keeping the items that return true.

const numbersFiltered = numbers.filter(function (x) {
  return x < 20;
});
console.log(numbersFiltered); // [3, 2, 5]

//Reduce - Accumulate a value by doing something to each item in an array.

const numbersReduced = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log(numbersReduced); // 114 (sum of all numbers in the array)

//Find - find the first item that matches from an array.

const foundNumber = numbers.find(function (x) {
  return x > 50;
});
console.log(foundNumber); // 56

const meaningsTrimmedTo100Chars = emojipedia.map((el) =>
  el.meaning.substring(0, 100)
);
console.log(meaningsTrimmedTo100Chars);

//FindIndex - find the index of the first item that matches.

const foundIndex = numbers.findIndex(function (x) {
  return x > 50;
});
console.log(foundIndex); // 1
