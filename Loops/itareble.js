
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


// ============================================= array like object ================================================//
// ChatGPT Se liya hua Syntax ---> Array-like objects JavaScript me aise objects hote hain jo arrays jaise dikhte hain aur unka behavior bhi kuch had tak arrays jaise hota hai, lekin ve real arrays nahi hote. In objects ki kuch khas visheshtayen hoti hain jo unhe array-like banati hain, jaise.


// 1. Length Property: Array-like objects me ek length property hoti hai, jo unke elements ki sankhya ko darshati hai.

// 2. Indexed Elements: Unke elements numeric indices dwara access kiye jaate hain, jaise arrays me hota hai.

// 3. Absence of Array Methods: Ve native array methods jaise push, pop, map, filter adi ka upyog nahi kar sakte.



// ChatGPT Se liya hua Syntax ---> Examples of Array-like Objects
// 1.  Arguments Object.
// Jab bhi aap koi function call karte hain, JavaScript ek special object banata hai jise arguments kehte hain. Ye function me pass kiye gaye sabhi arguments ko store karta hai aur array-like behavior exhibit karta hai.

function example() {
    console.log(arguments);
    console.log(arguments.length); // Length property
    console.log(arguments[0]);     // Indexed access
}

example(1, 2, 3);
// Output:
// [Arguments] { '0': 1, '1': 2, '2': 3 }
// 3
// 1




// 2. Strings
// Strings bhi array-like hoti hain kyonki aap individual characters ko index se access kar sakte hain aur unki length property hoti hai.

const str = "hello";
console.log(str.length); // Length property
console.log(str[1]);     // Indexed access
// Output:
// 5
// e



