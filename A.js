
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
// console.log(myName)



function myFun(){   //higyer order function

    function hello (){
    // console.log('hello world')
      return 'hello world' //string retrun
    }
    return hello;   //function return
 }
   let ans = myFun();
//    console.log(ans)  //pura function retrun hoga aisa karne se ?
   console.log(ans())  //Function retrun use karne se hello world aise hi print go jaye ga lin number 212 se ?




   function outerFunction() {
    let outerVariable = 'I am outside!';
    
    function innerFunction() {
        return outerVariable; // innerFunction can access outerVariable
    }
    
    return innerFunction;
}

const closureFunction = outerFunction();
console.log(closureFunction()); // Output: I am outside!




function first(name){   //higyer order function
    return name
}
function second(CallBack){ // ye jo hum pass kiye parameter me jab ham argument dege tu function ka naam dege
  let result=  CallBack("tausif")// o function milra us se call bhi karna hota hai?    
//   console.log(result)
}

// second(first,"qureshi");//pura function pass argument me?



function greet(name) {
    return('Hello ' + name);
}

function processUserInput(callback) {
    var name1 = prompt('Please enter your name.');
    let save = callback(name1);
    console.log(save)
}

processUserInput(greet);

















