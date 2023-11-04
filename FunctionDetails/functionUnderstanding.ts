/*
    function invocation
    function declaration
    function return type
*/
// function declaration: name and id is parameter
function greet(name:string, id:number){
    console.log(`Welcome ${name} and your id is ${id}`)
}

//function invocation
greet("Anshika",1);

//using arrow function 
const arrowfunc = (name:string, id:number)=>{
    console.log(`Welcome ${name} and your id is ${id}`)
}
arrowfunc("ABC",20)


//using return type function 
const func = (name:string, id:number):string=>{
   return `Welcome ${name} and your id is ${id}`;
}
let output=  func("ABC",20);
console.log(output)