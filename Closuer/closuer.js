// ChatGPT Se liya hua Syntax ---> JavaScript mein closure function kya hai?

// ChatGPT Se liya hua Syntax ---> JavaScript mein closures ek advanced concept hai jo functions aur unke lexical environment ko relate karta hai. Closure tab banta hai jab ek function apne lexical scope ke bahar access karta hai aur uske sath environment ko "yaad" rakhta hai.

// ChatGPT Se liya hua Syntax ---> Closure Ki Definition:
// Closure ek function hai jo apne surrounding lexical environment ko yaad rakhta hai jahan pe wo define hua tha, chahe wo function us environment ke bahar hi kyun na execute ho.

// ChatGPT Se liya hua Syntax --->Closure Kaise Kaam Karta Hai:
// Closure ek combination hota hai function aur uske lexical environment ka. Lexical environment wo hota hai jahan pe variables aur functions defined hote hain. Jab ek inner function apne outer function ke scope se variables access karta hai, tab closure banta hai.

// ChatGPT Se liya hua Syntax ---> Closures Ke Advantages:
// 1. Data Encapsulation: Closure variables ko private rakhte hain aur direct access se protect karte hain.
// 2. State Management: Functions ke andar state ko maintain karte hain bina global variables ka use kiye.
// 3. Higher-order Functions: Functions ko argument ke roop mein pass karne ya return karne ki capability deta hai, jisse functional programming patterns follow kiye ja sakte hain.



//Khud ka defiend kiya hau Example.
// function fisrt(){
//      let a = "Outer Function In Called Now"
//      console.log(a);

//      function second (){
//         let b = "Inner function Called Now"
//         console.log(b);
//         console.log(a);  // outter function ko use karne ko closuer bolete hai.

//      }
//      second ()

// }
// fisrt()



// ChatGPT Se liya hua Syntax Example---> 
function outerFunction() {
  let outerVariable = 'I am outside!';
  
  function innerFunction() {
      return outerVariable; // innerFunction can access outerVariable
  }
  
  return innerFunction;
}

const closureFunction = outerFunction();
console.log(closureFunction()); // Output: I am outside!



















































































