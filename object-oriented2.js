// OOPS ke ye share concept ChatGPT Se liya hua jo khud se perctic o A.js file me hai.

//OOPs in javscript ---> Means ye ek programming paradigm hai means ek style program karne ki ? apni code karne ki style hai?  Object oriented programming jis me class object ko use kar ke program ko design kiya jata hai ?

// ChatGPT Se liya hua Syntax ---> Object-oriented programming (OOP) ek programming paradigm hai jo objects ke around design kiya gaya hai. Objects data aur methods ka combination hote hain. JavaScript me, OOP ko implement karne ke liye objects aur classes ka istemal kiya jata hai.

// ChatGPT Se liya hua Syntax ---> OOP ka new Concept hai jo ES6 (ECMAScript 2015) me aya hai javacsript me ab is se hi jayda tar use karte hai class ko ?

//Constructo ===== ChatGPT Se liya hua Syntax ---> Constructor ek special method hota hai jo object ko initialize karta hai. Isme initial properties set ki jati hain.

// OOPs Concept in JavaScript ---> is se interveiw me  pucte hi puchte hai ---> is ke 4 Piller hote hai  Abstraction, Encapsulation,Inheritance,Polymorphism ?

//================================================ Class ==================================================//
// Classes ===== ChatGPT Se liya hua Syntax ---> Class ek blueprint hoti hai jisse hum objects banate hain. Class me data (properties) aur behavior (methods) define kiye jate hain.
// Class definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi! My name is ${this.name} and I am ${this.age} years old.`);
  }
}




//================================================ Object ==================================================//
// Object ===== ChatGPT Se liya hua Syntax ---> Object ek instance hota hai class ka. Har object ka apna state (properties) aur behavior (methods) hota hai.

const person1 = new Person('John Doe', 30);
const person2 = new Person('Jane Doe', 25);

person1.introduce(); // Hi! My name is John Doe and I am 30 years old.
person2.introduce(); // Hi! My name is Jane Doe and I am 25 years old.


//============================================ Inheritance =====================================================//
// Inheritance ===== ChatGPT Se liya hua Syntax --->  Inheritance se ek class dusre class ki properties aur methods ko inherit kar sakta hai.
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying for the exam.`);
  }
}

const student1 = new Student('Alice', 18, 12);
student1.introduce(); // Hi! My name is Alice and I am 18 years old.
student1.study(); // Alice is studying for the exam.



//============================================ Encapsulation =====================================================//

// Encapsulation ====== ChatGPT Se liya hua Syntax ---> Encapsulation ka matlab hota hai data ko hide karna aur methods ke through access dena.
class Person {
  #name; // Private property

  constructor(name) {
    this.#name = name;
  }

  getName() { // Public method to get the name
    return this.#name;
  }

  setName(name) { // Public method to set the name
    this.#name = name;
  }
}

const person = new Person('John Doe');
console.log(person.getName()); // John Doe
person.setName('Jane Doe');
console.log(person.getName()); // Jane Doe


//============================================ Polymorphism =====================================================//
// Polymorphism ====== ChatGPT Se liya hua Syntax ---> Polymorphism ke through ek method ko different ways se use kiya ja sakta hai.
class Animal {
  makeSound() {
    console.log('Generic animal sound');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Woof!');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow!');
  }
}

const dog = new Dog();
const cat = new Cat();

dog.makeSound(); // Woof!
cat.makeSound(); // Meow!


//============================================ Abstraction =====================================================//
// Abstraction ====== ChatGPT Se liya hua Syntax --->  Abstraction ka matlab hota hai complex systems ko simplify karna taki hum sirf important details pe focus kar saken aur unimportant details ko hide kar saken. Abstraction se hum code ko clean, maintainable aur reusable bana sakte hain.
class Car {
  // Constructor function
  constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
  }

  // Method to start the car
  start() {
      console.log(`${this.brand} ${this.model} is starting...`);
  }

  // Method to stop the car
  stop() {
      console.log(`${this.brand} ${this.model} is stopping...`);
  }

  // Method to get car details (public interface)
  getDetails() {
      return `${this.brand} ${this.model} (${this.year})`;
  }
}

// Creating an instance of Car
const myCar = new Car('Toyota', 'Corolla', 2020);

// Using the public methods
myCar.start();
console.log(myCar.getDetails());
myCar.stop();


//============================================= extends keyword ==================================================//
//extends ===== ChatGPT Se liya hua Syntax ---> Javascript me class inheritance ke liye use kiya jaata hai. Iska matlab hai ek class (child class) dusri class (parent class) se properties aur methods inherit kar sakta hai. Yeh code reusability aur code organization ko badhata hai.

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent class constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking.`);
  }
}

