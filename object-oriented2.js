//OOPs in javscript ---> Means ye ek programming paradigm hai means ek style program karne ki ? apni code karne ki style hai?  Object oriented programming jis me class object ko use kar ke program ko design kiya jata hai ?

//OOP ka new Concept hai jo ES6 (ECMAScript 2015) me aya hai javacsript me ab is se hi jayda tar use karte hai ?

// OOPs Concept in JavaScript ---> is se interveiw me  pucte hi puchte hai ---> is ke 4 Piller hote hai  Abstraction, Encapsulation,Inheritance,Polymorphism ?

// Object
// Classes
// Encapsulation
// Abstraction
// Inheritance
 // Polymorphism

function User(name, email, age) {
  this.firstName = name;
  this.MyEmail = email;
  this.age = age;

  this.fullName = () =>{
    // console.log(this)
   return (`${this.firstName} ${this.MyEmail} ${this.age}`)
  };

}

// let user = new User("Tausif", "Tausif@gamil.com", 25);
// console.log(user.fullName())



// let user1 = Object.assign()



let student1 = {
  fisrtName: "Tausif",
  lastName: "qureshi",
  age : 25,
fullName:  ()=> { 
return `${this.fisrtName} ${this.lastName} ${this.age}`; 
  },
};

// console.log(student1.fullName()); //aise bhi print karwa sakte hai ?
let saveValue =student1.fullName();
console.log(saveValue)
  







































