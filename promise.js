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

console.log('Error outter the code run ');
console.log('Error outter the code run ');


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
  })
}



console.log('Error outter the code run ');








let promiseObj =  new Promise((resolve, reject) => {
  let b = 5

  if (b === 8) {
    resolve("Promise reslove");
    
  }else{
    reject (new Error('Promise is reject'));
  }
})

promiseObj.then((reslove)=>{
 console.log(reslove)
})
// ,function(error){
// console.log(error,"Error Problem");
// }
.catch((error)=>{
    // console.log('Error Ocurd', error.message)
    console.log( error.message) //hamne Error Message me tu diye hoge ohi print hoga sirf  Error.messege se ?
})













// let firsNtame = 'Hello Tausif Qureshi';
// console.log(firsNtame);
// let result = firsNtame.split(":"); //ek ek word ko tod ke array ke form me dega ye split ?
// console.log(result);
// let arry = result.join("");
// console.log(arry)
// console.log(typeof arry)






























































































































































































