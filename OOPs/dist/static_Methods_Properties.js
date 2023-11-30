"use strict";
class NewClass {
    static PI = Math.PI;
    static name;
    static myMethod() {
        console.log("This is Static Method");
    }
}
NewClass.name = "Anshika";
console.log(NewClass.name);
NewClass.myMethod();
console.log(NewClass.PI);
