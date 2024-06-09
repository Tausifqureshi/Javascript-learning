// <------------------------------>Object Method<-------------------------------->
// Method ---> method bolte hai kisi object ke ander function Create hai us se method bolte hai ?

// this keyword --->  ka matlab hota hai us object ya variable ka reference this.firstName means object me jo firstName hai us se firstName lega us ka reference lege this ye hota hai ?

// function personInfo(){  //function bher create hai ? personInfo,
//     console.log(`person name is ${this.firstName} and age is ${this.age}`);
// }

const person1 = {
    firstName : "Tausif",
    age: 24,
    // about: personInfo, // object ke ander jo about hai o key hai or personInfo () ye function hai jo value ki tara set kar re hai personInfo upper jo bher function ki tara use hora hai line number 6 me ?

    about:function(){ //about key hai function value jaisa object me hota  hai key value paira ? ander create method means function ?
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
    //aise bhi create kar sakte hai function ander hi? is method ko har object me use karne ke liye Call,Apply,Bind ke sthe hi use kar sakte hai only sirf jo ye function ander hai is liye 3 method ka use hoga only bher ke liye  personInfo se hi work hoga har object ke luye 
    }

}

const person2 = {
    firstName : "Qureshi",
    age: 18,
    // about: personInfo
}

const person3 = {
    firstName : "Iqbal",
    age: 17,
    // about: personInfo
}
 
// personInfo() //---> direct call karne se undefiend aye ga 

person1.about(); //function call hore jis bhi object ke sath function ke sath defiend hai us se sath call hore hai ?
// person2.about();
// person3.about();






// <------------------------------>Object Creating Method<-------------------------------->

//=============================================== Object.keys ==============================================//
// Object.keys();  ---> itared karne ke liye use hota hai ?
// ChatGPT Se liya hua Syntax ---> JavaScript me, Object.keys() ek built-in method hai jo ek object ke sabhi enumerable property names ek array me return karta hai. Enumerabe property names woh properties hain jinhe ek for-in loop se iterate kiya ja sakta hai.

// const person = {
//     name: "John Doe",
//     age: 30,
//     occupation: "Software Engineer"
//   };
  
//   const keys = Object.keys(person);
//   console.log(keys); // Output: ["name", "age", "occupation"]
  


// ChatGPT Se liya hua Syntax ---> Ek object ke sabhi properties ko iterate karne ke liye:
const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer"
  };
  
  const keys = Object.keys(person);
  
  for (const key of keys) {
    console.log(`${key}: ${person[key]}`);
  }
  


// ChatGPT Se liya hua Syntax ---> Non-Enumerable Properties.
// Object.keys() sirf enumerable properties ko return karta hai. Agar kisi property ko explicitly non-enumerable banaya gaya hai, toh wo Object.keys() ke result me nahi aayegi.

const book = {
    title: 'JavaScript Guide',
    author: 'MDN'
};

Object.defineProperty(book, 'publishedYear', {
    value: 2020,
    enumerable: false
});

const keys1 = Object.keys(book);

console.log(keys1); // ["title", "author"]




//=============================================== Object.values ==============================================//
//  ChatGPT Se liya hua Syntax ---> Object.values() method ek JavaScript method hai jo ek object ke sabhi enumerable property values ko ek array mein return karta hai. Enumerbale property values woh property values hain jinhe ek for...in loop mein iterate kiya ja sakta hai.


const user = {
    id: 1,
    name: "Alice",
    details: {
      age: 25,
      city: "Wonderland"
    }
  };
  
  const values = Object.values(user);
  console.log(values); 
  // Output: [1, "Alice", { age: 25, city: "Wonderland" }]
  


//  ChatGPT Se liya hua Syntax ---> Example 4: Non-Enumerable Properties.
const obj = {
    a: 1,
    b: 2
  };
  Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: false
  });
  
  const values1 = Object.values(obj);
  console.log(values1); 
  // Output: [1, 2]
  

//=============================================== Object.entries ==============================================//

//  ChatGPT Se liya hua Syntax --->  Object.entries() method JavaScript ka ek built-in method hai jo kisi object ke saare enumerable property [key, value] pairs ko ek array of arrays me return karta hai. Ye method mainly tab use hota hai jab hume kisi object ke saare properties ko iterate karna hota hai.



// ChatGPT Se liya hua Syntax --->  Object.entries() ko hum commonly loops ke sath use karte hain, jaise for...of loop ke sath. Isse hum easily object ke key-value pairs ko iterate kar sakte hain.
const use = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};

