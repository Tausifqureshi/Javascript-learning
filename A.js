// const arr = ["name", "location", "employees"]

// arr.forEach((val)=>{
//     console.log(val)
// })

 
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
// getData();



async function fetchData(){
  try {
    let user = await new Promise((resolve, reject) => {
      setTimeout(()=>{
        let error = false;
        if (!error) {
          resolve({userName: "Tausif", userEmail: "tausifqureshi@gmail.com" },"Promise Reslove")
        }else(
          reject("Promise creation error")
        )
      },2000)
    });

    console.log("UserName Return:", user);

    console.log("UserName Access:", user.userName);

    console.log("Access UserEmail:", user.userEmail);
  } catch (error) {
    console.log("Error aye ga", error)
  }
};


// fetchData()

// let pi = Math.PI
// console.log(pi)

// let num  = Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(num)




const users = [
  { userId: 1, firstName: "Tausif", gender: "Male" },
  { userId: 2, firstName: "Qureshi", gender: "simple" },
  { userId: 3, firstName: "Iqbal", gender: "hello" }
];
// const [,{firstName, userId: secondUserId, gender: secondGender},{}] = users;
// console.log(firstName);
// console.log(secondUserId);
// console.log(secondGender)


// const userid2FirstName = users.find(user => user.userId === 2).firstName;
// if (userid2FirstName) {
//   console.log(`User with userId 2 has firstName: ${userid2FirstName}`)
// } else {
//   console.log("User with userId 2 not found");
// }

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


const loadingSpinner = document.querySelector(".loading-spinner");

const showLoading = () => {
  loadingSpinner.style.display = "block";
};

const hideLoading = () => {
  loadingSpinner.style.display = "none";
};
let url = "https://jsonplaceholder.typicode.com/users";

let xhr = new XMLHttpRequest();
// console.log(xhr)
xhr.responseType = "json"; 
xhr.onreadystatechange = function(){

  if(xhr.readyState === 4){
    hideLoading()
    console.log("DONE 4 ")
  console.log(xhr.response);
   if (xhr.status >= 200 && xhr.status < 300) {
    // Parse JSON data from the response
    // let data = JSON.parse(xhr.responseText);
    // console.log(data)
  } else {
    // Handle errors, if any
    console.log('Error:', xhr.status);
  }
}
}
xhr.open("GET", url, true)
showLoading ()
xhr.send()



function myFun() {
 var firstName = "Tausif"; //Local variable
  console.log(firstName); // local varoible access is ko only is function me hi access karna hoga.
  // console.log(firstName1); //global varibel access function me.
}


// myFun();
// console.log(firstName); // local varoible access is ko only is function me hi access karna hoga.


if (true) { 
    var firstName = 'Tausif';
    // console.log(firstName)
  }
  console.log(firstName)



  










 

