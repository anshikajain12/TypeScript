// define our tuple
let ourTuple:readonly[number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// ourTuple.push("Something went wrong"); //to avoid this problem we have to use one property i.e, readonly

console.log(ourTuple)
//define a tuple
type PersonInfo =[string, number, boolean]

//function to displaye information
const displayPersonInfo=(person:PersonInfo)=>{
    const [name,age,hasDrivingLicence]= person;
    console.log(`name is ${name} and age is ${age}  and Driving Licence: ${hasDrivingLicence ? "yes": "No"}`)
}

const persons1:PersonInfo=['Anshika',20,true]
const persons2:PersonInfo=['Astha',23,false]

//call the method
displayPersonInfo(persons1)