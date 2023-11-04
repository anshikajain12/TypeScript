"use strict";
/* number type */
let myNum = 10;
// myNum= "Thapa" -----> type checking
console.log(myNum.toString());
let sum = myNum + 10;
console.log(sum);
/* String type */
let age = 20;
// let invalidNumber:number = age +" years" ------> invalid;
let invalidNumber = age + " years"; //valid
console.log(invalidNumber);
let computeValue = Math.sqrt(16);
console.log(computeValue);
let str = "Anshika";
let myLastName = " Jain";
console.log(str + myLastName);
console.log("str length: " + str.length);
console.log("str uppcase: " + str.toUpperCase() + " str lowercase: " + str.toLowerCase());
console.log("str substring: " + str.substring(1, str.length));
/* boolean type */
let bool = false;
console.log(bool);
/* bigint type: introduced in ES2020 */
const maxNumber = Number.MAX_SAFE_INTEGER;
// const maxNumber:bigint= 9007199254740991n;
console.log(maxNumber);
/* any type */
let an = "anyType";
console.log(typeof an + " " + an);
an = 10;
console.log(typeof an + " " + an);
an = false;
console.log(typeof an + " " + an);
if (typeof an === "number") {
    console.log(an + 15);
}
/* unknown type */
let un = 10;
console.log(`${typeof un} and ${un}`);
un = "thapa";
console.log(`${typeof un} and ${un}`);
un = true;
console.log(`${typeof un} and ${un}`);
if (typeof un === "number") {
    console.log(un + 5);
}
else if (typeof un === "string") {
    console.log(un + 5);
}
else {
    console.log(un);
}
