// number-object example
// let number = new Number(100);
// console.log(typeof number.toPrecision())

// let myNum = 100000000000;
// console.log(myNum.toLocaleString("en-IN")) //india me defualvalue le sakte.

// date and time.
// let newDate = new Date();
// console.log( newDate.toString());
// console.log(newDate.toLocaleString());

// console.log(newDate.toDateString());
// console.log(newDate.toLocaleDateString());

// console.log(newDate.toTimeString());
// console.log(newDate.toLocaleTimeString());

// AJAX Call.
// const loadingSpinner = document.querySelector(".loading-spinner");
// const showLoading = () => {
//   loadingSpinner.style.display = "block";
// };

// const hideLoading = () => {
//   loadingSpinner.style.display = "none";
// };

// let url = "https://jsonplaceholder.typicode.com/users";

// let xhr = new XMLHttpRequest();
// // console.log(xhr)
// xhr.responseType = "json";
// xhr.onreadystatechange = function(){

//   if(xhr.readyState === 4){
//     hideLoading()
//     console.log("DONE 4 ")
//   console.log(xhr.response);
//    if (xhr.status >= 200 && xhr.status < 300) {
//     // Parse JSON data from the response
//     // let data = JSON.parse(xhr.responseText);
//     // console.log(data)
//   } else {
//     // Handle errors, if any
//     console.log('Error:', xhr.status);
//   }
// }
// }
// xhr.open("GET", url, true)
// showLoading ()
// xhr.send();  


// let timing  = Date.now()
// console.log(timing.toFixed(2));






// const users= [          

//     {userId: 1, firstName: "Tausif", gender:"Male"},
//     {userId: 2, firstName: "Qureshi", gender:"simple" },
//     {userId: 3, firstName: "Iqbal", gender:"hello"}
//   ]

//   const [{firstName},{firstName},{firstName}] = users;
// const [{ firstName: firstName1 }, { firstName: firstName2 }, { firstName: firstName3 }] = users;

//   const [,,{userId ,firstName,gender}] = users; //is se hora userid1 se name same us se id or userid3 ka gender is ko bolte hai nested destrcturing.

//   console.log(firstName1);        
//   console.log(firstName2);        
//   console.log(firstName3);  

//   console.log(userId);
//   console.log(firstName);         
//   console.log(gender);   
  


function firstCharcter(string){
    return string[0]
  }
  
  console.log(firstCharcter("Tausif"));
  

