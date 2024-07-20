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



// const fruits = new Map(); //Empty Maps Creates;
// console.log(fruits)

// fruits.set("apples", 500);   //Value add maps me ?

// let key1 ='Tauisf', key2 = {name: "Qureshi"} ,key3 = function(){}, key4 = {},key5 = ['age', 24]; //Maps constructor ye is me kuch bhi key value use kar sakte hai?
// fruits.set(key1, 'String Hai');  //Value add maps me  Aise bhi kar sakte hai ?
// fruits.set(key2, 'Object Hai');
// fruits.set(key3, 'Function Hai');
// fruits.set(key4, 'Empty Object Hai');
// fruits.set(key5, 'Array Add');
// // console.log(fruits);

// // =========Gets Method se value lere hai kon si key ki value hona get method use =======?
// let value = fruits.get(key4); 
// console.log(value);

