//Asynchronous Programming me ata hai --->

//Promise ---> promise jab bhi call hota hai ya resolve matlab success hoga ya reject hoga ? promise ka matlab hota hai of code execution take code Asynchronous me run kar sake ? Promise ek promise hai code ko run karne ka ? 

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
console.log('Clicked');

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 7;
    
    if (x == 8) {
      myResolve("OK");
    } else {
      myReject(new Error("I am a Error"));
    }
  });
//   console.log(typeof myPromise) //promise bhi ek object hai ?
  myPromise.then(
    function(value) {
    console.log(value);
    },
    // function(error) { //ye line commit tab jake catch wala code execute hoga ?
    // console.log(error);
    // }
  )
  .catch (function(error){
    console.log('Caught by catch:', error);
  })
}
console.log('Tasif')







































































































































































































