// ChatGPT Se liya hua Syntax ---> hoisting
// JavaScript me "hosting" ek concept hai jisse JavaScript engine code ko execute karne se pehle interpret karta hai. Hosting ka matlab hai ki JavaScript me declare ki gayi sabhi variables aur functions ko unki actual declaration se pehle hi memory me allocate kar diya jata hai.

// ============================================ Variable Declaration =========================================//
//  ChatGPT Se liya hua Syntax ---> Variable Declaration.
//JavaScript me, variables ko declare kiya gaya code ke starting me "hoist" kar diya jata hai. Matlab, aap ek variable ko uske declare hone se pehle bhi access kar sakte hain. Par, var keyword ke sath hoisting thoda different hota hai kyunki usse variable ko undefined value milta hai jab tak wo actual assignment nahi milta. Let aur const ke sath hoisting hoti hai, par wo temporal dead zone (TDZ) me hota hai, jahan tak wo actual declare nahi hote.
 
console.log(a); // undefined
var a = 10;
console.log(a); // 10


// ChatGPT Se liya hua Syntax --->  Example (let and const);
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b); // 10

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 10;
console.log(c); // 10



// ============================================ Functions Hosting =========================================//
//  ChatGPT Se liya hua Syntax ---> JavaScript me functions bhi hosting ka concept follow karte hain. Function declaration aur function expressions me antar hota hai.

// Function Declaration.
// Function declaration ka matlab hai function ko declare kar diya jata hai, aur isse pehle bhi use kar sakte hain.

// Example.
hoistedFunc();  // Output: "Hello, World!"
function hoistedFunc() {
    console.log("Hello, World!");
}


// ========================================= Functions Expression Hosting =======================================//
//  ChatGPT Se liya hua Syntax --->  Function Expression.
// Function expression me variable ke through function ko define kiya jata hai, aur iska scope us block me hota hai.

console.log(bar()); // TypeError: bar is not a function
var bar = function() {
    return "Hello, World!";
};

// 
console.log(bar); // Function Expression.is tara se call tu undefiend aye ga var use tu or koi ketword use let const tu before  before initialization aye ga.
var bar = function() {
    return "Hello, World!";
};




// ========================================= Temporal Dead Zone=======================================//
//  ChatGPT Se liya hua Syntax ---> JavaScript me "temporal dead zone" (TDZ) ek concept hai jo hoisting ke sath juda hua hai aur let aur const keywords ke use ke sath aata hai. TDZ ka concept ye hai ki, ek variable declared (declare kiya gaya) hai let ya const ke sath, lekin uss variable ko access karne se pahle, uska initialization (shuruat me value dena) hona zaroori hai.

// ChatGPT Se liya hua Syntax ---> TDZ ka matlab hai wo area jaha variables exist toh karte hain, lekin unhe access karna legal nahi hota, kyunki unka initialization ab tak nahi hua hota. TDZ tab tak rahta hai jab tak variable ka declaration line aur initialization line ke beech ka samay hota hai.

//  ChatGPT Se liya hua Syntax ---> Yeh kuch key points hain TDZ ke bare me.
// 1. Hoisting and TDZ: JavaScript me, var ke case me, variable ka declaration aur initialization ke do parts ho jaate hain, lekin let aur const me, declaration hoisting hota hai lekin initialization nahi hoti. Iska matlab hai ki variable ke declaration uss scope ke shuruat me ho jata hai, lekin uska value assign hone tak use karne ki koshish karte waqt TDZ me fas jata hai.


// 2. TDZ Ka Matlab: Agar aap let ya const ke sath ek variable declare karte hain, to woh variable uss scope me "temporal dead zone" me hota hai jab tak uska initialization nahi ho jata. Iska matlab hai ki aap uss variable ko access nahi kar sakte hain, aur agar koshish karenge to ReferenceError mil sakta hai.

console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
let myVar = 10;



// ChatGPT Se liya hua Syntax ---> 3.Avoiding Issues: TDZ issues se bachne ke liye, let ya const variables ko unki declaration ke baad hi use karna chahiye aur var use karne ki jagah let ya const ka use prefer kiya jana chahiye.



























//  javascript me class bhi Hosting Support nhi leta hai ?
// let emoloyes2 = new Employes ('2','Qureshi');  //
// emoloyes2.details(); //emoloyes2 ko first value dena? bad me  Employes class initialization karna is se bolte hai hosting ? class bhi Hosting Support nhi leta hai

class Employes {
  //Cretae Class //This Chaptert learnVarn
  constructor(id, name) {
    //Create Object constructor use kar ke?
    (this.id = id), (this.name = name);
  }
  details() {
    //Sort Method Means object ke ander function creating ?
    // document.writeln(`${this.id} ${this.name}`)
    // console.log(`${this.id} ${this.name}`)
    return `${this.id} ${this.name}`;
  }
}

let emoloyes1 = new Employes("1", "Tausif"); // new keyword se constructor object ke argumnet hai means value ?
let emoloyes2 = new Employes("2", "qureshi"); // new keyword se constructor object ke argumnet hai means value ?
let store = emoloyes2.details();
console.log(store);
