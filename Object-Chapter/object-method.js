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

//=============================================== Object Method ==============================================//
//=============================================== Object.keys ==============================================//
// Object.keys();  ---> itared karne ke liye use hota hai .

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



//========================================= Object Cloning object assing ========================================//
// ChatGPT Se liya hua Syntax ---> Object.assign method JavaScript ka ek powerful method hai jo ek ya ek se zyada objects ki properties ko ek target object me copy karne ke liye use hota hai. Ye method shallow copy perform karta hai, yani sirf reference values ko copy karta hai, na ki deeply nested values ko.

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



//======================================= Object Property Getter and Setter =======================================//

//============================================ Object Property Getter ============================================//
// ChatGPT Se liya hua Syntax ---> JavaScript mein, Object getters ek tareeka hain jisse aap object properties ko dynamically retrieve kar sakte hain. Getters aapko ek property ke value ko calculate karne ka facility dete hain jab bhi us property ko access kiya jata hai.

const persons = {
    firstName: 'John',
    lastName: 'Doe',
    // Define a getter for fullName
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  console.log(persons.fullName); // Output: John Doe
  



//============================================ Object Property Setter ============================================//
// ChatGPT Se liya hua Syntax ---> JavaScript mein, Object ki properties ko set karne ke liye aap alag-alag tareekon ka istemal kar sakte hain. In methods ko samajhna zaroori hai kyunki yeh aapko Object ki properties ko dynamically update karne mein madad karte hain. Yahaan main Object setter methods ke baare mein detail se batane jaa raha hoon.Object me proprty set karne ke kuch tarike hai.

//============================================  Object.defineProperty ============================================//
// ChatGPT Se liya hua Syntax ---> 1. Using Object.defineProperty
// Object.defineProperty method ka use karke aap ek Object ki property ko define aur set kar sakte hain. Yeh method aapko property ki attributes specify karne ki flexibility deta hai, jaise ki enumerable, configurable, aur writable.

let student = {};

// Define a property with a specific descriptor
Object.defineProperty(student, 'name', {
  value: 'Alice',
  writable: true, // Can be changed
  enumerable: true, // Will be listed in for...in loop
  configurable: true // Can be deleted or reconfigured
});

console.log(student.name); // Alice

// Changing the property value
student.name = 'Bob';
console.log(student.name); // Bob



//============================================  Object.definePropertys ============================================//
// ChatGPT Se liya hua Syntax ---> 2.  Using Object.definePropertiesObject.defineProperties method aapko ek Object ke multiple properties ko ek sath define aur set karne ki suvidha deta hai.


let per = {};

Object.defineProperties(per, {
  'name': {
    value: 'Alice',
    writable: true,
    enumerable: true,
    configurable: true
  },
  'age': {
    value: 25,
    writable: true,
    enumerable: true,
    configurable: true
  }
});

console.log(per.name); // Alice
console.log(per.age);  // 25

// Changing the properties
per.name = 'Bob';
per.age = 30;
console.log(per.name); // Bob
console.log(per.age);  // 30





//============================================ Getters and Setters ============================================//
// ChatGPT Se liya hua Syntax ---> 3. Using Accessor Properties (Getters and Setters)
// Accessors get aur set methods ka use karke aap ek property ke values ko dynamically compute aur modify kar sakte hain.


let proson = { 
    firstName: 'Tausif',
    lastName: 'Qureshi',
    color: "Brown",

    // Getter method
    get getfullDetails() {
        return `${this.firstName}, ${this.lastName}`;
    },

    // Setter method
    set setFullDetails(para) { // Set Propert ek hi parameter leti hai. agar multiple parameter tu bar bar para ko hi use karna hoga.
        this.firstName = para.fn;  // Set firstName
        this.lastName = para.ln;   // Set lastName
        this.old = para.age;       // Set age
    }
}

// Setting values using the setter
proson.setFullDetails = { fn: "Iqbal", ln: "English", age: 25 }; //multipal value ko aise add karte hai.

// Accessing the getter
console.log(proson.getfullDetails);  // Outputs: "Iqbal, English" Property add hone ke baad Checking.


// Printing the entire object
console.log(proson);  // Outputs the entire object with updated values

// Accessing a specific property
console.log(proson.lastName);  // Outputs: "English" //

console.log(proson.getfullDetails) //get use tu aise console se call karwate hai ?



