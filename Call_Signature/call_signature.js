"use strict";
const student1 = {
    name: "Anshika",
    age: 20,
    greet: ((country) => {
        return `Welcome, My name is: ${student1.name} and I am ${student1.age} years old and I am from ${country}`;
    })
};
const introduction = (student1) => {
    const { name, age } = student1; //object destructuring 
    return `Welcome, My name is: ${name} and I am ${age} years old`;
};
console.log(introduction(student1));
console.log(student1.greet("India"));
// console.log(student1("Agra"))
