//Asynchronous Programming me ata hai ---> 

// AJAX ---> Is ka Full-Form hai  Asynchronous JavaScript And XML.? AJAX koi programming language nhi hai ye ek set of technologies hai Asynchronous JavaScript And XML ? AJAX me Page reloading kar re bina page update kar sakte hai mains koi button ko upadete karna hai us ka page refresh kar re bina upadate kar sate hai ? AJAX ka use kar ke ham fast and dynamic web page bana sakta hai ? Modern Website JSON ka use karti hai na ke XML---> is ka full-orm hoota hai Extensible Markup Language ? 


// console.log("AJAX Tutorial");

// const url = "https://jsonplaceholder.typicode.com/posts";

// async function myFun1(){
// try {
//     let fatchingAPI =  await fetch(url);
//     console.log(fatchingAPI);
//     let reponsingData = await fatchingAPI.json()
//     console.log(reponsingData);
// } catch (error) {
// console.error("Error fetching data: ", error);
// }


// }

// myFun1();

// async function myFun(){
//     let fatchingAPI =  await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(fatchingAPI)
//     let respons =  await fatchingAPI.json()
//     console.log(respons);
// }

// console.log(myFun());


async function myFun(){
    let fetchingAPI = await fetch("data2.json");
    // console.log(fetchingAPI);
    let respon = fetchingAPI.json();
    console.log(respon);
}
// myFun()

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((apiData)=>{
    console.log(apiData)
    return apiData.json()
}).then((accessData)=>{
console.log(accessData)
})


 





















// async function myFun() {
//   try {
//     let call = await fetch("data2.json");
//     let respon = await call.json();
//     console.log(respon);
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//   }
// }
// myFun()






































































































































































































