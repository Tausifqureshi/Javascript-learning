// This keyword ---> this ki value change nhi kar sakte hai javascript me q ke ye variable nhi ek keyword hota hai ?  javascript me object ko hi refera karta hai this keyword ? this keyword referance type me ata hai ? this object current object ko hi refere karta hai ? this keyword ko ham strict mood me use tu undefinde ata hai ? function ke ander this keyword globle object ko refere karta hai ? jab ham this keyword ko event ke sath use karte hai to o elememt ko refere karta hai ? object me this keyword apne hi object ko refers karta hai ? Apply,Call,Bind , in methods ke sath bhi this object ko hi refers karta hai ?

// ChatGPT Se liya hua Syntax ---> JavaScript mein, "this" keyword ek special keyword hai jo hamesha ek object ko refer karta hai. Yah object kaun sa hai ye is baat par depend karta hai ki "this" keyword ka use kaha aur kaise kiya ja raha hai.

// "this" keyword ke baare mein kuchh important baatein:
// "this" keyword ek variable nahi hai, balki ek keyword hai. Isliye, iska value change ya reassign nahi kiya ja sakta hai.
// "this" keyword ka value runtime mein determine hota hai, compile time mein nahi.
// Strict mode mein, "this" keyword ka use karne se pehle use check karna chahiye ki wo undefined hai ya nahi.

//============================================= object this =============================================//
//ChatGPT Se liya hua Syntax ---> Object methods mein: Jab ek object ka method call kiya jaata hai, toh "this" keyword us object ko refer karta hai jiska method call kiya ja raha hai.

let student1 = {
  fisrtName: "Tausif",
  lastName: "qureshi",
  age : 25,
fullName: function () { //fullname key hai function value? function ander bhi create kar sakte hai aise?
return `${this.fisrtName} ${this.lastName} ${this.age}`; //object me this keyword apne hi object ko refers karta hai
  },
};

// console.log(student1.fullName()); //aise bhi print karwa sakte hai ?
let saveValue =student1.fullName();
console.log(saveValue) //aisa bhi print karwa sakte return ke time aise hi store kar ke print karte hai ?



//ChatGPT Se liya hua Syntax ---> Object Method Context.
// Agar arrow function ek object ke method ke taur par likha gaya hai, toh usme bhi this lexical scope ke hisab se hoga, yaani, us object ke outer scope ka this jo bhi hai, wahi arrow function ke andar bhi this hoga.

const person2 = { 
  name: "John Doe",
  showSkills: function() {
  //   console.log(this.name);
  const showSkillsArrow = () => {
      return(this.name); // Error: this is not defined
    };
    return showSkillsArrow() // arrow function showskills me call hora hai is liye ye arrow function this showskill wale functionm se lera hai.
  }
};
console.log(person2.showSkills())





//=========================================== Standalone functions me ============================================//
//ChatGPT Se liya hua Syntax --->  Jab ek standalone function ko call kiya jaata hai, toh "this" keyword global object ko refer karta hai.
function greet() {
  console.log(this.name); // Output: undefined
}
greet();


//=========================================== Strict mode mein ============================================//
//ChatGPT Se liya hua Syntax ---> Strict mode mein, jab ek function ko call kiya jaata hai, toh "this" keyword undefined hota hai.
"use strict";
function greet() {
  console.log(this.name); // Output: undefined
}
greet();
3
//=========================================== Events mein ============================================//
//ChatGPT Se liya hua Syntax ---> Jab ek event trigger hota hai, toh "this" keyword us element ko refer karta hai jisne event trigger kiya hai.
var button = document.getElementById("ajax");

button.addEventListener("click", function() {
  console.log(this.id); // Output: ajax
});


//================================ Call(), apply(), aur bind() methods ke saath =================================//
//ChatGPT Se liya hua Syntax --->   call, apply, aur bind methods:
// Yeh methods ek function ko call karne ke liye use karte hain aur this ki value ko specify karne ki facility dete hain. Lekin, arrow functions ke saath in methods ka koi fayda nahi hota hai kyunki arrow functions mein this ki value ko badla nahi ja sakta hai.

// Arrow functions mein this ki value fixed hoti hai aur badli nahi ja sakti hai.
// call, apply, aur bind methods arrow functions ke saath useful nahi hain.
// Agar aapko this ki value ko control karne ki zarurat hai, to regular functions ka use karein.

