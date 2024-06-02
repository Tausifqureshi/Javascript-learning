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

}

function Person(fName,email,age) {
  this.firstName = fName,
  this.MyEmail = email,
  this.age = age;


}

User.prototype.fullName = function(){
  // console.log(this)
  return (`${this.firstName} ${this.MyEmail} ${this.age}`);
};



Object.setPrototypeOf(Person.prototype, User.prototype)


let user = new User("Tausif", "Tausif@gmail.com", 25);
console.log(user)
console.log(user.fullName())


let person = new Person("usa", "usa@gmail.com", 25);
console.log(person)
console.log(person.fullName())

// console.log(user instanceof User);
// console.log(user instanceof Person);

// cheking karta hai kya Person constructor User wale se inheritance hai ya nhi us ki property nad method use kar sakta hai q ke o inheritance ho chuka hai?
console.log(user instanceof User); // true
console.log(person instanceof Person); // true
console.log(person instanceof User); // true































