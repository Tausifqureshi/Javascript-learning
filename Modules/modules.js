// Modules js

// ChatGPT Se liya hua Syntax ---> JavaScript mein modules ka istemal kar ke aap apne code ko organize kar sakte hain, reusable components bana sakte hain, aur code ko maintain karne mein madad mil sakti hai. Modules basically code ko alag-alag files mein organize karne ka ek tareeqa hai, jisse aapko code ko easily manage karne mein madad milti hai.

// ChatGPT Se liya hua Syntax ---> JavaScript mein modules ke prakar
// Script Modules: Script modules ko <script> tag ke sath import kiya jaata hai. Ye sabse basic type ka module hai.

// CommonJS Modules: CommonJS modules ko require() function ke sath import kiya jaata hai. Ye Node.js mein sabse aam type ka module hai.

// ES Modules (ESM): ES Modules ko import keyword ke sath import kiya jaata hai. Ye browser mein sabse aam type ka module hai.   
  
 
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