const dog1 = new Dog("Max", "Labrador");
dog1.eat(); // Output: Max is eating.
dog1.bark(); // Output: Max is barking.


//============================================= super keyword ==================================================//
//super ===== ChatGPT Se liya hua Syntax ---> ek khaas keyword hai jo inheritance ke prakriya me madad karta hai. Inheritance me, ek class (subclass) dusri class (superclass) ke properties aur methods ko inherit karti hai. Super keyword ka upyog subclass ke andar superclass ke properties aur methods ko access karne ke liye kiya jaata hai.


// [1]Parent class ke constructor ko call karna:
class Parent {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Parent class ke constructor ko call karta hai
    this.age = age;
  }

  greet() {
    super.greet(); // Parent class ke greet() method ko call karta hai
    console.log(`I am ${this.age} years old.`);
  }
}

const child = new Child("John Doe", 30);
child.greet(); // Output: Hello, my name is John Doe. I am 30 years old.



// [2] Parent class ke properties aur methods ko access karna:
class Parent {
  constructor(name) {
    this.name = name;
  }

  getFullName() {
    return this.name + " " + this.lastName;
  }
}

class Child extends Parent {
  constructor(name, lastName) {
    super(name);
    this.lastName = lastName;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`); //Parent class ki property access.
    console.log(`My full name is ${super.getFullName()}.`); // Parent class ke getFullName() method ko call karta hai
  }
}

const child1 = new Child("John", "Doe");
child1.greet(); // Output: Hello, my name is John. My full name is John Doe.




// [3] Method ko access karna super keyword se.
class Parent1 {
  constructor(name) {
    this.name = name;
  }

  // getDetails()
  greet() {
    return `Hello, ${this.name}!`;
  }
}

class Child1 extends Parent1 {
  constructor(name, age) {
    super(name); // Calls the constructor of the Parent class
    this.age = age;
  }

  greet() {
    // Calls the greet method from the Parent class
    let parentGreeting = super.greet(); //Parnet Class me same name ka function or child name me samge name ka function greet tu hi ham uper keyword se access kar sakte hai. warna Parent class me koi or name ka function tu ham getDetails() aisa koifunction tu ham chaild class me this.getDetails() kar ke access kar sakte hai koi error nhi aye ga. Parnet class ka greet function return kar ra hai is liye ham is se const me store kar re hai.

    return `${parentGreeting} You are ${this.age} years old.`;
  }
}

let chil = new Child1('Alice', 12);
console.log(chil.greet()); // Output: "Hello, Alice! You are 12 years old."




//[4] Super keywod use property access karna Parent class se.
class Parent3 {
  constructor(name) {
    this.name = name;
  }
}

class Child3 extends Parent3 {
  constructor(name, age) {
    super(name); // Calls the constructor of the Parent class
    this.age = age;
  }

  getParentName() {
    return super.name; // Accesses the 'name' property from the Parent class. this.name se bhi acess ho jaye gi.
  }
}

let child3 = new Child3('Alice', 12);
console.log(child3.getParentName()); // Output: 'Alice'
console.log(child3.age); // Output: 12
