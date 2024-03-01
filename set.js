
//Sets ---> sets bhi kuch array ki tara hai but toda fark hai ? sets hai collection of unique values means unique value sets ke ander duplicate value nhi a sakti hai 
// Sets (it is iterable)
// store data  
// sets also have its own methodand cannot be repeated.s
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)
// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }
// for(let number of numbers){
//     console.log(number);
// }
// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray);
// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }

// console.log(length);




////////=================================================set Thap=====================
// In JavaScript, a Set is a collection of unique values. It is similar to an array, but the values in a Set are not ordered and cannot be repeated.


// Here is an example of how to create and use a Set in JavaScript:



// Create a new Set

const mySet = new Set();



// Add some values to the Set using add method

mySet.add(1);

mySet.add(2);

mySet.add("thapa");

mySet.add(4);

mySet.add("vinod");



// Check the size of the Set using size property

console.log(mySet.size);



// Check if a value exists in the Set using has method

console.log(mySet.has(6));



// Remove a value from the Set using delete method

console.log(mySet.delete("thapa"));



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



const myName = "vinod";

console.log(new Set(myName)