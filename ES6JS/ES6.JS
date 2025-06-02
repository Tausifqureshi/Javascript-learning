// ================================================== ES6-JS ===================================================== //
// ChatGPT Se liya hua Syntax --->   Pehle ye jaan le ki ES6 kya hai?
// ES6 (ECMAScript 2015) ek major update tha JavaScript ka. Isme JavaScript ko modern banaya gaya — naye syntax, naye features, jo ki coding ko short, easy aur powerful banate hain.

// ============================================= ES6-JS Features ================================================ //
// ChatGPT Se liya hua Syntax --->  Ab main tujhe har ek ES6 feature ek-ek karke samjhaata hoon:
// 1.  . let & const (Block Scoped Variables)
// 🔶 Pehle hum var use karte the:

//  var ko baar-baar declare kar sakte ho (bad practice).
// Scope function level hota hai.
// var name = "Rahul";
// var name = "Amit"; // Allowed


// 🔹 let (reassign allowed, redeclare not allowed):
// let age = 25;
// age = 30;      // ✅ allowed
// let age = 40;  // ❌ Error
// Scope hota hai block-level (e.g., inside {}).
// Reassign allowed, redeclare not allowed in same scope.




// 2. Arrow Functions (=>)
// 🔶 Pehle hum function keyword use karte the:
// const add = (a, b) => a + b;


// ✅ 3. Template Literals (` backticks)
let name = "Raj";
let msg = `Hello, ${name}!`;
// console.log(msg); // Output: Hello, Raj!

let multiline = `
  Hello
  World
  How are you?
`;
// console.log(multiline); // Output: Multiline string with line breaks


// 4.Default Parameters
// // function greet(name = "Guest") {
//   console.log("Hello " + name);
// }

// greet();        // Hello Guest
// greet("Amit");  // Hello Amit


// 5. Destructuring Assignment
// Array Destructuring
// const arr = [1, 2, 3];
// const [a, b] = arr;

// console.log(a); // 1
// console.log(b); // 2

// Object Destructuring
// const person = {
//   name: "Rahul",
//   age: 25,
//   city: "Delhi"
// };

// const { name, age } = person;
// console.log(name); // Rahul
// console.log(age);  // 25



// 6. Spread & Rest Operator (...)
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
// console.log(arr2); // Output: [1, 2, 3, 4]

// Rest Operator
// function sum(...nums) {
//   return nums.reduce((a, b) => a + b);
// }

// sum(1, 2, 3, 4); // 10



//  7. Object Literals Enhancements
// let name = "Ravi";
// let age = 30;

// const person = {
//   name,
//   age,
//   greet() {
//     console.log("Hi");
//   }
// };
// Key-value same ho to name: name likhne ki zarurat nahi.




// 8. Classes

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     // console.log(`Hello ${this.name}`);
//     return `Hello ${this.name}`;
//   }
// }

// const p = new Person("Ravi");
// p.greet(); // Hello Ravi //console use tu is tara se call kar sakta hai.
// console.log(p.greet()); // Hello Ravi //Return statement use aise call karte hai.

// class is syntactic sugar over prototype-based inheritance.


//  9. Promises
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data loaded");
//     }, 1000);
//   });
// };

// fetchData().then((data) => {
//   console.log(data);
// });
// Promise helps in asynchronous code ko handle karna.




// 10. Modules (import / export)
// file.js
// export const pi = 3.14;
// export function add(a, b) {
//   return a + b;
// }

// 🔹 import file:
// // main.js
// import { pi, add } from './file.js';
// console.log(pi); // 3.14



const person = {
  name: "John",
  age: 30,

  // ✅ YAHI SE arrow function `this` le raha hai
  // Kyunki `greet` ek normal function hai,
  // To iska `this` point karta hai `person` object ko is liye is arrow function ke value bhi sahi se ari hai is liye is tara se object ke andar arrow function use karte hai.
  // Aur andar ka arrow function `about` isi `this` ko use karta hai
  greet: function () {

    const about = () => {
console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    //   return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    };

    return about();
  }
};

// console.log(person.greet()); ;//return statement use tu is tara se call kar sakta hai.
person.greet(); // console use tu is tara se call kar sakta hai.




