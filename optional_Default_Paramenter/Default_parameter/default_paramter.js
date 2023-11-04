"use strict";
const greet1 = (name, id) => {
    return `Welcome, ${name} and ur id is ${id}`;
};
const temp = greet1("ABC", 2);
console.log(temp);
const greet2 = (name, id = 1) => {
    return `Welcome, ${name} and ur id is ${id}`;
};
const temp1 = greet2("ABC");
console.log(temp1);
