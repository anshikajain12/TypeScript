class Person{
    name:string;
    age:number;
    hobbies:string[]
    constructor(name:string,age:number,hobbies:string[]){
        this.name= name;
        this.age= age;
        this.hobbies=hobbies;
    }
    display() {
        console.log(`Name is ${this.name} and age is: ${this.age} and hobbies are: ${this.hobbies}`);
    }
}
const student= new Person("Abc",20,["Singing","Dancing"]);
console.log(student)
student.display();
const teacher= new Person("Abc",20,["Teacing","Reading"]);
console.log(teacher)
teacher.display()

export {Person};