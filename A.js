// number-object example
// let number = new Number(100);
// console.log(typeof number.toPrecision())

// let myNum = 100000000000;
// console.log(myNum.toLocaleString("en-IN")) //india me defualvalue lw sakte.


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


// let myName = "\nTausif \nQuraishi";
// console.log(myName);

let heading = document.getElementById("heading");
// console.log(heading.innerText);
// heading.innerText = heading.innerText +  "Tausif Quraishi"


let fru = document.querySelectorAll(".box");
// console.log(fru[0])

// let index = 1;
// for (div of fru) {
//     // console.log(div.innerText);
//  div.innerText = `Exchange Value ${index}`
// index++;

// }





