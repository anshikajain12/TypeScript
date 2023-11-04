//write a function that takes a string as parameter and return true if string is pallindrome
const isPallindrome = (str: string): boolean => {
  let pallin = str.split("").reverse().join("");
  return pallin === str ? true : false;
};
let res = isPallindrome("ABCBA");
console.log(res);

//write a function that takes an array of numbers and return the avergae of those numbers
const findAverage = (arr: Array<number>): number => {
  let sum: number = 0;
  arr.forEach((value) => {
    sum += value;
  });
  return sum / arr.length;
};
const avg = findAverage([2, 3, 4, 5, 6, 7]);
console.log(`Average of [2,3,4,5,6,7] is: ${avg}`);

//write a function that takes an array of numbers and return the maximum value of the array
function findMax(arr1: Array<number>): number{
  let max: number = 0;
  arr1.forEach((values) => {
    max = Math.max(max, values);
  });
  return max;
};
const maxVlaues = findMax([2, 3, 9, 4, 5, 6, 7,0]);
console.log(`Max value from [2, 3, 9, 4, 5, 6, 7,0] is: ${maxVlaues}`);
