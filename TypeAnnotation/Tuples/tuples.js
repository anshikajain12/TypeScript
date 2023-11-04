"use strict";
// define our tuple
let ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// ourTuple.push("Something went wrong"); //to avoid this problem we have to use one property i.e, readonly
console.log(ourTuple);
//function to displaye information
const displayPersonInfo = (person) => {
    const [name, age, hasDrivingLicence] = person;
    console.log(`name is ${name} and age is ${age}  and Driving Licence: ${hasDrivingLicence ? "yes" : "No"}`);
};
const persons1 = ['Anshika', 20, true];
const persons2 = ['Astha', 23, false];
//call the method
displayPersonInfo(persons1);
