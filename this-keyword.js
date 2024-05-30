// This keyword ---> this ki value change nhi kar sakte hai javascript me q ke ye variable nhi ek keyword hota hai ?  javascript me object ko hi refera karta hai this keyword ? this keyword referance type me ata hai ? this object current object ko hi refere karta hai ? this keyword ko ham strict mood me use tu undefinde ata hai ? function ke ander this keyword globle object ko refere karta hai ? jab ham this keyword ko event ke sath use karte hai to o elememt ko refere karta hai ? object me this keyword apne hi object ko refers karta hai ? Apply,Call,Bind , in methods ke sath bhi this object ko hi refers karta hai ?

// let thisKeyword = this;
// console.log(thisKeyword) //globle mens window aye ga is tara se this use tu ?

// "use strict";
// let thisKeyword = this;
// console.log(thisKeyword) // window hi object aye ga is tar use karne se "use strict";

//  "use strict";
// function myFunc(){  //function declaretion hai ye ?is function ka bhi this window object hota hai ? functiom me 'use strict' use tu undefind aye ga commit tu window aye ga?
//     console.log(this);
// }
// myFunc();

//=======object me this use ===========================//
//
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


//=====================================This keyword Chapter Harsit ka ========================================//
//console karne se this ki value window object print hoti hai jo javascript ka window object hota hai globel object? console window karne se bhi window object hi print hoga dono same hi hai ? This and Window ek hai baat hai javascript me ?

// console.log(this === window) //dono same hai true and false return hoga agr dono same tu ?

// console.log(this)

// console.log(window);

// "use strict"; //is ko use karne se function me jo this console hua hai us ki value ab undefiend aye gi use strict mood on karne se but is ko commit karne se this ki value window object hi print hogi? === interview quetion hai ye ?

// function myFunc(){  //function declaretion hai ye ?is function ka bhi this window object hota hai ?
//     console.log(this);
// }
// myFunc();

// <------------------> Arrow function This keyword<------------------>
// Arrow function ka this nhi hota hai ? Arrow function jo this leta hai apne surrounding se means Arrow function ka This jo hota hai window object hota hai globle bhi bolte hai ? Arrow Function ka This Change nhi kar sakte hai ?

// const user1 = {
//   firstName : "harshit",
//   age: 8,
//   about: () => {
//     // console.log(this) //Window object aye ga? Arrow function ka This Window hota hai?
//     console.log(this.firstName, this.age);
//   }
// }

// user1.about(user1);
//
