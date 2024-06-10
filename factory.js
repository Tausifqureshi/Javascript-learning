// ChatGPT Se liya hua Syntax ---> Factory Function kya hota hai?
// JavaScript mein, ek factory function ek aisa function hota hai jo ek object banaata hai aur use return karta hai. Yeh object banana ke ek controlled aur customizable tarika hai. Factory functions design pattern ka ek roop hain jo aapko specific properties aur behaviors ke saath objects banane ki suvidha dete hain.

// ChatGPT Se liya hua Syntax ---> Factory Function kaise kaam karta hai?
// Ek factory function mein, aap object ki properties aur methods ko define karte hain. Jab aap function ko call karte hain, to yeh ek naya object banaata hai, usse properties aur methods assign karta hai, aur fir usse return karta hai.

// Factory function
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(
        "Hello, my name is " +
          this.name +
          " and I am " +
          this.age +
          " years old."
      );
    },
  };
}

// Person objects create karne ke liye factory function ka use karein
var person1 = createPerson("John", 30);
var person2 = createPerson("Alice", 25);

// Person objects ke greet method ko call karein
person1.greet(); // Output: Hello, my name is John and I am 30 years old.
person2.greet(); // Output: Hello, my name is Alice and I am 25 years old.

//=======================================================================================================//
// Khud ka Example kiya hau perctic.
function mobile(name, model) {
  return {
    phoneName: name,
    model: model,

    greet: function () {
      return (
        "This, phone name is " + this.phoneName + " and this " + this.model
      );
    },
  };
}

let phn = mobile("Sumsung", "Galaxy");
console.log(phn);

let phn1 = mobile("Sumsung", "Galaxy j2pro");
console.log(phn1);

console.log(phn.greet());
console.log(phn1.greet());

// ============================================ IIFE =================================================//
// ChatGPT Se liya hua Syntax ---> Immediately Invoked Function Expression (IIFE) ek aisa function hota hai jo define hote hi turant invoke ho jata hai. Yeh function ek tarike ka self-executing anonymous function hota hai. IIFE ka istemal aksar variable scope ko limit karne ke liye kiya jata hai taaki global namespace ko pollute na kiya ja sake.

// IIFE ka syntax kuch is tarah hota hai.
(function () {
  // Code goes here
})();

(function () {
  // Code goes here
})();
// Dono syntax ka purpose ek hi hai, sirf parentheses ka placement alag hai. Ab main ek example ke through IIFE ko samjhata hu.

(function () {
  var privateVariable = "This is a private variable";

  console.log(privateVariable); // Output: This is a private variable
})();

// yeh code bahar access nahi kar sakta
console.log(privateVariable); // ReferenceError: privateVariable is not defined.


//   IIFE ka use karne ke kuch common scenarios.

// Global Scope Pollution Avoid Karna: IIFE ka use karte hue, aap global scope ko unnecessary variables se clutter hone se bacha sakte hain.

// Private Variables and Methods: IIFE ke through aap variables aur methods ko encapsulate karke unhe private bana sakte hain.

var result = (function(a, b) {
    var sum = a + b;
    return sum;
  })(5, 10);
  
  console.log(result); // Output: 15
  