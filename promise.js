//Asynchronous Programming me ata hai --->

//Promise ---> promise jab bhi call hota hai ya resolve matlab success hoga ya reject hoga ? promise ka matlab hota hai of code execution take code Asynchronous me run kar sake ? Promise ek promise hai code ko run karne ka ? 

// Promise ko handle karne ke liye new promise() method ka use kiya jata hai ?

//  promise two property ko support karta hai state and reuslt ?
// myPromise.state	        myPromise.result
// "pending"	            undefined
// "fulfilled"	            a result value
// "rejected"	            an error object


// promise property ?
// Pending ?
// When a  Promise object is "pending" (working), the result is undefined. ?

// Fulfilled ?
// When a Promise object is "fulfilled", the result is a value. ?

// Rejected ?
// When a Promise object is "rejected", the result is an error object.




let myPromise = new Promise(function(myResolve, myReject) {
    // console.log(myPromise)
    let x = 8;
  
  // some code (try to change x to 5)
  
    if (x == 8) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
//   console.log(typeof myPromise) //promise bhi ek object hai ?
  myPromise.then(
    function(value) {
    console.log(value);
    },
    function(error) {
    console.log(error);
    }
  );
  




















































































































































































































