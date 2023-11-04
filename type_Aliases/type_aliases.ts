type Persons={
    name:string;
    age:number;
    address:{city:string, country:string};
    clss?:String; //optional property or parameter
    studentName:string[]
}

const person1:Persons= {
  name: "ABC",
  age: 20,
  address: {
    city: "Agra",
    country: "India",
  },
  studentName: ["Aman", "Abb", "XYZ"],
};

const person2:Persons= {
    name: "XYZ",
    age: 30,
    address: {
      city: "Pune",
      country: "India",
    },
    clss:"person2",
    studentName: ["Aman", "Abb", "XYZ"],
  };
//to access the data
console.log(person1);
console.log(person2)
