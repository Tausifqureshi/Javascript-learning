// ChatGPT Se liya hua Syntax ---> JavaScript mein closure function kya hai?

// Closure function ek aisi function hoti hai jo apne containing scope ke variable tak pahunch sakti hai, jabki containing function execute ho chuka ho. Dusre shabdon mein, closure function apne parent function ke scope mein declare kiye gaye variable ko retain kar sakti hai.

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
function outerFunction(outerVariable) {
    // Outer function ke andar ek inner function define kiya jata hai
    function innerFunction(innerVariable) {
      console.log("Outer variable:", outerVariable);
      console.log("Inner variable:", innerVariable);
    }
    
    // Inner function ko return kiya jata hai
    return innerFunction;
  }
  
  // Outer function ko call kiya jata hai aur uska output inner function mein store kiya jata hai
  var closureFunc = outerFunction("Hello");

  // Inner function ko alag se call kiya jata hai
  closureFunc("World");
  



















































































