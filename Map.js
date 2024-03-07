//Map ---> Maps object ki tara hote hai Key value pairs store karte hai ?  but ham is me kisi bhi tara ki key ya value add kar sakte hai Exmple Function String Ek blank object bhi use kar sakte hai key ki tara ? Maps javascript ES6 me aya hai ? Maps pe for of loop se bhi key value paris get kar sakte hai ? Map bhi ek itareble hai ? Map me bhi duplicate kay nhi allow hai? Object or Mao me  different  Map me Key ki bhi type ki rahk sakte hai string number 

//  ====================================================Harsiht Cha========================================//
// object literal me key string ya synbole me hoti hai jayda tara 99 presnt string me hi key hoti hai ?
// Simple Object Create ye ?
// const person = {  // is ko object  Literals bhi bolte hai is ko ?
//     firstName : "Tausif", //string key
//     age: 7, 
//     1:"one"  
// }
// // console.log(person.firstName); //dot se bhi valuye print ?
// // console.log(person["firstName"]); //berackit use kar ke bhi value print karwa sakte haoi ? 
// // console.log(person[1]);  //object ki index bhi access kar sakte hai ?

// for(let key in person){ // for in loop use object pe ?
//     console.log(typeof key);
// }

//======================================= key value pair  Create Maps======================//
// store data in ordered fashion

// store key value pair (like object)

// objects can only have string or symbol me key hoti hai
// as key 

// in maps you can use anything as key
// like array, number, string 
// const person = new Map(); //Create map
// person.set('firstName', 'Tausif'); //Add value Maps me hori hai
// person.set('age', 7); //
// person.set(1,'one');  //Number me key Add

// person.set([1,2,3],'onetwothree'); // Array keys Values hai ye ? Array object hota hai object aye ga ?

// person.set({1: 'one'},'onetwothree'); // Objects Key value hai ye ? 

// console.log(person);  //Map Print Pura ? 

// console.log(person.get('firstName'));  //Get method se kon si key  and value hona mile gi is se?

// console.log(person.get(1));  // 1 se on aye ga 

// console.log(person.keys("firstName"));  // is method se sirf key hi mile gi 

// for(let key of person.keys()){ //Map pe For of loop use itared karne ke liye keys() method use only key mile gi ?
//     console.log(key, typeof key); //types check kya hai string objectt jo bhio ?
// }

// for(let [key, value] of person){ //Direct For of Loop Laga sakte hai Array ki form me Value aye gi?
//     // console.log(Array.isArray(key));
//     console.log(key, value) //Destuctruing kar re hai array ko ?
// }

let cosArray = new Map([["fisrtName", "Tausif"],['age',24]]) //Maps me arary me array bhi use kar sakte hai?
console.log(cosArray.values('firstName'))

//================================Real Stick Exampel===============================//
const person1 = {
    id: 1,
    firstName: "harshit"
} 
console.log(person1)
const person2 = {
    id: 2,
    firstName: "harshta"
}

const extraInfo = new Map(); 
console.log(extraInfo);
extraInfo.set(person1, {age: 8, gender: "male"}); //Map use kar ke object 1 me add value ?
extraInfo.set(person2, {age: 9, gender: "female"}); //Map use kar ke object 2 me add value ?
console.log(person1.id); // dono object me se kuch bhi console karwa sakte hai ?
console.log(extraInfo.get(person1)); //Pura object aye ga is se
console.log(extraInfo.get(person1).gender); //Map use kar ke object 1 grender Print ?
console.log(extraInfo.get(person2).gender); //Map use kar ke object 2 gender print?


//===============================End Hirshit =====================///


// Maps Methos use

//new Map() --->	Creates a new Map object ?
//get() --->	Gets the value for a key in a Map ?
//set() ---> Maps me Value Add karne ke liye use hota hai ?
//clear() --->	Removes all the elements from a Map ? 
// delete() --->	Removes a Map element specified by a key
// has() --->	koi key hai ya nhi check karne ke liye use hota hai ?
//size() ---> Maps ki length Check karne ke liye use hota hai ?





// const fruits = new Map(); //Empty Maps Creates;
// console.log(fruits)

// fruits.set("apples", 500);   //Value add maps me ?

// let key1 ='Tauisf', key2 = {name: "Qureshi"} ,key3 = function(){}, key4 = {}; //Maps constructor ye is me kuch bhi key value use kar sakte hai?
// fruits.set(key1, 'String Hai');  //Value add maps me  Aise bhi kar sakte hai ?
// fruits.set(key2, 'Object Hai');
// fruits.set(key3, 'Function Hai');
// fruits.set(key4, 'Empty Object Hai');
// console.log(fruits);

//=========Gets Method se value lere hai kon si key ki value hona get method use =======?
// let value = fruits.get(key4); 
// console.log(value);

// console.log(fruits.size) //length check hoti hai is size se ?

//========Map ko Itared karne ke liye for of loop use key value dono print hore hai =======?
// for(let [key,value] of fruits){  
//     console.log(key,value)
// }

//======Key Method se object ki Key hi onlye mile gi ========== ?
// for(let key of fruits.keys()){  
//     console.log(key, "key is print")
// }

//======Value Method se object ki Values hi onlye mile gi ==========?
// for(let value of fruits.values()){  
//     console.log(value, "Value Print"); 
// }


//==================ForEach Use looping In Maps ===============?
// fruits.forEach((value , key)=>{ 
//     console.log("key print ForEach", key);
//     console.log("Valyue print ForEach", value);
// })


//===============================Map ko Array me Converting aise karte hai ==========================?
// let myArray = Array.from(fruits); 
// console.log(myArray)
// console.log(Array.isArray ( myArray, 'Converting Array')); //Checking Array hai ya nhi ?

//===================================Map ki Keys ko Array me Converting aise karte hai ======================== ?
// let myArrayKeys = Array.from(fruits.keys()); 
// console.log(myArrayKeys,'Converting Array Keys');

//============================== Map ki Valyus ko Array me Converting aise karte hai ======================== ?
// let myArrayValues = Array.from(fruits.values()); 
// console.log(myArrayValues, 'Converting Array Values');


 //================code white Harry end =========//





































































































