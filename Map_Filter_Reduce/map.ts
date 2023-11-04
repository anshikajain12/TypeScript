const numbers:number[]= [1,2,3,4,5]
//double the values
const mapArray:number[] =  numbers.map((value:number)=>value*2)
console.log(mapArray)

//convert number to string

const numtoString = numbers.map((curEle)=> curEle.toString())
console.log(numtoString)