//========================================== Variables Inroduction =========================================== //
// ChatGPT Se liya hua Syntax --->   JavaScript me variables ko samajhne ke liye, hum kuch examples aur details ke sath dekhenge. Variables programming me data ko store karne ke liye use hote hain.


// ChatGPT Se liya hua Syntax --->  Variables ko Declare Karna.
// ================================================= Var Variables ===============================================//
//  ChatGPT Se liya hua Syntax ---> 1. var: ES5 (ECMAScript 5) ke pehle se available hai. Global ya function-scope me use hota hai.
// var ke sath hoisting hoti hai, matlab variable declaration code ke top pe move ho jati hai, lekin initialization nahi hoti.

var name = 'Tausif';
console.log(name); // Output: Tausif


function exampleVar() {
   console.log(x); // undefined, because of hoisting
   var x = 10;
   console.log(x); // 10
}
exampleVar();


// ================================================= Let Variables ===============================================//
//  ChatGPT Se liya hua Syntax ---> 2. let: ES6 (ECMAScript 2015) me introduce kiya gaya. Block-scope me use hota hai.
// let bhi hoisting karta hai, lekin temporal dead zone ki wajah se uska access initialization se pehle nahi hota.

let city = 'Mumbai';
console.log(city); // Output: Mumbai

city = 'Pune'; // Reassign kar sakte hain
console.log(city); // Output: Pune

// let city = 'Delhi'; // Error: Identifier 'city' has already been declared

function exampleLet() {
   // console.log(y); // ReferenceError: Cannot access 'y' before initialization
   let y = 20;
   console.log(y); // 20
}
exampleLet();



// ================================================ Const Variables ==============================================//

//  ChatGPT Se liya hua Syntax ---> 3. const: ES6 me introduce kiya gaya. Isme value ko reassign nahi kar sakte (constant hota hai).
// const keyword se declare kiya gaya variable bhi block-scoped hota hai.
// const variable ko redeclare nahi kiya ja sakta aur na hi reassign kiya ja sakta hai.

const country = 'India';
console.log(country); // Output: India

// country = 'USA'; // Error: Assignment to constant variable

// const country = 'Canada'; // Error: Identifier 'country' has already been declared


function exampleConst() {
   const z = 30;
   console.log(z); // 30
   // z = 40; // TypeError: Assignment to constant variable.
}
exampleConst();




let num1 = 'Tausif',  //is tra se bhi varible create kar sakte hai ?
   num2 = 'Qureshi',
   num3 = 'Bbabu';
   console.log(num2)











