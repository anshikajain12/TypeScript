"use strict";
const greet3 = (name, id) => {
    if (typeof id !== 'undefined') {
        return `Welcome, ${name} and ur id is ${id}`;
    }
    return `Welcome, ${name}`;
};
const temp2 = greet3("ABC");
console.log(temp2);
const temp3 = greet3("ABC", 20);
console.log(temp3);