const person1 = {
  name: "John Doe",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  },
  greetArrow: () => {
    console.log("Hello, my name is " + this.name);
  }
};

person1.greet(); // Output: Hello, my name is John Doe
person1.greetArrow(); // Output: Hello, my name is

const boundGreet = person1.greet.bind(person1);
boundGreet(); // Output: Hello, my name is John Doe

const boundGreetArrow = person1.greetArrow.bind(person1);
boundGreetArrow(); // Output: Hello, my name is (arrow functions mein bind ka koi fayda nahi hai)



//ChatGPT Se liya hua Syntax --->  Call(), apply(), aur bind() methods ka use karke, hum kisi bhi object ko "this" keyword ka value bana sakte hain.
var person = {
  name: "John Doe",
  age: 30,
  fullName: function() {
    return this.name + " " + this.age;
  }
};
var greet = person.fullName.bind(person);
console.log(greet()); // Output: John Doe 30


//======================================= Arrow function This keyword ==========================================//
// ChatGPT Se liya hua Syntax ---> Arrow functions mein this ki value fixed hoti hai aur badli nahi ja sakti hai.
// call, apply, aur bind methods arrow functions ke saath useful nahi hain.
// Agar aapko this ki value ko control karne ki zarurat hai, to regular functions ka use karein.


// ChatGPT Se liya hua Syntax ---> Key Points.
// 1. No Binding: Arrow functions ka this kabhi bhi call, apply, ya bind methods se change nahi kiya ja sakta. Arrow functions ko kabhi bhi traditional functions ki tarah this binding ke liye use nahi kar sakte.

// 2. No new: Arrow functions ko new keyword ke saath constructor ke roop me instantiate nahi kiya ja sakta.

// 3. Inheritance: Arrow functions ka this hammesha apne surrounding lexical scope se inherit hota hai, jo unhe bahut hi predictable aur stable banata hai in terms of this binding.



// ChatGPT Se liya hua Syntax ---> 1. Object Method Context.
// Agar arrow function ek object ke method ke taur par likha gaya hai, toh usme bhi this lexical scope ke hisab se hoga, yaani, us object ke outer scope ka this jo bhi hai, wahi arrow function ke andar bhi this hoga.
const person = {
  name: 'Tausif',
  greet: function() {
      const innerFunc = () => {
          console.log(`Hello, ${this.name}`);
      };
      innerFunc();
  }
};
 
person.greet(); // Output: Hello, Tausif



// ChatGPT Se liya hua Syntax ---> 2. this in Arrow Functions Within Objects
// Agar hum arrow function ko directly ek object property ke taur par define karte hain, toh ye surrounding global scope se this inherit karega, na ki object se.
const person = {
  name: 'Tausif',
  greet: () => {
      console.log(`Hello, ${this.name}`);
  }
};

person.greet(); // Output: Hello, undefined (in non-strict mode)



//======================================= this kyeword constructor ==========================================//

//ChatGPT Se liya hua Syntax ---> Agar aap ek constructor function ke andar arrow function define karte hain, to us arrow function ka "this" keyword naye banae gaye object ko refer nahi karega. Instead, ye us scope ke "this" binding ko inherit karega jismein arrow function define kiya gaya hai.

// Samadhaan:m ---> Yeh samasya ko do tarikon se hal kiya ja sakta hai:
// 1. Regular Function ka Istemaal:
// Agar aapko constructor function ke andar 'this' keyword ko use karne ki zarurat hai, toh regular function ka istemaal karein

class Person {
  constructor(name) {
    this.name = name;
    this.greet = function() {
      console.log(`Hello, my name is ${this.name}`);
    };
  }
}

const person = new Person('John Doe');
person.greet(); // Output: Hello, my name is John Doe



// 2. Bind Method ka Istemaal:
// Agar aapko arrow function ka concise syntax chahiye, toh aap 'bind' method ka istemaal kar sakte hain. Yeh method, 'this' keyword ko function ke specific context mein bind kar deta hai.
class Person {
  constructor(name) {
    this.name = name;
    this.greet = () => {
      console.log(`Hello, my name is ${this.name}`);
    };
    // 'bind' method ka istemaal
    this.greet = this.greet.bind(this);
  }
}
const person = new Person('John Doe');
person.greet(); // Output: Hello, my name is John Doe
























