// 

// ChatGPT Se liya hua Syntax ---> JavaScript me Objects ek bahut hi important concept hai. Object ek collection hota hai key-value pairs ka, jaha key string ya symbol hota hai aur value kisi bhi type ka ho sakta hai (string, number, function, array, ya dusra object). Objecr itareble nhi hota hai 

// ChatGPT Se liya hua Syntax ---> javaScript mein, object ek data type hota hai jo key-value pairs ka collection hota hai. Key aur value string, number, boolean, array, function, ya dusre object bhi ho sakte hain. Object ko curly braces {} ke andar define kiya jata hai, aur key aur value ko colon : se separate kiya jata hai.



// const key = "email"; //key add hori emails ki
// let person = {
//     name: 'Tauisf',
//     age: 24,
//     address: "Mumbai",
//     hobbies:["Crickect" ,"Bookread" ,"coding" ,"Game"],
// }

// person.contec= 8429097693; //add peoperty object me
// person[key]= "tausifqureshi@gaml.com" //aise key value add kar sakte key email aye gi ?
// person.lastName = "javed"  //aise bhi add karte hai but ye normal add hoga is se ?
// person.name = "Qureshi";   //value ka bhi change kar sakte hai aise ?

// document.writeln(person.hobbies)
// console.log(person["name"]) //aise bhi access kar sakte breaket notation se javascript me key string me hi hoti hai?
// console.log( typeof person) //pura object print hoga is se or types bhi check kar re hai ?

//<----------------------------------> nested object <------------------------------------------------>
// Nested-Object ---> is ka menas hota hai object ke ander object hona
// let person = {
//     name: 'Tauisf',
//     age: 24,
//     address: "Mumbai",
//     car : {
//         name : 'Tata',
//         modal : 2024,
//         color : 'gray'
//     }
// }
// person.car.name = 'Volvo'; //value change bhi ker sakte hai ?
// person.car.speed = 'one'; //add value nested object ?

// console.log(person.car.color);
// console.log(person.car);

// <------------------------------> Object iterable chepter <-------------------------------->
//iterate karna means loop chalana hota hai? object ko iterated karne ke liye ham 2 loop use kar hai?
// [1] for in loop
// [2] object.keys

// const person = {
//     name: 'Tauisf',
//     age: 24,
//     address: "Mumbai",
//     hobbies:["Crickect" ,"Bookread" ,"coding" ,"Game"]
// }

// for in loop
// for(let b in person){
// console.log(b) //only key key aye gi name age hobbies ?

// console.log(person[b]) // only value ke liye aisa use karan hota hai?

// console.log(b,person[b]) key value ke liye aisa use karna padta hai?
// }

//object.keys loop use?

// const person = {
//     name: 'Tauisf',
//     age: 24,
//     address: "Mumbai",
//     hobbies:["Crickect" ,"Bookread" ,"coding" ,"Game"] //array hai object ke ander ye ?
// }
//  console.log(Object.keys(person)) //person object ek array me value retrun kare ga is se?

// <------------------------------>Object Speard oparetor chepter<-------------------------------->
// Speard oparetor object ko clone karne ke liya use hota hai .

// is tara se clone kar re ge tu ek me change tu dusre me bhi change hoga q ke object reference type data hai.
let myUser ={
  firstName : "Qureshi",
  email : "qureshi321@gmail.com",
}

let secondUser = myUser;
console.log(myUser);

console.log(secondUser);

secondUser.firstName = "Tauisf";
console.log(secondUser);
console.log(myUser);
// ================================= Speard oparetor clone object ==============================================//
// Speard oparetor object clone karne se ek object me change tu dusre me nhi hota hai.
let obj1={
  key1: "value1",
  key2: "value2"
}
const obj3={...obj1}; // speard hoge obje3 me jari value? new key bhi add kar sakte hai?
console.log("Object 3 Clone" , obj3);

obj3.key1 = "key13";
console.log("Object 3 Value Change",obj3);
console.log(obj1);

//===================================== Example 2 ===========================================//
// const obj1={
//     key1: "value1",
//     key2: "value2"
// }

// const obj2={
//     key3: "value3",
//     key4: "value4"
// }
// const obj3={...obj1,...obj2,key5:"value5"}; // speard hoge obje3 me jari value? new key bhi add kar sakte hai?

// console.log(obj3)
// console.log(typeof obj3) //types bhi check hora hai is se?




// const newObject = {..."abcdefgijklmnpqrstuvwxyz"} // agar khabi alpha bate ki index dhakna ho tu aisa use kar sakte hai?only string pe hi work karta hai number pe nhi q ke intiger number itarebal nhi hote hai agar{...1 2 3 } aisa speard kiye tu?
// console.log(newObject)

// ======================================= Object destructuring chepter ========================================== //

// const person = {
//   name: 'Tauisf',
//   age: 24,
//   address: "Mumbai",
//   hobbies:["Crickect" ,"Bookread" ,"coding" ,"Game"]
// }

//simple destructuring ye.
// const{name ,age:var2, address:var3, ...var4} = person; //destructurin hora yaha se alag alag variabal ban re hai. varibal ka naam aise change bhi kar sakte hai [var2:] kar re hai warna change nhi karna tu name jo object me property hai same [name] aisa bhi access kar sakte hai? ...sperad oparetor use kar ke bachi hohi value var3 me jaye gi.

