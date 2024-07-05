// ChatGPT Se liya hua Syntax ---> JavaScript mein closure function kya hai?

//Closure ek important concept hai JavaScript mein, jo function ke bahar ke variables ko access karne ki capability ko refer karta hai. 

// Closure function kaise kam karti hai.
// Jab aap koi function define karte hain, to use function ko ek lexical environment assign kiya jata hai. Lexical environment mein woh sabhi variable shamil hote hain jo us function ke scope mein declare kiye gaye hain. Jab aap closure function ko call karte hain, to woh function apne lexical environment mein declare kiye gaye variable ko access kar sakti hai, jabki containing function execute ho chuka ho.



// Closuer in Javascript is ka matlab hota hai outter function ke variable ko inner function me use karna. but outter function inner function ke variable ko use nhi kar sakta hai.

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



// ChatGPT Se liya hua Syntax ---> 
function outerFunction() {
  let outerVariable = 'I am outside!';
  
  function innerFunction() {
      return outerVariable; // innerFunction can access outerVariable
  }
  
  return innerFunction;
}

const closureFunction = outerFunction();
console.log(closureFunction()); // Output: I am outside!




















































































