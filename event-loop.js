// ChatGPT Se liya hua Syntax ---> javaScript ka event loop ek bohot important concept hai, jo JavaScript ke asynchronous behavior ko samajhne me madad karta hai.

// ========================================== Event Loop Kya Hai ==============================================//
// ChatGPT Se liya hua Syntax ---> Event Loop Kya Hai.
// JavaScript ek single-threaded language hai, yani ek samay me ek hi kaam kar sakti hai. Lekin real-world applications me kai baar hame multiple operations simultaneously handle karne padte hain, jaise API calls, file reading, user interactions, etc. JavaScript ka event loop is problem ka solution provide karta hai.


// ====================================== Components of the Event Loop ===========================================//
// ChatGPT Se liya hua Syntax ---> Components of the Event Loop.

// 1. Call Stack: Ye ek LIFO (Last In, First Out) data structure hota hai jo code execution ko track karta hai. JavaScript me jab bhi koi function call hota hai, vo call stack me push hota hai. Jab function execute ho jata hai, vo stack se pop ho jata hai.


// 2. Web APIs: Browser provide karta hai asynchronous features jaise setTimeout, HTTP requests, DOM events, etc. Jab inka use kiya jata hai, to ye functions call stack se nikal ke Web APIs ke pas chala jata hai.

// 3. Callback Queue (Task Queue): Jab Web APIs apna kaam complete kar leti hain, to unke callbacks ko callback queue me bhej diya jata hai. Ye ek FIFO (First In, First Out) data structure hota hai.


// 4. Event Loop: Event loop continuously check karta rehta hai ki call stack empty hai ya nahi. Agar call stack empty hai aur callback queue me koi callback present hai, to event loop callback queue se callback ko call stack me push kar deta hai.


// =============================================== Event Loop Work ===============================================//
// ChatGPT Se liya hua Syntax ---> Kaise Kaam Karta Hai Event Loop.
// 1. Code Execution: JavaScript code call stack me execute hota hai.

// 2. Asynchronous Calls: Agar asynchronous call hoti hai jaise setTimeout, to vo call stack se nikal ke Web APIs ke pas chali jati hai.

// 3. Web APIs: Web APIs apna kaam complete kar ke callback queue me callback bhej deti hain.

// 4. Event Loop: Event loop check karta hai agar call stack empty hai to callback queue se callback uthake call stack me push kar deta hai, jisse vo execute ho sake.


// Example.
console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

console.log('End');

// Output.
// Start
// End
// Timeout
















































































































































