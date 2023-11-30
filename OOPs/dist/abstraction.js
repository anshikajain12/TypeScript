"use strict";
class Shape {
    color;
    name;
    displayArea = () => {
        console.log(`This is ${this.color} of shape`);
    };
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle("red", 5);
console.log(circle.calculateArea());
circle.displayArea();
