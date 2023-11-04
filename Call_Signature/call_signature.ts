type Student={
    name:string;
    age:number;
    gender?:string;
    greet:(country:string)=>string //method call signature
    // (city:string):string // pure call signature
}

const student1:Student={
    name:"Anshika",
    age:20,
    greet:((country):string=>{
        return `Welcome, My name is: ${student1.name} and I am ${student1.age} years old and I am from ${country}`;
    })

}
const introduction=(student1:Student):string=>{
    const {name, age}= student1; //object destructuring 
    return `Welcome, My name is: ${name} and I am ${age} years old`;
}
console.log(introduction(student1));

console.log(student1.greet("India"))

// console.log(student1("Agra"))