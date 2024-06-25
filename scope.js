// ChatGPT Se liya hua Syntax ---> JavaScript me "scope" ka matlab hota hai variable aur functions ke liye us context ka area ya boundary jahan par wo accessible hote hain. Scope define karta hai ki aap kis variable ya function ko kahan se access kar sakte hain ya unhe modify kar sakte hain. JavaScript me mainly do tarah ke scopes hote hain:

// ============================================= Global Scope ==================================================//
//ChatGPT Se liya hua Syntax --->  1. Global Scope: Ye sabse bada scope hota hai aur poore script ya program ke liye accessible hota hai. Global scope me define kiye gaye variables ya functions ko aap kahin bhi script ke andar use kar sakte hain.

// ChatGPT Se liya hua Syntax ---> Global Variables
// Global variables ko kisi bhi function ke bahar declare kiya jata hai. Yeh poore code base mein kahin bhi available hoti hain.

var globalVar = "I am a global variable"; //let const bhi use tobhi is se kahai bhi access kar sakte hai globaliy.
function displayGlobalVar() {
    console.log(globalVar); // I am a global variable
}

displayGlobalVar();
console.log(globalVar); // I am a global variable


// ============================================= Local Scope ==================================================//
// ChatGPT Se liya hua Syntax ---> 2. Local Scope: Ye scope typically functions ke andar hota hai. Jab aap kisi function ke andar ek variable declare karte hain, to wo variable us function ke local scope me hota hai. Iska matlab ye hai ki wo variable sirf us function ke andar hi accessible hoga aur baahar se use nahi kiya jaa sakta.

// ChatGPT Se liya hua Syntax ---> Local Variables
// Local variables ko kisi function ya block ke andar declare kiya jata hai. Yeh keval usi function ya block ke andar hi access ki ja sakti hain.

function myFunction() {
  let local= "I am a local variable";
  console.log(local); // I am a local variable
}
myFunction();
console.log(local); // ReferenceError: local is not defined



// ============================================= Block Scope ==================================================//
//ChatGPT Se liya hua Syntax --->  Block Scope: ES6 (ECMAScript 2015) me let aur const introduce hue jinki scope block level hota hai. Block level scope ka matlab hai ki variable ka scope us block ke andar hota hai jisme wo define kiya gaya hai, jaise ki loops ya if statements.

// ChatGPT Se liya hua Syntax ---> Block scoped variables ka concept let aur const ke sath introduce kiya gaya hai. Yeh variables sirf unhi block ke andar accessible hote hain jahan unhein declare kiya gaya hai. JavaScript mein block ko {} curly braces se define kiya jata hai.

if (true) {
  let blockLet = "I am a block scoped variable";
  const blockConst = "I am a block scoped constant";
  var blockVar = "I am a block scoped var" ;

  console.log(blockLet); // I am a block scoped variable
  console.log(blockConst); // I am a block scoped constant
  console.log(blockVar); // "I am a block scoped var
}
console.log(blockVar); // "I am a block scoped var. // Var ko Block ke bher bhi acees kar sakte hai q ke o block scope nhi hota. function scope hote hai.
console.log(blockLet); // ReferenceError: blockVar is not defined
console.log(blockConst); // ReferenceError: blockConst is not defined



// ChatGPT Se liya hua Syntax ---> Block Scope in Loops.
// Loops mein bhi block scoped variables ka upyog kiya ja sakta hai.
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // ReferenceError: i is not defined



// ============================================= Function Scope ==================================================//
// ChatGPT Se liya hua Syntax ---> Function Scope: var keyword se declare kiye gaye variables ka scope function level ka hota hai. Iska matlab hai ki jo bhi variable var keyword se declare kiya gaya hai, wo function ke andar kahi bhi access kiya ja sakta hai, lekin function ke bahar nahi.
function example() {
  if (true) {
      var x = 10;
      console.log(x); // Output: 10
  }
  console.log(x); // Output: 10
}
example();


function example() {
  var x = 10;
  console.log(x); // Output: 10
}
example();
console.log(x);  //Error Create.




























































