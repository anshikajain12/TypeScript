"use strict";
const person = {
    name: "ABC",
    age: 20,
    address: {
        city: "Agra",
        country: "India",
    },
    studentName: ["Aman", "Abb", "XYZ"],
};
//to access the data
console.log(person.name);
//todo update object properties
person.address.city = "Jalesar";
// obj.address.city=10; --->invalid
console.log(person);
