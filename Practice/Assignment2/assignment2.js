"use strict";
//write a function that takes a parameter and return true if this number ois divisble by 4 and 8 both
function isDivisibleBy4And8(num) {
    return (num % 4 == 0 && num % 8 == 0) ? true : false;
}
let checkNumber = isDivisibleBy4And8(16);
console.log(checkNumber);
//write a func that takes a parameter and return true if number is even otherwise false
function isEven(num) {
    return (num % 2 === 0) ? true : false;
}
let checkEven = isEven(50);
console.log(checkEven);
