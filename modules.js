// Modules js

// ChatGPT Se liya hua Syntax --->

import config from "./modules1.js"; // Default import aisa karte hai.

import { name, myFun, Person } from "./modules1.js"; //

// import * as allCodeExport from './modules1.js';  //aisa export jab karte hai jab project bada ho bar bar {name, myFun,Person} code langthli hota hai. is liye aisa import karte hai bus jis file me se import kar re hai jo bhi function varible us ke aage export hona chaiye bus.

console.log(name); //import varible.
// console.log(allCodeExport.name); //import varible.

console.log(myFun()); //import function.
// console.log(allCodeExport.myFun());  //import function.

const user = new Person("Bob"); //import Class.
// const user = new allCodeExport.Person("Bob"); //import Class.
console.log(user.firsName); // Output: Bob

console.log(config.apiKey); // Output: 12345    //Defual Import object.
console.log(config.apiUrl); // Output: https://api.example.com
// console.log(allCodeExport.default.apiKey); // Output: 12345
// console.log(allCodeExport.default.apiUrl); // Output: https://api.example.com
