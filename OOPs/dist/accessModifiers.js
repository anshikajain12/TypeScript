"use strict";
/**Using Shorthand property */
class Example {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        this.age = age;
    }
    display() {
        console.log(`Name is ${this.name} and age is: ${this.age} and hobbies are: ${this.hobbies}`);
    }
}
const teacher1 = new Example("Abc", 20, ["Teacing", "Reading"]);
console.log(teacher1);
/**Normal flow */
class Person {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    display() {
        console.log(`Name is ${this.name} and age is: ${this.age} and hobbies are: ${this.hobbies}`);
    }
}
class ChildClass extends Person {
    degis;
    constructor(name, age, hobbies, degis) {
        super(name, age, hobbies);
        this.degis = degis;
    }
    displayAllDetails() {
        super.display();
        console.log(`Designation is :${this.degis}`);
    }
}
console.log("Child Class");
const student1 = new ChildClass("Abc", 20, ["Singing", "Dancing"], "student");
// console.log(student1.name) /**not access beacuse It is protected access within the subclass  */
student1.displayAllDetails();
const teacher2 = new ChildClass("Abc", 20, ["Teacing", "Reading"], "teacher");
// console.log(teacher1.age); /**not access beacuse It is private  */
teacher2.displayAllDetails();
