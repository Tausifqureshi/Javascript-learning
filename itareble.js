
//iterable ---> means hota hai jis pe ham loop laga sakte hai for of loop ho gaya jis jis pe ham for of loop laga sakte hai o iterable ho gaya hai samjo jaise Array hua or string sets?

//  Ek iterable ek aisa object hai jo ek sequence of values ko provide karta hai. Yaani, aap iterable object ka use karke ek baar mein ek value ko access kar sakte hain. Iterable object mein kya kya values hain, yeh jaanane ke liye aap for...of loop ka use kar sakte hain.

// Kuchh improtent iterable objects hain: 
// Arrays
// Strings
// Maps
// Sets
// Generators
// Text files

// ChatGPT Se liya hua Syntax ---> Iterable object ke bare mein kuchh aur important points:
// ChatGPT Se liya hua Syntax --->  Iterable object mein next() method hota hai, jo iterable object se next value ko return karta hai.

// ChatGPT Se liya hua Syntax --->  Iterable object mein Symbol.iterator property hoti hai, jo iterable object ke iterator object ko return karti hai.

// ChatGPT Se liya hua Syntax --->  Aap Array.from() method ka use karke iterable object ko array mein convert kar sakte hain.



// iterables  Array String Sets
// jispe hum for of loop laga sakein
// string , array are iterable 

//String Itared 
// const firstName = "Tausif";
// for(let char of firstName){
//     console.log(char);
// }

//Array  Itared 
const items = ['item1', 'item2', 'item3'];
// for(let item of items){
//     console.log(item);
// }


// ================================array like object ==============================//
// jinke pas length property hoti hai 
// aur jiko hum index se access kar sakte hai
// example :- string,Array 

// const firstName = "tausif";
// console.log(firstName.length);
// console.log(firstName[2]);





//iterator ---> means iterator ye ek protocol hai menas set of rules  