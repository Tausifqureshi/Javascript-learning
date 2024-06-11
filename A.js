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


fetchData()




















































