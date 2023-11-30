abstract class Shape{
    abstract calculateArea():number;
    name?:string;
    displayArea=()=> {
        console.log(`This is ${this.color} of shape`);
    };
    constructor(protected color:string){}


}
class Circle extends Shape{
    constructor(protected color:string,protected radius:number){
        super(color);
    }
    public calculateArea(): number {
        return Math.PI*this.radius*this.radius;
    }
    // public displayArea= ()=>{
    //     console.log(`This is ${this.color} circle with radius ${this.radius}`);
    // }
}
const circle = new Circle("red",5);
console.log(circle.calculateArea())
circle.displayArea(); 