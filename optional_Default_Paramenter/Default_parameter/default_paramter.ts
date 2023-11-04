const greet1=(name:string, id:number):string=>{
    return `Welcome, ${name} and ur id is ${id}`
}
const temp = greet1("ABC",2)
console.log(temp)

const greet2=(name:string, id:number=1):string=>{
    return `Welcome, ${name} and ur id is ${id}`
}
const temp1 = greet2("ABC")
console.log(temp1)