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


// let timing  = Date.now()
// console.log(timing.toFixed(2));



const loadingSpinner = document.querySelector(".loading-spinner");
const showLoading = () => {
  loadingSpinner.style.display = "block";
};

const hideLoading = () => {
  loadingSpinner.style.display = "none";
};
showLoading ();
fetch("https://jsonplaceholder.typicode.com/users")

.then((result)=>{
 
  if(!result.ok){
    throw new Error(`HTTP error! status: ${result.status}`);
  }
//   console.log(result);

  return result.json();
}).then((data)=>{
    hideLoading();
    // console.log(data)
}).catch((error)=>{
    console.log("API Create Error",error)
})




// async function myFunc(){
//    try {
//     const fetchResponse = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(fetchResponse);
//     const responseData = await fetchResponse.json();
//     console.log(responseData)
//     return responseData
//    } catch (error) {
//     console.log("Error fetching data:", error)
//    }
// }



  