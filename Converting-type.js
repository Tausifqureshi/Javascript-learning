// ChatGPT Se liya hua Syntax ---> Tausif! JavaScript me data type conversion (type coercion) ek important concept hai. Type conversion do tarike se ho sakta hai.


// 1. Implicit Conversion (Type Coercion): JavaScript automatically data types ko convert kar leta hai.
// 2. Explicit Conversion: Developer manually data types ko convert karta hai.


// ========================================= Implicit Conversion ==================================================//
// ChatGPT Se liya hua Syntax ---> Implicit Conversion (Type Coercion).
// JavaScript automatic type conversion perform karta hai jab different data types ke values ek saath use hoti hain. Yeh kabhi kabhi unexpected results bhi de sakti hai.

// ChatGPT Se liya hua Syntax ---> Example 1: String and Number.
let result2 = '5' - 2;
console.log(result2); // Output: 3
console.log(typeof result2); // Output: number


//string se number me change aisa karte hai?
// let age  = '3';
// console.log(typeof age);
// age = Number(age);
// console.log(typeof age);

// let age  = +'3'; //is tara se bhi change kar sakte hai string ko number me change + lagne se string me change hoga?
// console.log(typeof age);





// =========================================  Boolean and Number ==================================================//
// ChatGPT Se liya hua Syntax --->  Example 2: Boolean and Number.
// let result;
// result = true + 1; // 2 (Number)
// console.log(result);

// result = false + 10; // 10 (Number)
// console.log(result);



// ========================================= Explicit Conversion ================================================//
// ChatGPT Se liya hua Syntax ---> Explicit conversion tab hoti hai jab aap specifically functions ya methods use karke data type ko convert karte hain.

// ChatGPT Se liya hua Syntax ---> Number to String.
// let num = 10;
// let str = String(num);
// console.log(str); // Output: '10'
// console.log(typeof str); // Output: string



// number se string me change but koi character nhi hona numbre hi hona chachye?
let age  = 3;  //number hai ye ?
console.log(typeof age)
age = toString(age);
console.log(typeof age);
// console.log(typeof (age + "" )) //aisa bhi number me change kar sakte hai ?


// ========================================= String to Number================================================//
// String ko Number me Change Karna.
// ChatGPT Se liya hua Syntax --->

// let str = '123';
// console.log(typeof str)
// let num = Number(str);
// console.log(num); // Output: 123
// console.log(typeof num); // Output: number


// ========================================= Boolean to Number ================================================//
// Boolean se Number me chang karna.
// ChatGPT Se liya hua Syntax --->

// let bool = true;
// console.log(typeof bool);
// let num = Number(bool);
// console.log(num); // Output: 1
// console.log(typeof num); // Output: number



// ========================================= Number to Boolean ================================================//
// Number se Booleans me change karna
// ChatGPT Se liya hua Syntax --->

let num = 0;
console.log(typeof num)
let bool = Boolean(num);
console.log(bool); // Output: false
console.log(typeof bool); // Output: boolean



// ================================== Methods for Type Conversion.============================================//
// ChatGPT Se liya hua Syntax ---> Common Methods for Type Conversion.

// ChatGPT Se liya hua Syntax ---> 1. String(): Converts a value to a string.

// let value = 123;
// console.log(typeof value)
// let strValue = String(value);
// console.log(typeof strValue); // '123'



// ChatGPT Se liya hua Syntax ---> 2. Number(): Converts a value to a number.
// let value = '123';
// console.log(typeof value)
// let numValue = Number(value);
// console.log(typeof numValue); // 123



// ChatGPT Se liya hua Syntax ---> 3. Boolean(): Converts a value to a boolean.
// let value = 1;
// console.log(typeof value)
// let boolValue = Boolean(value);
// console.log(typeof boolValue); // true.



// ChatGPT Se liya hua Syntax ---> 4. toString(): Converts a value to a string.
// let value = 123;
// console.log(typeof value)
// let strValue = value.toString();
// console.log(typeof strValue); // '123'.



// ChatGPT Se liya hua Syntax ---> 5. parseInt(): Parses a string and returns an integer.
// let value = '123.45';
// console.log(typeof value)
// let intValue = parseInt(value);
// console.log(typeof intValue); // 123.




// ChatGPT Se liya hua Syntax ---> 6. parseFloat(): Parses a string and returns a floating-point number.
let value = '123.45';
console.log(typeof value)
let floatValue = parseFloat(value);
console.log(typeof floatValue); // 123.45











