//Asynchronous Programming me ata hai --->

//Promise ---> Javascript me promise ek special type ka object hota hai ? promise value producee karta hai after Asynchronous operation perform karne ke liye ya ek error producee karta hai jo hamne Asynchronous operation  kiya hai o successfully perform nhi hua hai ? promise jab bhi call hota hai ya resolve matlab success hoga ya reject hoga ? promise ka matlab hota hai code of execution take code Asynchronous me run kar sake ? Promise ek promise hai code ko run karne ka ?

// ChatGPT Se liya hua Syntax ---> Promises JavaScript me asynchronous programming ko handle karne ke liye use hoti hain. Promises ek bahut hi powerful aur flexible tool hain jo hume allow karta hai ki hum async operations ko efficiently manage kar sakein. Chaliye, main aapko pura detail ke sath promise ke bare me samjha deta hoon.

// ChatGPT Se liya hua Syntax ---> Promise Kya Hai ? Promise ek object hai jo future me kisi async operation ka completion ya failure ka result represent karta hai. Ye ek placeholder ki tarah kaam karta hai jahan hum ek async operation ko start karte hain aur future me uska result obtain karte hain.




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
  // document.getElementById("ajax").addEventListener("click",()=>{
  // console.log('Clicked');

  let myPromise = new Promise(function (myResolve, myReject) {
    let x = 4;

    if (x == 8) {
      // myResolve("OK");
      myResolve("Promise Success-Full Resolve");
    } else {
      myReject(new Error("I am a Error"));
      // myReject("I am a Error");
    }
  });
  //   console.log(typeof myPromise) //promise object aye ga return hoke ?

  myPromise //my promise bhi use ya mypromise nhi ki jaga .then direct bhi use kar sakte hai.
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
      // console.log(error);
      console.log( error.message) //hamne new Error me jo diye hoge ohi print hoga sirf  Error.messege use se ?
    });
}
// console.log('Error outter the code run ');



//============================================ Chai and Code  =================================================//
// promise use API call ? 

fetch("https://jsonplaceholder.typicode.com/posts")
.then((result)=>{
  if(!result.ok){
  throw new Error(`HTTP error! status: ${result.status}`);
  }
console.log(result);
return result.json();
})
.then((data)=>{
  console.log(data)
})
.catch((error)=>{
  console.log("API Create Error",error)
})


// dono same hi hai bus status code check karne ka tarika alag hai?
// fetch("https://jsonplaceholder.typicode.com/post")
//   .then((result) => {
//     // Check if the response is OK (status code 200-299)
//     if (result.status === 200) {
//       return result.json();
//     } else {
//       throw new Error(`HTTP error! status: ${result.status}`);
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("API Create Error:", error);
//   });


// ====================================== Promise chaining use ==============================================//
// Promise chaining ?

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ userName: "Tausif", userEmail: "tausifqureshi@gmail.com" });
//     } else {
//       reject(new Error("Promise creation error"));
//     }
//   }, 2000);
// });

// // Promise chaining
// promise
//   .then((user) => { // Promise chaining is ko hi bolte hai ?
//     console.log("UserName Return:", user);
//     return user; // Passing the user object to the next .then()
//     // pure user ko return means pura object retrun hoga fir next.then se ek ek value access kar sakte hai ?
//   })
//   .then((personUser) => { // Promise chaining is ko hi bolte hai ?
//     console.log("UserName Access:", personUser.userName);
//     return personUser.userEmail; // Passing userEmail to the next .then()
//   })
//   .then((userEmail) => { // Promise chaining is ko hi bolte hai ?
//     console.log("Access UserEmail:", userEmail);
//   })
//   .catch((error) => {
//     console.log(error.message); // This will log the error message if the promise is rejected
//   });


  //dono same hai but ham is ko only aysnc/await se handle kar re hai ?
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve({ userName: "Tausif", userEmail: "tausifqureshi@gmail.com" });
      } else {
        // reject(new Error("Promise creation error")); //ye code jab chalta hai jab hai catch me error.message karte hai tab.
        reject("Promise creation error");
      }
    }, 2000);
  });

  async function getData(){
    try {
      let response = await promise1;
      console.log(response);
      let nameUser = response.userName;
      let email = response.userEmail;
      console.log(email);
      console.log(nameUser);
    } catch (error) {
      console.log("error", error);
    }
  }
  getData();
  


// promise chainin same upper wala ye but is me async await use hua hai ?
async function fetchData() {
  try {
    let user = await new Promise((resolve, reject) => {
      setTimeout(() => {
        let error = false;
        if (!error) {
          resolve({ userName: "Tausif", userEmail: "tausifqureshi@gmail.com" });
        } else {
          reject(new Error("Promise creation error"));
        }
      }, 2000);
    });

    console.log("UserName Return:", user);

    console.log("UserName Access:", user.userName);

    console.log("Access UserEmail:", user.userEmail);
  } catch (error) {
    console.log(error.message);
  }
}
// fetchData();








































 




  