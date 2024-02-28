//Array pe jitne use loop hai loop wale file me hai sub

//Array--->Array reference type hai?JS me jitne refeance type hote hai us se object bolte hai Array ek object hai?Array hai Collection off element?Array order collection off items hai menas indexing Access karna ?Array meutabal hota hai means array me indexing se add to o original array ko change kar dega ?
 
//Array creating
// const numb = [1,2,3,4,]//Number Array
// const mixed = [1,2,3, "string",null, nudefiend]//Array me ys sub bhi store kar sakte hai

// let fruits = ["mango", "banana","apple"] //string Array
// console.log(fruits)
// console.log(fruits[1]) //kon se index ka item hona 
// fruits [1] = "orange" // first index pe add hooga or ye original array ko change bhi kare ga?
// console.log(fruits)
// console.log(typeof fruits) //type cheking?
// console.log(Array.isArray(fruits)) // Array cheking method Ture and false me answer aye ga?
// console.log(fruits.length) // Array ki length cheking method?



//===================================Array ko clone karne ke tarike===================================//?
// let array1 = ["item1","item2"]

// let array2 = array1.slice(0); //first tarika clone kare ka sile method use 0 index means array1 ke item array2 me add hoge but dono array alag hoge is bolte hai clone 
// let array2 = [].concat(array1);  //dusra tarika add karne ka ?
// let array2 = [...array1]; // tisra tarika clone karne ka spread operator use
// array1.push("item3") //array one me add hora hai only dusre me add nhi hoga

// console.log(array1===array2) //array alag hai hai check kar re hai ek me adda tu dusre me adda nhi hoga
// console.log(array1)
// console.log(array2)



// <------------------------------>Array Destructuring<-------------------------------->
// let cars = ['Volvo','Tata','Marcedes','Audi']

// const[model1, ,model2,model3,model4]=cars; //duble ,, se marecedes module2 me jaye ga?
// const[model1,...model2]=cars;  //speard oparetor use tata se audi tak model2 me jaye ge? 
// console.log(model1)
// console.log(model2)
// console.log(model3)
// console.log(model4)



// array destructuring 
const myArray = ["value1", "value2", "value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
let  myNewArray = myArray.slice(2);
console.log(myNewArray)

// let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);








// <------------------------------>practical<-------------------------------->
//Clone Array Array1 ke items sub or alag se item add karna ka tarika practical?
// let array1 = ["item1","item2"]
// let array2 = array1.slice(0).concat(["item3","item4","item5"]) //aisa bhi kar sakte hai 
// console.log(array2)

// let array2 = [...array1,"item3","item4","item5"] //aisa bhi kar sakte hai dusra tarika ye
// console.log(array2)





// loop using array?
// const fruits =["apple","banana","mango","orange","kiwi"]

// // for(let i =0; i<fruits.length; i++){
// //     console.log(fruits[i])
// // }

// // for(let b of fruits){
// //     console.log(b)
// // }

// // for(let i in fruits){
// //     console.log(fruits[i])
// // }

// // let i =0;
// // while(i<fruits.length){
// //     console.log(fruits[i].toUpperCase())
// //     i++
// // }








