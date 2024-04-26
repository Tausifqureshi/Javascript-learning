//Asynchronous Programming me ata hai ---> 

// AJAX ---> Is ka Full-Form hai  Asynchronous JavaScript And XML.? AJAX koi programming language nhi hai ye ek set of technologies hai Asynchronous JavaScript And XML ? AJAX me Page reloading kar re bina page update kar sakte hai mains koi button ko upadete karna hai us ka page refresh kar re bina upadate kar sate hai ? AJAX ka use kar ke ham fast and dynamic web page bana sakta hai ? Modern Website JSON ka use karti hai na ke XML---> is ka full-orm hoota hai Extensible Markup Language ? 


// console.log("AJAX Tutorial");

const url = "https://jsonplaceholder.typicode.com/posts";

async function myFun1(){
try {
    let fatchingAPI =  await fetch(url);
    console.log(fatchingAPI);
    let jsonData = await fatchingAPI.json(); //json data me file aye gi is tara se ?
    console.log(jsonData);
    // let textData = await fatchingAPI.text();  // fetchAPI me text File me bhi aisa data le sakte hai but not good peractic this text() method json me hi data lene chachiye ?
    // console.log(textData);
} catch (error) {
console.error("Error fetching data: ", error);
}


}

myFun1();




 





















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






































































































































































































