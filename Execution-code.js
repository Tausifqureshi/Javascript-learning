// javaScript  execution Cpontext ---> Javascript me code execute kaise hota hai puri details me.
// jab bhi javascript koi file ka code run karta hai sub se first ek Global Execution Context banta hai.


// ChatGPT Se liya hua Syntax ---> JavaScript mein "execution context" ek fundamental concept hai, jo code execution ko manage karta hai. Execution context ka matlab hota hai ki code kis tarah se execute hota hai, variables kaise store hote hain, scope kya hai, aur functions kaise invoke hote hain. Yeh concept understanding JavaScript ki fundamental understanding mein crucial hai.
//  Types of Execution Contexts.
// 1. Global Execution Context (GEC) .
// Yeh default execution context hota hai jo browser load hone ke baad create hota hai.
// Isme global code run hota hai, yani wo code jo kisi function ke andar nahi hai.
// Yeh execution context tab tak exist karta hai jab tak application run ho rahi hai.
// Iska ek window object hota hai browser me (aur global object Node.js me).

// 2. Function Execution Context (FEC).
// Jab bhi koi function call hota hai, naya execution context create hota hai.
// Har function call ke liye naya execution context banta hai.
// Isme function ka code run hota hai.

// 3. Eval Execution Context.
// Jab bhi eval function call hota hai, ek naya execution context create hota hai.
// Isme eval function ke andar ka code run hota hai.



//  ChatGPT Se liya hua Syntax ---> Javascript Execution code ke bare me ab.
// Execution Context Creation Phases ---> Execution context create hota hai do phases me hota hai: Memory Creation Phase aur Execution Phase.

// 1. Memory Creation Phase
// Memory Creation Phase: Is phase mein, JavaScript engine variables aur functions ke liye memory allocate karta hai. Hoisting ke through, function declarations aur variable declarations ko memory mein allocate kiya jaata hai, lekin variables ko undefined value assign hoti hai.

// 2. Execution Phase
// Execution Phase: Is phase mein, code line-by-line execute hota hai. Variables ko assigned values milti hain aur functions ko execute kiya jaata hai. Agar koi function call hota hai, to ek naya execution context create hota hai aur call stack mein push kiya jaata hai.


// ChatGPT Se liya hua Syntax ---> Call Stack.
// avaScript mein "call stack" ek data structure hai, jo function calls ko track karta hai, jab wo execute hote hain. Ye stack (Last In, First Out - LIFO) order mein work karta hai, matlab sabse last function jo call hua hai, woh sabse pehle execute hoga. Call stack JavaScript engine ke andar manage hota hai aur function calls ko manage karta hai.

// How Call Stack Works.
//  1. Function Invocation: Jab bhi koi function call hota hai, ek naya execution context create hota hai, aur ye context call stack mein push hota hai.

//  2. Execution: Function ke code ko line by line execute kiya jata hai. Agar function mein aur functions hain jo invoke hote hain, to unki execution context bhi call stack mein push hoti hai.

// 3. Completion: Jab function execute ho jata hai, uska execution context call stack se pop ho jata hai. Is tarah se sabse last function jo call hua tha, woh sabse pehle pop hota hai (LIFO order).

// Call Stack ka istemal memory management ke liye kiya jaata hai. call stack ek mechanism hai.  jabki call stack ka istemal function calls ko track karne ke liye kiya jaata hai.
































































































































































































