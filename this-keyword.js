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



// is tara  se object me this ki value access kar sakte hai q ke arrow function ka apna this nhi hota hai o jo this leta hai Saruonding se leta hai jaha function call hota hai .
const person2 = { 
  name: "John Doe",
  showSkills: function() {
  //   console.log(this.name);
  const showSkillsArrow = () => {
      return(this.name); // Error: this is not defined
    };
    return showSkillsArrow()
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
// Arrow function ka this nhi hota hai ? Arrow function jo this leta hai apne surrounding se means Arrow function ka This jo hota hai window object hota hai globle bhi bolte hai ? Arrow Function ka This Change nhi kar sakte hai ?

// ChatGPT Se liya hua Syntax ---> Arrow functions mein this ki value fixed hoti hai aur badli nahi ja sakti hai.
// call, apply, aur bind methods arrow functions ke saath useful nahi hain.
// Agar aapko this ki value ko control karne ki zarurat hai, to regular functions ka use karein.

//ChatGPT Se liya hua Syntax --->  Arrow functions me, 'this' keyword us object ko refer karta hai jismein arrow function ko define kiya gaya hai. Isliye, agar aap arrow function ko kisi object ke method ke taur par define karte hain, toh 'this' keyword us object ko refer karega. Ye ES6 me introduce kiye gaye the aur unhone code ko zyada readable aur maintainable banane me madad ki hai.

const person = {
  name: "John Doe",
  showSkills() {
    console.log(this.name); // Output: John Doe
  }
};

person.showSkills(); // Output: John Doe

const showSkills = () => {
  console.log(this.name); // Error: this is not defined
};

showSkills(); // Error: this is not defined

//ChatGPT Se liya hua Syntax --->  Yeh Example Kya Batata Hai ?
// Pehle example me, 'showSkills' method ek arrow function hai jo 'person' object me define kiya gaya hai. Isliye, 'this' keyword 'person' object ko refer karta hai aur 'name' property ko access karta hai.
// Dusre example me, 'showSkills' ek standalone arrow function hai. Isliye, 'this' keyword defined nahi hai aur error aata hai.





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
























