let num = 10;
console.log("Type inference ")
console.log(typeof num)
// num= "ABC"; invalid


// Q1: Declear a variable message and initialize it with the value "Hello, TypeScript!". infer the type of message using type inference.

let message = "Hello, typeScript!";
console.log(message);
// Q2: write a function calculateArea that takes the length and width paramenter of type number and returns their product, Infer the return type of the function using type inference
function calculateArea(length:number, width:number) {
  return length * width;
}
console.log(calculateArea(3,6))
