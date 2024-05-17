//Asynchronous Programming me ata hai --->

//Promise ---> Javascript me promise ek special type ka object hota hai ? promise value producee karta hai after Asynchronous operation perform karne ke liye ya ek error producee karta hai jo hamne Asynchronous operation  kiya hai o successfully perform nhi hua hai ? promise jab bhi call hota hai ya resolve matlab success hoga ya reject hoga ? promise ka matlab hota hai code of execution take code Asynchronous me run kar sake ? Promise ek promise hai code ko run karne ka ?

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

function myPromise() {
  //
  // document.getElementById("ajax").addEventListener("click",()=>{
  // console.log('Clicked');

  let myPromise = new Promise(function (myResolve, myReject) {
    let x = 4;

    if (x == 8) {
      // myResolve("OK");
      myResolve("Promise Success-Full Resolve");
    } else {
      // myReject(new Error("I am a Error"));
      myReject("I am a Error");
    }
  });
  //   console.log(typeof myPromise) //promise object aye ga return hoke ?

  myPromise
    .then(
      function (value) {
        console.log(value);
      }
      // function(error) { //ye line commit tab jake catch wala code execute hoga ?
      // console.log(error);
      // }
    )
    .catch(function (error) {
      // console.log('Caught by catch:', error);
      console.log(error);
      // console.log( error.message) //hamne Error Message me tu diye hoge ohi print hoga sirf  Error.messege se ?
    });
}
// console.log('Error outter the code run ');



//================================  Tahapa technical =================================================//
//

let promiseObject = new Promise((resolve, reject) => {
  //  setTimeout(() => {
  //  let arr = [];  //is tara se promise reject hoga  hai  is Exmple me ?

  let arr = [1, 2, 3, 4, 5, 6]; //is tara se promise reject hoga  hai  is Exmple me ?
  if (arr.length >= 7) {
    //check kar re hai arr ki lenght 0 se badi hona chaciye greater than use lef value badi hoan hamesa is liye ye condison reslove hogi true hai condison ?
    resolve(arr); // Resolve with the array if it has elements
  } else {
    reject(new Error("Error Occurred")); // Reject with an error if the array is empty
  }

  //  },2000);
});
// promiseObject
//   .then((result) => {
//     // console.log(result);
//     console.log("Promise resolved:", result);
//     // (error)=>{
//     //     console.log(error,"Promise rejected");

//     // }
//   })
//   .catch((error) => {
//     console.log("Promise rejected:", error.message);
//   });



let promise = new Promise((resolve, reject) => {
  
});
console.log(promise)































































 




  