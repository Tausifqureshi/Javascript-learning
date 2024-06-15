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

// const users = [
//   { userId: 1, firstName: "Tausif", gender: "Male" },
//   { userId: 2, firstName: "Qureshi", gender: "simple" },
//   { userId: 3, firstName: "Iqbal", gender: "hello" }
// ];

// // const [{,{firstName},, userId,gender}] = users 
// const [, { firstName }, , { userId, gender }] = users;
// console.log(firstName) //
// console.log(userId) //first wali user id print hogi is se?
// console.log(gender)

// const users = [
//   { userId: 1, firstName: "Tausif", gender: "Male" },
//   { userId: 2, firstName: "Qureshi", gender: "simple" },
//   { userId: 3, firstName: "Iqbal", gender: "hello" }
// ];
// const [{firstName}, , {userId: secondUserId},,{secondGender}] = users;
// console.log(firstName);         // Output: "Tausif"
// console.log(secondUserId);      // Output: 2
// console.log(secondGender);   // Output: "hello"

// const [,,{ firstName }] = users;
// const[{ userId, gender }] = users;
 
// console.log(firstName); // Output: "Qureshi"
// console.log(userId);    // Output: 2
// console.log(gender);    // Output: "simple"


// const userid2FirstName = users.find(user => user.userId === 2).firstName;
// if (userid2FirstName) {
//   console.log(`User with userId 2 has firstName: ${userid2FirstName}`)
// } else {
//   console.log("User with userId 2 not found");
// }




















