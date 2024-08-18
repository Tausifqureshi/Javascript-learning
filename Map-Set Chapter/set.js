// ChatGPT Se liya hua Syntax ---> JavaScript me "Set" ek data structure hai jo unique values (ek hi value ko ek baar hi store karta hai) ko store karne ke liye use hota hai. Yeh values kisi bhi order me store nahi hote hai aur Set me ek value sirf ek baar hi exist kar sakti hai. Set object JavaScript me pre-defined hai aur yeh iterable bhi hota hai, jisse ki aapko Set ke elements ke saath loop karne me help milti hai.


// ChatGPT Se liya hua Syntax ---> Set ka Istemal
// Set ka istemal jab aata hai jab aapko unique values ki collection ko manage karna hota hai, jaise ki:

// 1. Duplicate Values ko Avoid karna: Set automatically duplicate values ko store nahi karta hai.
// 2. Values ki Uniqueness Check karna: Set me ek value sirf ek baar hi ho sakti hai, isliye aap values ki uniqueness check karne ke liye Set ka istemal kar sakte hain.


//set method
// new set() --> is se set crete karte hai ?
//add() --> set me value  add karne ke liye use hota hai ?
//delete() --> set me se value delete karne ke liye use hota hai ?
//has() --> set me koi property hai ya nhi check kiarne ke liye use hota hai ?
//clear() --> set me se share element ko cleare karne ke liye use hota hai ?
//size() --> set me element ki lenght check karne ke liyen  use hota hai ?


// Sets (it is iterable hai)
// store data  karta hai sets
// sets also have its own methodand cannot be repeated
// No index-based access 
// Order is not guaranteed ---> 
// unique items only (no duplicates allowed)

// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items); // set me items naam ke array bhi store kar sakte hai.

// if(numbers.has(1)){  //if  else condition use sets pe 
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }

// for(let number of numbers){ //for of loop use 
//     console.log(number);
// }

const myArray = [1,2,4,4,5,6,5,6];  
const uniqueElements = new Set(myArray); //Array ko Sets me conveart karna ka tarika.
let length = 0;
for(let element of uniqueElements){
    length++;
}

console.log(length);
// ================================================ end harsit =================================================== //


let mySet1 = new Set([1,2,3, 'Tausif',{name:'qureshi'}, true]); //set constructor bolte hai is me string array object boolean value sub dal ,sakte hai;
console.log(typeof mySet1) 

for(let value of mySet1){ //set use for of loop ?
  console.log(value)
}

mySet1.forEach((item)=>{ //foreach se bhi iterad kar sakte hai;
  console.log(item)
})


//================================================set Thapa ka ========================================//
// In JavaScript, a Set is a collection of unique values. It is similar to an array, but the values in a Set are not ordered and cannot be repeated.


// Here is an example of how to create and use a Set in JavaScript:



// Create a new Set

const mySet = new Set();



// Add some values to the Set using add method

mySet.add(1);

mySet.add(2);

mySet.add("Tausif");

mySet.add(4);

mySet.add("Qureshi");



// Check the size of the Set using size property

console.log(mySet.size);



// Check if a value exists in the Set using has method

console.log(mySet.has(6));



// Remove a value from the Set using delete method

console.log(mySet.delete("Tausif"));



// Iterate over the values in the Set

for (let setValue of mySet) {

  console.log(setValue);

}



// You can also create a Set from an array by using the Set constructor:

const array = [1, 2, 3, 3, 4, 4, 5, 6, 6, 6];

const mySetArr = new Set(array);

for (let values of mySetArr) {

  console.log(values);

}

console.log(mySetArr.size);



// Note that the Set only keeps track of unique values, so if you pass an array with duplicate values to the Set constructor, it will only keep one copy of each value.

// use case

// to delete the duplicate from an array

const ourBatchNumbers = [1, 2, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7];

const myUniqueBatchNumber = [...new Set(ourBatchNumbers)];

console.log("🚀 ~ file: sets.js:44 ~ myUniqueBatchNumber", myUniqueBatchNumber);



const myName = "Tausif";
console.log(new Set(myName));