// console.log(name);
// console.log(var2);
// console.log(var3);
// console.log("Speard oparetor use",var4); // speard oparetot use bachi hohi value is me aye gi hobbies.

// =========================================== nested destructuring ============================================== //
//nested destructuring object only.
const person1 = {
  name: 'Alice',
  age: 30,
  address: {
    city: 'New York',
    postalCode: '10001'
  }
};

const { name, age, address: { city, postalCode } } = person1;
console.log(name); // Output: Alice
console.log(age); // Output: 30
console.log(city); // Output: New York
console.log(postalCode)

// =========================================== nested destructuring ============================================== //
//nested destructuring object only array of object. ek array me kuch object store kar re hai.

// const users= [  
//           {userId: 1, firstName: "Tausif", gender:"Male"},
//           {userId: 2, firstName: "Qureshi", gender:"simple" },
//           {userId: 3, firstName: "Iqbal", gender:"hello"}
// ]
const [ user1,user2,user3]= users // is tara se destructuring karte hai tu pura ke pura object mile ga ander ki property ke liye {} use karana hoga jaise niche kar re hai.

console.log(user1) //simple destructuring ye.



// const users= [
//           {userId: 1, firstName: "Tausif", gender:"Male"},
//           {userId: 2, firstName: "Qureshi", gender:"simple" },
//           {userId: 3, firstName: "Iqbal", gender:"hello"}
// ]
// const [{firstName: firstName1}, {firstName: firstName2}, {firstName: firstName3}] = users;
// console.log(firstName1) //
// console.log(firstName2) //
// console.log(firstName3) //


const users= [ 
  {
    userId: 1, 
    firstName: "Tausif", 
    gender:"Male"
  },

  {
    userId: 2,
    firstName: "Qureshi",
    gender:"simple" 
  },

  {userId: 3, firstName: "Iqbal", gender:"hello"}
]
const [,{firstName,userId},{gender}] = users; //is se hora userid1 se name same us se id or userid3 ka gender is ko bolte hai nested destrcturing.
console.log(firstName);        
console.log(userId);            
console.log(gender);   

// <------------------------------>Object inside Array<-------------------------------->
//object ke ander Array create karen matlab ya fir array ke ander bhut share object create karan ye hota hai object inside array ? React me kafi use full hai ye method or real world application me bhi?

// const user= [             // ek array me kuch object store user ke ?

//           {userId: 1, firstName: "Tausif", gender:"Male"},
//           {userId: 2, firstName: "Qureshi", gender:"Male" },
//           {userId: 3, firstName: "Iqbal", gender:"Male"}
// ]
//   console.log(user[0])

// for(let i =0; i<user.length; i++){
//     console.log(user[i])
// }

// for(let i of user){
// console.log(i)
//     console.log(i.firstName)  //name id jo bhi print karwana kar sakte hai?
// }

// for(let i in user){  //  koi bhi loop use kar sakte hai?
//     console.log(user[i])
// }
//  let i =0;
//  while (i<user.length) {
//     console.log(user[i])
//     i++

//  }

// <------------------------------>parameter destructuring<-------------------------------->
//is object me use kiya gaya hai?
//react me kafi usefull method hai ye?

// let perosn ={
//     firstName: "Tausif",
//     lastName: "Qureshi",
//     age: 24,
//     gender: "Male",
// }

// function printDetails({firstName,lastName,age}){ //parameter desturcturing aisa hi karna chaiye
//     console.log(firstName)
//     console.log(lastName)
//     console.log(age)

// }
// printDetails(perosn)

// <------------------------------>Object me Array<-------------------------------->

const person = {
  name: "Tauisf",
  age: 24,
  address: "Mumbai",
  hobbies: ["Crickect", "Bookread", "coding", "Game"],
  person2: {
    name: "Javed",
    myFavorite: ["Driving", "Bookred", "Developer"], // nested array ?
  },
};

console.log(person.person2.myFavorite); //pura array aye ga is se nested wala ?

person.person2.myFavorite[3] = "Software"; // nested array me value add 3 index me add hoga?original array change hoga is se ?

console.log(person.person2.myFavorite); // checking add value 'Software ?

console.log(person.hobbies[1]); //Access indexing array value ?

console.log(person.hobbies); //pura array aye ga is se ?

console.log(person); //pura object print hoga is se ?


// ========================================== Object option chaining ============================================= //
// ChatGPT Se liya hua Syntax ---> JavaScript me optional chaining (?.) ek aisi feature hai jo aapko complex nested objects me properties ya methods ko safely access karne ki suvidha deta hai bina errors ka samna kiye. Iska fayda ye hai ki agar kisi bhi level pe property ya method undefined ya null ho, to TypeError throw karne ke bajaye undefined return karega.


// ChatGPT Se liya hua Syntax ---> Example: Nested Object Property Access.
const user = {
  name: 'Tausif',
  address: {
    city: 'Mumbai',
    zip: '400001'
  }
};

console.log(user?.address?.city); // 'Mumbai'
console.log(user?.address?.street); // undefined
console.log(user?.contact?.phone); // undefined



// Example: Array Index Access.
// const users = [{ name: 'Tausif' }, { name: 'Rahul' }];
// console.log(users?.[0]?.name); // 'Tausif'
// console.log(users?.[5]?.name); // undefined







