// ========================================= Truthy aur falsy  ================================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me truthy aur falsy values ka concept bahut important hai, kyunki ye conditional statements aur logical operations me bahut use hota hai. Truthy aur falsy values se related basic understanding ko jaanne ke liye, pehle yeh samajhna zaroori hai ke JavaScript me values ko boolean context me kaise interpret kiya jata hai.


// =================================================== falsy ======================================================//
// ChatGPT Se liya hua Syntax ---> Falsy Values.
// JavaScript me kuch values ko "falsy" mana jata hai, matlab inka boolean context me value false hoti hai. Ye values hain.

// 1. false - Boolean false value.
// 2. 0 - Number 0.
// 3. -0 - Number negative 0.
// 4. 0n - BigInt 0.
// 5. "" - Empty string.
// 6. null - Null value.
// 7. undefined - Undefined value.
// 8. NaN - Not-a-Number.


if (false) {
    console.log("This will not be printed.");
}
if (0) {
    console.log("This will not be printed.");
}
if ("") {
    console.log("This will not be printed.");
}
if (null) {
    console.log("This will not be printed.");
}

// ================================================== Truthy ======================================================//
// ChatGPT Se liya hua Syntax ---> Truthy Values
// Inke alawa, jo bhi value hoti hai wo "truthy" hoti hai, matlab inka boolean context me value true hoti hai. Kuch examples hain:

// 1. true - Boolean true value.
// 2.  1 - Number 1.
// 3. "hello" - Non-empty string.
// 4. [] - Empty array.
// 5. {} - Empty object.
// 6. function() {} - Function.
// 7. new Date() - Date object.


if (true) {
    console.log("This will be printed.");
}
if (42) {
    console.log("This will be printed.");
}
if ("hello") {
    console.log("This will be printed.");
}
if ([]) {
    console.log("This will be printed.");
}



// ============================================== Conversion Rules ================================================//
// ChatGPT Se liya hua Syntax ---> Conversion Rules.
// JavaScript implicit type conversion ke through values ko boolean mein convert karti hai:

// Falsy values ko false mein convert karti hai.
// Truthy values ko true mein convert karti hai.


console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("text")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
