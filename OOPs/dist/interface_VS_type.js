"use strict";
const bioData = {
    name: "Abc",
    age: 20,
    city: "Agra"
};
console.log(bioData);
const BioData = {
    name: "Abc",
    age: 20,
    city: "Agra"
};
class Bio {
    name;
    age;
    city;
    state;
    constructor(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
}
const stu1 = new Bio("Anshika", 20, "Agra", "UP");
console.log(stu1);
