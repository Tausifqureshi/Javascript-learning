// ================================================= JS Operator ===============================================//

//whats is the operator ---> js me jab ham kisi value ya variable me store ki value par jis special symbol ka use kar ke oppression parform karte hai us se operator bolte hai ? Javascript operators are used to perform different types of mathematical and logical computations.

//================================ JS me itne operators hote hai =====================================?

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators


// ======================================== Arithmetic Operators ====================================//
// Arithmetic consept ---> 
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016) //ES 2016 me aya ye verions javascript ?
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement

// let a = 6;
// let b = 50;

// let x = a + b; //share Arihtmetic operatoe aise hi use kar sakte hai ?
// let x = a ** 2; //ES 2016 me aya ye verions javascript ?
// console.log(x); 

//console.log(b++);//Increment aise karne se nhi pata chale ga 1 add hoya console.log(b) tab malum hogi b ki value ?
// console.log(b);
// console.log(++b); //Increment 1 add hoga is me ?

// console.log(--b); // Decrement 1 kam hoga is se mynus




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
// Assignment Operators ---> ye o operator hai jis ki help se kisi variable me new value ko Assign kiya jata hai ?

// =	Assignment Operators
// +=	 Assignment Addition Operators ?
// -=	 Assignment  Subtraction Operators ?
// *=	 Assignment Multiplication Operators ?
// /=	 Assignment Division  Operators ?
// %=	 Assignment Modulus (Remainder)  Operators ?
// **=  Assignment Exponentiation Operators (ES2016) //ES 2016 me aya ye verions javascript ?

// let c = 10;
// let z = c += 5;  //is se hora hai c me jo purani value ti us c me ham fir 5 += assign kar re hai is ka answer 15 hoga ? sortcut bolte hai is ko ?
// console.log(z) // sub same hi operator aise use karna hai ?

// let c = 6;
// let z = c **= 2; //Assignment Exponentiation Operators (ES2016) //ES 2016 me aya ye verions javascript ?
// console.log(z);




// ===================================== Comparison Operators ==========================================//
//Comparison Operator ---> jab ham 2 value ko compaire karte hai us se comparison operator bolte hai ? ye operator true and false deta hai comparison jab karta hai 2 value ko ?
// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator


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


// ============================================= logical Operator ==============================================//	
// logical Operator ---> 

//&&  logical and  ? //ye operatort check kartra hai dono condition match tohi true aye ga warna false deta hai ?

// || logical or  ? // ye operator check karta hai ek condition bhi satisfy tohi true dono nhi match tohi false ata hai ?

// ! logical not ?  // ye operator ulta work karta hai true ko false me change karta hai ulta work ?


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



// ===================================== Ternary Operators ==========================================//
// Ternary Operators ---> ham is se condition operator bhi bolte hai ? ye operetor bhi true and false return karta hai ?

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



































































































































































