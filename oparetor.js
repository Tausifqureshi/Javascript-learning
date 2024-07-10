// ================================================= JS Operator ===============================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me operators ka use expressions banane ke liye kiya jata hai. Ye expressions kisi value ko manipulate ya evaluate karte hain. JavaScript me operators ke alag-alag types hote hain:


// ChatGPT Se liya hua Syntax ---> Types of Operators.

// 1. Arithmetic Operators (Aankdon par calculations ke liye).
// 2. Assignment Operators (Values ko variables me assign karne ke liye).
// 3. Comparison Operators (Do values ko compare karne ke liye).
// 4. Logical Operators (Logical operations perform karne ke liye).
// 5. Bitwise Operators (Bitwise operations perform karne ke liye).
// 6. String Operators (Strings ko concatenate karne ke liye).
// 7. Conditional (Ternary) Operator (Ek shorthand conditional statement ke liye).
// 8. Type Operators (Types ko check karne ke liye).


// ======================================== Arithmetic Operators ====================================//
//Arithmetic consept. 
// ChatGPT Se liya hua Syntax ---> Arithmetic operators basic mathematical operations ke liye use hote hain.

// Addition (+): Do numbers ko jodhta hai.
// Subtraction (-): Ek number ko dusre se ghata deta hai.
// Multiplication (*): Do numbers ko guna karta hai.
// Division (/): Ek number ko dusre se divide karta hai.
// Modulus (%): Division ke baad remainder return karta hai.
// Exponentiation ()**: Ek number ko dusre number ke power tak raise karta hai.
// Increment (++): Ek number ko 1 se badhata hai.
// Decrement (--): Ek number ko 1 se ghata deta hai.


// let a = 6;
// let b = 50;

// let x = a + b; //share Arihtmetic operatoe aise hi use kar sakte hai ?
// let x = a ** 2; //ES 2016 me aya ye verions javascript ?
// console.log(x); 

//console.log(b++);//Increment aise karne se nhi pata chale ga 1 add hoya console.log(b) tab malum hogi b ki value ?
// console.log(b);
// console.log(++b); //Increment 1 add hoga is me ?

// console.log(--b); // Decrement 1 kam hoga is se mynus



// ChatGPT Se liya hua Syntax --->
let x = 3;
const y = x++; //Postfix increment

console.log(`x:${x}, y:${y}`); // is me baad me incremnet hota hai is liye is me y ki value 3 ari or a ki 4 value ari hai.
// Expected output: "x:4, y:3"
let n = 12;
console.log(n++);   //post increment use 
console.log(n); // is me value baad me increment hota hai first value print hoti hai.
console.log(n++);
console.log(n)


let a = 3;
const b = ++a; //Prefix increment

console.log(`a:${a}, b:${b}`); // is me first increment hota hai is liye dono ki value same hai.
// Expected output: "a:4, b:4"

let f = 12;
console.log(++f);   //pree increment use
console.log(f) // is me increment hota hai. baad me value ati print hoti hai.




// ======================================== Assignment Operators ====================================//
// Assignment Operators.
// ChatGPT Se liya hua Syntax ---> Assignment operators variables ko values assign karne ke liye use hote hain.

// Assignment (=): Value assign karta hai.
// Addition assignment (+=): Value ko add kar ke assign karta hai.
// Subtraction assignment (-=): Value ko subtract kar ke assign karta hai.
// Multiplication assignment (*=): Value ko multiply kar ke assign karta hai.
// Division assignment (/=): Value ko divide kar ke assign karta hai.
// Modulus assignment (%=): Remainder ko assign karta hai.
// Exponentiation assignment (=)**: Power ko assign karta hai.


// let c = 10;
// let z = c += 5;  //is se hora hai c me jo purani value ti us c me ham fir 5 += assign kar re hai is ka answer 15 hoga ? sortcut bolte hai is ko ?
// console.log(z) // sub same hi operator aise use karna hai ?

// let c = 6;
// let z = c **= 2; //Assignment Exponentiation Operators (ES2016) //ES 2016 me aya ye verions javascript ?
// console.log(z);


// ChatGPT Se liya hua Syntax --->
let c = 20;

c += 5;  // c = c + 5
console.log(c); // 25

c -= 10; // c = c - 10
console.log(c); // 15

c *= 2;  // c = c * 2
console.log(c); // 30

c /= 3;  // c = c / 3
console.log(c); // 10

c %= 4;  // c = c % 4
console.log(c); // 2




// ===================================== Comparison Operators ==========================================//
// Comparison Operator.
// ChatGPT Se liya hua Syntax ---> Comparison operators do values ko compare karte hain aur result true ya false me dete hain.