for (const [key, value] of Object.entries(use)) {
    console.log(`${key}: ${value}`);
}


// ChatGPT Se liya hua Syntax ---> Object.entries() method ka ek aur use case hai jab hume ek object ko Map me convert karna hota hai.
const users = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};
const userMap = new Map(Object.entries(users));

console.log(userMap);
// Output: Map(3) { 'name' => 'Alice', 'age' => 25, 'city' => 'New York' }


// <------------------------------>Object Cloning object assing <-------------------------------->
// ChatGPT Se liya hua Syntax ---> Object.assign() JavaScript ka ek built-in method hai jo ek ya adhik sources objects se properties ko ek target object me copy karta hai. Yeh method mostly cloning objects ya multiple objects ko merge karne ke liye use hota hai.

// ChatGPT Se liya hua Syntax --->  Basic Example.
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);           // Output: { a: 1, b: 4, c: 5 }
// console.log(returnedTarget);   // Output: { a: 1, b: 4, c: 5 }



// ChatGPT Se liya hua Syntax --->  Deep Clone Example.
// Object.assign() method shallow copy karta hai, iska matlab hai ki nested objects ko copy nahi karta. Is problem ko solve karne ke liye hume deep cloning techniques use karni padti hai. Ek simple tarika JSON methods ka use karna hai.
const obj1 = { a: 0, b: { c: 0 }};
const obj2 = JSON.parse(JSON.stringify(obj1));

obj1.a = 1;
obj1.b.c = 1;

console.log(obj1);  // Output: { a: 1, b: { c: 1 }}
console.log(obj2);  // Output: { a: 0, b: { c: 0 }}



// ChatGPT Se liya hua Syntax --->  Use Case: Default Settings.
// Yeh method default settings ke saath user settings ko merge karne ke liye useful hai.
const defaultSettings = {
    theme: "light",
    showNotifications: true,
    shortcuts: {
        save: "Ctrl+S",
        find: "Ctrl+F"
    }
};

const userSettings = {
    theme: "dark",
    shortcuts: {
        find: "Alt+F"
    }
};

const settings = Object.assign({}, defaultSettings, userSettings);

console.log(settings);
// Output: 
// {
//   theme: "dark",
//   showNotifications: true,
//   shortcuts: {
//     find: "Alt+F"
//   }
// }

// Is example me, userSettings ko defaultSettings ke saath merge kiya gaya hai. theme property overwrite ho gayi hai aur shortcuts property bhi userSettings ke corresponding value se update ho gayi hai.



//<------------------------------>   Object Property Getter and Setter  <-------------------------------->
// Getter and Setter ---> Function Jaisa hi hota hai ye Getter and Setter ? ye propeter object ki value ko read and set karne ke liye use hoti hai ? is jayda tara use obejct-constructor me use hota hai ? getter se value set karte hai ? setter se value ko set karte hai ?

// let proson = { 
//     firstName : 'Tausif',
//     lastName : 'Qureshi',
//     color : " Brown",

//     // fullDetails : function() { //is ko method bolte hai ?
//     //     return `${this.firstName},${this.lastName}`;
//     //}

//    get getfullDetails(){ //is ko method bolte hai ?jab get ka use tu functio aisa banate hai ?getter ka use hota hai property ko read karne ke liye ?
//         return `${this.firstName}, ${this.lastName}`;
//     },

//     set setFullDetails (para){  //set ek hi parameter leta hai? agar multiple parameter tu bar bar para ko hi use karna hoga ?
//      this.firstName = para.fn, //fn firstName
//     this.lastName = para.ln; //ln lastName ,
//     }
    
// }
// proson.setFullDetails = {fn: "Iqbal", ln : "English"} //multipal parameter hai tu value aise add karte hai ?

//proson.setFullDetails = 'Javed' //aise add ? 

// console.log(proson.getfullDetails)//property add hone ke baad console lineNumber 265 and 267 dono same hi call joge?

// console.log(proson) //pura object print hoga aise ?

// console.log(proson.lastName) //use Dot notetion ?

// console.log(proson['firstName']) ///aise bhi access kar sakte breaket notation se javascript me key string me hi hoti hai ?

// console.log(proson.fullDetails()) ?  //pura function aye ga is ?

// console.log(proson.getfullDetails) //get use tu aise console se call karwate hai ?
