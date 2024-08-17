// ============================================= Curring-Function ================================================ //
// ChatGPT Se liya hua Syntax ---> Currying ek technique hai jisme ek function ko aise likha jata hai ki wo multiple arguments ko ek-ek karke accept kare, na ki ek sath. Ye technique functional programming me bahut useful hoti hai aur code ko zyada modular aur reusability ko badhati hai.


// =========================================== work Curring-Function ============================================= //
// ChatGPT Se liya hua Syntax ---> Currying Kaise Kaam Karta Hai.
// Currying ek function ko aise likhne ki technique hai ki wo ek function ke andar ek function return karta hai jo baaki ke arguments ko accept karta hai.


// Normal Function.
function add(x, y, z) {
    return x * y * z ;
}

console.log(add(2, 3,4)); // Output: 5



// Curring Function Example.
function multiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}

console.log(multiply(2)(3)(4)); // Output: 24 best tarika call karne ka curring function.

let multiplyByTwo = multiply(2); // is tara se bhi call kar sakte hai but memory space is se jayda hota hai.
let multiplyByTwoAndThree = multiplyByTwo(3);
console.log(multiplyByTwoAndThree(4)); // Output: 24




// =========================================== Benefits of Currying ============================================== //
// ChatGPT Se liya hua Syntax ---> Benefits of Currying.

// 1. Reusability: Curried functions ko as partially applied functions use kiya jaa sakta hai, jisse code reusability badhti hai.

// 2. Readability and Maintenance: Currying se functions short aur modular bante hain, jisse code readability aur maintainability improve hoti hai.

// 3. Function Composition: Currying se complex functions ko simple functions mein break kiya jaa sakta hai, jisse unko combine karna aasaan ho jaata hai.