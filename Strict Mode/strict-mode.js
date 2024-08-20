//================================================ Strict Mood=================================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me "strict mode" ek aisa feature hai jo JavaScript code ko strict tareeke se execute karne ke liye enable kiya jata hai. Strict mode ka use karke aap apne code me kuch specific galtiyon ko avoid kar sakte hain, jo otherwise silently ignore ho sakti hain. Isse aapka code zyada safe aur error-free ban jata hai.


//============================================= Strict Mood Enable =============================================== //
// ChatGPT Se liya hua Syntax ---> Strict Mode Enable Karna.
// Strict mode ko enable karne ke liye aapko apne JavaScript code ke shuruat me ya kisi specific function ke andar "use strict"; likhna hota hai.

// 1. Global Strict Mode:
// Agar aap pure script me strict mode enable karna chahte hain, toh script ke bilkul shuruat me "use strict"; likh sakte hain.

"use strict";

// Yeh code ab strict mode me chalega
let x = 3.14;



// 2. Function-Level Strict Mode:
// Agar aap sirf kisi specific function ke liye strict mode enable karna chahte hain, toh aap function ke andar "use strict"; likh sakte hain.

function myFunction() {
    "use strict";
    // Sirf is function ke andar wala code strict mode me chalega
    let y = 3.14;
}



//============================================= Strict Mood Fayda =============================================== //
// ChatGPT Se liya hua Syntax ---> Strict Mode Ka Fayda. 
// Error Handling: Strict mode kuch specific actions ko errors ki tarah treat karta hai jo normal mode me silently ignore ho jati hain. Jaise ki.


//1.  Undeclared Variables: Strict mode me aapko pehle variable declare karna padta hai (let, const, ya var use karke) warna ReferenceError aayega.
// "use strict";
// let x = 10;  // Error: x is not defined



// 2. Deleting Variables/Functions: Aap kisi variable ya function ko delete nahi kar sakte strict mode me.
// "use strict";
// let x1 = 10;
// delete x1;  // Error: Deleting local variable in strict mode.




