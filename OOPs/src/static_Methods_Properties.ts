class NewClass{
    public static PI= Math.PI;
    public static name: string;
    static myMethod(){
        console.log("This is Static Method")
    }
} 
NewClass.name="Anshika";
console.log(NewClass.name)
NewClass.myMethod();
console.log(NewClass.PI);