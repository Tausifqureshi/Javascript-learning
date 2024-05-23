"use strict"; //is ko use karne se function me jo this console hua hai us ki value ab undefiend aye gi use strict mood on karne se but is ko commit karne se this ki value window object hi print hogi? === interview quetion hai ye ? --> object-oriented-file ka This keyword ka question hai line number 54 ?

Date.prototype.getLastYear = function () {
  //interview me ata hai ye question aisa function banao 2024 chal hai but current years se ek years kam de matlab 2023 ana ?

  return this.getFullYear() - 1; //this newDate ko hi refer kar ra hai ? getFullYear() -1 2023 aye ga interview question hai ye ?
};

let newDate = new Date();
console.log(newDate.getFullYear());

console.log(newDate.getLastYear());

//interview me ata hai ye qution aisa logic currnt date se 50 day jayda hona
let newDate1 = new Date("2023-03-25"); //aisa bhi kar sakte apni khud ki date defind kar ke ?
console.log(newDate1);
newDate1.setDate(newDate1.getDate() + 50);
console.log(newDate1);

//  ======================================Chai and code chenal ka =========================================//
// vedio number 47

// interveiw  me puchte hai Math.PI ki value chang hota hai ya nhi agar nhi hoti tu q nhi hoti us interveiwer ko is tara expelan kar ke batana  hoga indeep khowlege hona chachiye ?

// .getOwnPropertyDescriptor ---> ye property js ke object ki jo hiden cheezo ke bare me batati hai ?

// let descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descriptor)
// Map.PI = 5;
k; // console.log(descriptor)

// kya ham hamre bhi object ki property ko bhi .getOwnPropertyDescriptor use kar ke aisi value bana sakte hai Map.PI ki tara jo hamri bhi value change na kar sake ? ha bana sakte hai ?

let person = {
  firstName: "Tauisf",
  age: 24,
  address: "Mumbai",
};

console.log(person);

// console.log(Object.getOwnPropertyDescriptor(person, "firstName")); //kon si property lana hai us se math.pi ki tara banana ?

Object.defineProperty(person, "firstName", {
  //object ke ander apni property defiend bhi kar sakte ? hame kon si value ko descriptor math.pi ki tara value change na ho sake ?

  // jitne bhi true sub ko false karna hoga fir koi firstname ki value change nhi kar sakta hai math.pi ki tara ek bar value defiend next time change nhi hoti hai ?

  //   configurable: false,
  enumerable: false, //is ko false karte hi name pe loop karna ban ho jaye ga jo niche hame for of loop use kiya hai true tu loop work kar re ga false tu nhi kar re ga ?
  //   writable: false,
});

console.log(Object.getOwnPropertyDescriptor(person, "firstName"));

// let person = {
//     firstName: "Tauisf",
//     age: 24,
//     address: "Mumbai",

//     fullName : function () {
//         console.log("My name is Tauis") //is se code pate ga ?
//     }
//   };
//   console.log(person);

for (let [key, value] of Object.entries(person)) {
  if (typeof value !== "function") {
    // checking type of agar function ata hai tu us pe loop nhi chale gi ?

    console.log(`${key},${value}`);
  }
  // for of loop object pe nhi laga sakte q ke o iterable nhi hai error aye ga is ko iterable banane ke liye Object.entries() ka use karte hai ye Object.entries() array me change kar deta hai object ko fir ham is pe of of loop laga ke iterable kar sakte hai ?
}
