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
const student = new Person("Abc", 20, ["Singing", "Dancing"]);
console.log(student);
student.display();
const teacher = new Person("Abc", 20, ["Teacing", "Reading"]);
console.log(teacher);
teacher.display();
export { Person };
