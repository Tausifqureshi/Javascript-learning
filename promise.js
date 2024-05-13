//Asynchronous Programming me ata hai --->

//Promise ---> Javascript me promise bhi object hoti hai ? promise jab bhi call hota hai ya resolve matlab success hoga ya reject hoga ? promise ka matlab hota hai of code execution take code Asynchronous me run kar sake ? Promise ek promise hai code ko run karne ka ? 

// Promise ko handle karne ke liye new promise() method ka use kiya jata hai ?

//  promise two property ko support karta hai state and reuslt ?
// myPromise.state	        myPromise.result
// "pending"	              undefined
// "fulfilled"	            a result value
// "rejected"	              an error object


// promise property ?
// Pending ?
// When a  Promise object is "pending" (working), the result is undefined. ?

// Fulfilled ?
// When a Promise object is "fulfilled", the result is a value. ?

// Rejected ?
// When a Promise object is "rejected", the result is an error object.

let AccessButton = document.getElementById("ajax");
AccessButton.addEventListener("click", myPromise);

function myPromise(){
// 
// document.getElementById("ajax").addEventListener("click",()=>{
// console.log('Clicked');

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 8;
    
    if (x == 8) {
      // myResolve("OK");
      myResolve("Promise Success-Full Resolve");
    } else {
      myReject(new Error("I am a Error"));
    }
  });
//   console.log(typeof myPromise) //promise object aye ga return hoke ?

  myPromise.then(
    function(value) {
    console.log(value);
    },
    // function(error) { //ye line commit tab jake catch wala code execute hoga ?
    // console.log(error);
    // }
  )
  .catch (function(error){
    // console.log('Caught by catch:', error);
    console.log( error);
  console.log( error.message) //hamne Error Message me tu diye hoge ohi print hoga sirf  Error.messege se ?

  })
}
console.log('Error outter the code run ');



//================================  Tahapa technical =================================================//
// 
 
let promiseObject = new Promise((resolve, reject) => {
   setTimeout(() => {
    //  let arr = [];  //is tara se promise reject hoga  hai  is Exmple me ?
    let arr = [1,2,3,4,5,6,];
    // resolve(arr)

    // reject( new Error("Error Ocurd"));
    reject("Error Ocurd");


   },2000);

})

promiseObject.then((result)=>{
  console.log(result);
  // console.log("Promise resolved:", result);
}).catch((error)=>[
  console.log("Promise rejected:",error.message),
]) 
















// let firsNtame = 'Hello Tausif Qureshi';
// console.log(firsNtame);
// let result = firsNtame.split(":"); //ek ek word ko tod ke array ke form me dega ye split ?
// console.log(result);
// let arry = result.join("");
// console.log(arry)
// console.log(typeof arry)






























































































































































































