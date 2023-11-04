/* number type */
let myNum:number = 10;
// myNum= "Thapa" -----> type checking
console.log(myNum.toString())
let sum = myNum+10;
console.log(sum)


/* String type */
let age:number=20;
// let invalidNumber:number = age +" years" ------> invalid;
let invalidNumber:any = age +" years" //valid
console.log(invalidNumber)

let computeValue:number = Math.sqrt(16);
console.log(computeValue)

let str:string="Anshika"
let myLastName = " Jain"
console.log(str + myLastName)
console.log("str length: "+ str.length)
console.log("str uppcase: "+ str.toUpperCase() +" str lowercase: "+str.toLowerCase())
console.log("str substring: "+ str.substring(1,str.length))


/* boolean type */
let bool:boolean=false;
console.log(bool)


/* bigint type: introduced in ES2020 */
const maxNumber= (Number as any).MAX_SAFE_INTEGER;
// const maxNumber:bigint= 9007199254740991n;
console.log(maxNumber)


/* any type */
let an:any= "anyType";
console.log(typeof an + " "+ an)
an= 10;
console.log(typeof an + " "+ an)
an=false;
console.log(typeof an + " "+ an)
if(typeof an ==="number"){
    console.log(an+ 15)
}


/* unknown type */
let un: unknown= 10;
console.log(`${typeof un} and ${un}`)
un= "thapa";
console.log(`${typeof un} and ${un}`)
un = true
console.log(`${typeof un} and ${un}`)

if(typeof un ==="number"){
    console.log(un+ 5)
}else if(typeof un ==="string"){
    console.log(un + 5)
}else{
    console.log(un)
}