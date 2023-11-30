class Example1 {
    private _age: number | undefined;
  constructor(
    public name: string,
    protected hobbies: string[]
  ) { }
  public set age(age:number){
    if(age>150 || age<0){
        throw new Error ("Invalid Age")
    }
    console.log("Age is added")
    this._age= age;
  }
  public get age():string{
    if(this._age===undefined){
        throw new Error("Age is not defined")
    }
    return `Getting the age ${this._age}`;
  }
  display() {
    console.log(`Name is ${this.name} and age is: ${this._age} and hobbies are: ${this.hobbies}`);
  }

}

const exm = new Example1("Abc", ["Teacing", "Reading"]);
exm.age=20;
console.log(exm.age)
