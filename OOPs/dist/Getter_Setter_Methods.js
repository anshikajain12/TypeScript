"use strict";
class Example1 {
    name;
    hobbies;
    _age;
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    set age(age) {
        if (age > 150 || age < 0) {
            throw new Error("Invalid Age");
        }
        console.log("Age is added");
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("Age is not defined");
        }
        return `Getting the age ${this._age}`;
    }
    display() {
        console.log(`Name is ${this.name} and age is: ${this._age} and hobbies are: ${this.hobbies}`);
    }
}
const exm = new Example1("Abc", ["Teacing", "Reading"]);
exm.age = 20;
console.log(exm.age);
