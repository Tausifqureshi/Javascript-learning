// ChatGPT Se liya hua Syntax ---> JavaScript mein Number ek primitive data type hai jo numeric values ko represent karta hai. 

//Number Creating karne ke tarike ?
var x = 2;                               //creating integer value
var y = 2.785;                          //creating flooting point value 
var z = 45e2;                          //creating exponent value output
var a = new Number(16);                //integer value by number object




// ========================================= Number Properties ================================================//
// ChatGPT Se liya hua Syntax ---> Number object ke kuch important properties hain:

// Number.MAX_VALUE: Sabse bada representable number.
// Number.MIN_VALUE: Sabse chhota representable number (0 se zyada).
// Number.NEGATIVE_INFINITY: Negative infinity ka representation.
// Number.POSITIVE_INFINITY: Positive infinity ka representation.
// Number.NaN: "Not-a-Number", jo tab milta hai jab calculation invalid ho.

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NaN); // NaN


// ========================================= Number Method ================================================//
// ChatGPT Se liya hua Syntax ---> Number Methods.

// ========================================= isInteger Method ================================================//
// ChatGPT Se liya hua Syntax ---> 1. Number.isInteger(value): Check karta hai ki value integer hai ya nahi.
console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.5)); // false


// ========================================= isNaN Method ================================================//
// ChatGPT Se liya hua Syntax ---> 2. Number.isNaN(value): Check karta hai ki value NaN hai ya nahi.
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(5)); // false



// ========================================= parseFloat Method ================================================//
// ChatGPT Se liya hua Syntax ---> Number.parseFloat(string): String ko floating-point number me convert karta hai.
console.log(Number.parseFloat("10.5")); // 10.5



// ========================================= parseInt Method ================================================//
// ChatGPT Se liya hua Syntax ---> Number.parseInt(string): String ko integer me convert karta hai.
console.log(Number.parseInt("10.5")); // 10




// ========================================= Number Formatting ================================================//
// ChatGPT Se liya hua Syntax ---> Numbers ko format karne ke liye toFixed(), toPrecision(), aur toExponential() methods ka use hota hai.

// toFixed(digits): Number ko fixed number of decimal places tak round karta hai.
let num = 2.34567;
console.log(num.toFixed(2)); // "2.35"



// ChatGPT Se liya hua Syntax --->  toPrecision(precision): Total digits ki specific count tak number ko round karta hai.
console.log(num.toPrecision(3)); // "2.35"


// ChatGPT Se liya hua Syntax ---> toExponential(): Number ko exponential notation me represent karta hai.
console.log(num.toExponential(2)); // "2.35e+0"