// Equal to (==): Dono values equal hain ya nahi.
// Equal value and type (===): Dono values aur type equal hain ya nahi.
// Not equal (!=): Dono values equal nahi hain.
// Not equal value or type (!==): Dono values ya type equal nahi hain.
// Greater than (>): Ek value dusri value se badi hai ya nahi.
// Less than (<): Ek value dusri value se chhoti hai ya nahi.
// Greater than or equal to (>=): Ek value dusri value se badi ya equal hai ya nahi.
// Less than or equal to (<=): Ek value dusri value se chhoti ya equal hai ya nahi.

// let x = 5;
// let z = 5;
// console.log(x!=z) //ye operator work karta hai same tu false dega alag alag value tu true dega ?

// let x = "5";
// let z = 5;
// console.log(x!==z) //ye operator work karta hai same tu false dega alag alag tu true deta hai but ye operator data types bhi dhakta hai string me hai ya number me is liye ye true aye ga is ka answer

// greater than  Exmple
// let x = 8;
// let z = 7;
// console.log(x > z) //8 bada hai 7 se is liye true aye ga ?

// let x = 8;
// let z = 7;
// console.log(z > x) // is me ham check kar re hai greater than is me left value ko hamsa badi hona chachiye is condison me ham check kar re hai kya z ki value x se badi hai greater than use kar re hai is liye false aye ga q ke 7 bada nhi hai 8 se left ki value badi hi hona chaciye hemsa is me


// less than Exemple
// let x = 6;
// let z = 7;
// console.log(x < z) //6 choota  hai 7 se is liye true aye ga ?

// let x = 6;
// let z = 7;
// console.log(z < x); // is me check kar re hai less than is ka jab bhi use hota hai left value ko hemsa chotti hona chaciye is condision me ham checkm kar re hai kay 7 chotta hai 6 se q ke 7 chotta nhi hota hai 6 is liye ye false aye gi value q ke less than left ki  value hamsa chotti rehna chaciye ? 


// ChatGPT Se liya hua Syntax --->
let d = 10;
let e = 20;

console.log(d == e);  // false
console.log(d === e); // false
console.log(d != e);  // true
console.log(d !== e); // true
console.log(d > e);   // false
console.log(d < e);   // true
console.log(d >= e);  // false
console.log(d <= e);  // true


// ============================================= logical Operator ==============================================//	
// logical Operator ---> 
// ChatGPT Se liya hua Syntax ---> Logical operators logical operations perform karte hain.
// AND (&&): Dono operands true hain to true hi ye.
// OR (||): Kisi ek operand true hai to true data hai ye.
// NOT (!): Operand true hai to false, aur false hai to true data hai ulta work hai iska.


// let condition1 = 10;
// let condition2 = 5;

// if (condition1 > 5 && condition2 < 10) { //dono condition match tohi true aye ga ye operator aise hi work karta hai ?
//   console.log("Both conditions are true.");
// } else {
//   console.log("At least one of the conditions is false.");
// }



// let condition1 = 10;
// let condition2 = 5;

// // ye operator ulta work karta hai ? ye dono condition true hai but ! ye operator lagne se ulta work hota hai false return karta hai
// if (!(condition1 > 5) && condition2 < 10) { 
//   console.log("true");
// } else {
//   console.log("false");
// }


// ============================================ Bitwise Operators =============================================//
// Bitwise Operators.
// ChatGPT Se liya hua Syntax ---> Bitwise operators values par bit-by-bit operations perform karte hain.

// AND (&)
// OR (|)
// NOT (~)
// XOR (^)
// Left shift (<<)
// Right shift (>>)
// Zero fill right shift (>>>)



// ChatGPT Se liya hua Syntax --->
let h = 5;  // 0101 in binary
let i = 1;  // 0001 in binary

console.log(h & i); // 0001 -> 1
console.log(h | i); // 0101 -> 5
console.log(h ^ i); // 0100 -> 4
console.log(~h);    // 1010 -> -6
console.log(h << 1); // 1010 -> 10
console.log(h >> 1); // 0010 -> 2
console.log(h >>> 1); // 0010 -> 2




// ===================================== String Operators ==========================================//
// String Operators.
// ChatGPT Se liya hua Syntax ---> String operators strings ke sath operations perform karte hain.
// Concatenation (+): Do strings ko jodne ke liye.

// ChatGPT Se liya hua Syntax ---> 
let firstName = "Tausif";
let lastName = "Qureshi";

console.log(firstName + " " + lastName); // Tausif Qureshi



// ===================================== Ternary Operators ==========================================//
// Ternary Operators --->
// ChatGPT Se liya hua Syntax --->  ham is se condition operator bhi bolte hai ? ye operetor bhi true and false return karta hai ?

let age = 5;  //5 bada nhi hai 6 se is liye milk aye ga ? 5 kar re ke >= 5 is ke sath tu coffe aye ga ?
let store = age >= 6 ? "coffe" : "milk";
console.log(store);



// and or operator and && or||
let Name = "Tausif";
let ages = 24;
if(Name[0]==='T' && ages >= 23){   
    console.log("name and age valid");

}else{
    console.log("name and age not valid")
}



































































































































































