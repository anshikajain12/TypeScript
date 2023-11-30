type Stud={
    name:string;
    age:number;
}
type studAdd={
    city:string;
    state:string;
}
type data= Stud | studAdd;
const bioData:data={
    name:"Abc",
    age:20,
    city:"Agra"
}
console.log(bioData)

interface Student{
    name:string;
    age:number;
}
interface studAddress{
    city:string;
    state?:string;
}
interface Data extends Student,studAddress{}

const BioData: Data={
    name:"Abc",
    age:20,
    city:"Agra"
}
class Bio implements Data{
    constructor(
    public name: string,
    public age: number,
    public city: string,
    public state?: string | undefined){}
}

const stu1= new Bio("Anshika",20,"Agra","UP");
console.log(stu1)