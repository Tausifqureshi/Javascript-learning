//Array pe jitne use loop hai loop wale file me hai sub


//Array---> javacsripe me array single variable hota hai jis se ham alag alag element ya value store karne ke liye use karte hai ? Array reference type hai ? JS me jitne refeance type hote hai us se object bolte hai Array ek object hai ?Array hai Collection off element ? Array order collection off items hai menas indexing Access karna ? Array meutabal hota hai means array me indexing se add to o original array ko change kar dega ? 

// ChatGPT Se liya hua Syntax --->  JavaScript me arrays ek aise data structure hain jisme hum multiple values ko ek hi variable me store kar sakte hain. Arrays ko hum ek ordered list ke roop me bhi dekh sakte hain. Chaliye, hum arrays ke bare me detail me samajhte hain aur kuch examples dekhte hain.



 
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

// let array2 = array1.slice(0); //first tarika clone kare ka sile method use 0 index means array1 ke item array2 me add hoge but dono array alag hoge is bolte hai clone ?

// let array2 = [].concat(array1);  //dusra tarika add karne ka ?

// let array2 = [...array1]; // tisra tarika clone karne ka spread operator use ?

// array1.push("item3") //array one me add hora hai only dusre me add nhi hoga ?

// console.log(array1===array2) //array alag hai hai check kar re hai ek me adda tu dusre me adda nhi hoga
// console.log(array1)
// console.log(array2)


// ========================================= Array-Constructor ===========================================//
// let arrayConstructor = new Array('Tausif','Banana','Apple','Mango');
// console.log(arrayConstructor);
// console.log(Array.isArray(arrayConstructor)); //Array checking array hai ya nhi ? 
// arrayConstructor[4] = 'Kiwi';//Array Constructor me value array ?
// console.log(arrayConstructor); 


// ================================== Multidimesinal Array===========================================//
// Multidimesinal Array ---> is ka matlab hota hai Array ke ander array ? Multidimesinal Array me index value ki jaga array deta hai ? 
 
// let student = [
//     ['name',24,'Front-end'],
//     ['Qureshi',25,'Software'],
//     ['Tausif',23,'Web-delopment']
// ]

// console.log(student[0][1]); //access student ki zero index me kon sa arra name ki first index me kon si value aise lete hai Multidimesinal Array me ?







// <------------------------------>Array Destructuring<-------------------------------->
// let cars = ['Volvo','Tata','Marcedes','Audi']

// const[model1, ,model2,model3,model4]=cars; //duble ,, se marecedes module2 me jaye ga?
// const[model1,...model2]=cars;  //speard oparetor use tata se audi tak model2 me jaye ge? 
// console.log(model1)
// console.log(model2)
// console.log(model3)
// console.log(model4)



// array destructuring 
// const myArray = ["value1", "value2", "value3","value4"];
// let myvar1 = myArray[0]; //is tara se bhi kar sakte hau destructuring array ko 'Value1'?
// let myvar2 = myArray[1]; //value2 aye gi is me
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// let  myNewArray = myArray.slice(2,3); //value3 value4 tak jaye gi is me q ke slice method use hora hai ? slice method use is methos use hame value kaha se kaha tak hona agar end postion nhi dete hai tu dono value ko hi print kar deta hai ? end postion deta hai tu o only ek value first hi print karta hai "Value3" hi aye gi only slice method ka ye rool hai ?
// console.log(myNewArray)

// let [myvar1, myvar2, ...myNewArray] = myArray; //myvar1 me value1 jaye gi mayvar2 me value2 aye gi or myNewArray me jaye gi "value3","value4" sperad oparetor use hore hai?
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// console.log(myNewArray);




// =========== ============================Array ka prototype cheking =======================================//
// prototype ka use kar ke Constructor me propertry and method add kar sakte hai ? Array ka method check karne kerne ke liye use hotan hai ? prototype ka use kar ke onlye object me hi property and method change add kar sakte hai ? javascript ke inbilt data-type ko prototypes se nhi change kar sakte hai Example jitne niche diye huye hai Data-Types un sub ka bhi prototype nhi change kar sakte hai ?

// Numbers
// Strings
// Arrays
// Dates
// Booleans
// Functio9n
// Objects

// console.log((Array.prototype)); //Array ka prototype check ---> means jitne Array pe method use karte hai ohi aye only ? na ke is ka use kar ke object ki tara property and method add nhi kar sakte hai ?

// console.log(array1.__proto__) //is tara bhi prototype check kar sakte hai ? means jitne Array pe method use karte hai ohi aye ge ?


// console.log(array1);

Array.prototype.sum = function(){ //khud ka method add kar re hai array ke prototype me jo array ke in built method hai foreach map jo bhi hai lekin ham is me apna banya hua method add kar rehe hai jo kisi bhi array ke sath use karna ho kar sakte hai apni marzi hai ?

return this .reduce((accumulator, currentValue)=>accumulator + currentValue ,0);//this array 1 ko hi refer kar ra hai ?
}

let array1 = [2,3,4];
console.log(array1.sum()); //jo sum naam ka khud ka method banye hai us ko array1 ke sath use kar re hai jo sub number ka sum kar ke dege plus means ?

// console.log(array1.__proto__); // sum method add hua ya nhi cheking ?


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








