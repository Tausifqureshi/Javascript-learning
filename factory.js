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
