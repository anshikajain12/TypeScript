/**Using Shorthand property */
class Example {
  constructor(
    public name: string,
    public age: number,
    public hobbies: string[]
  ) {
    this.age = age;
  }
  display() {
    console.log(
      `Name is ${this.name} and age is: ${this.age} and hobbies are: ${this.hobbies}`
    );
  }
}
const teacher1 = new Example("Abc", 20, ["Teacing", "Reading"]);
console.log(teacher1);


/**Normal flow */
class Person {
  protected name: string;
  private age: number;
  hobbies: string[];
  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
  display() {
    console.log(
      `Name is ${this.name} and age is: ${this.age} and hobbies are: ${this.hobbies}`
    );
  }
}
class ChildClass extends Person {
  degis: string;
  constructor(name: string, age: number, hobbies: string[], degis: string) {
    super(name, age, hobbies);
    this.degis = degis;
  }
  displayAllDetails(): void {
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
