import { Person } from "./classes";

class ChildClass extends Person{
    degis:string;
    constructor(name:string,age:number,hobbies:string[],degis:string){
        super(name,age,hobbies);
        this.degis=degis;
    }
    displayAllDetails(): void {
        super.display();
        console.log(`Designation is :${this.degis}`)
    }
}
console.log("Child Class")
const student1= new ChildClass("Abc",20,["Singing","Dancing"],"student");
console.log(student1)
student1.displayAllDetails();
const teacher1= new ChildClass("Abc",20,["Teacing","Reading"],"teacher");
console.log(teacher1);
teacher1.displayAllDetails();