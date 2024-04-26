//Asynchronous Programming me ata hai --->

// AJAX ---> Is ka Full-Form hai  Asynchronous JavaScript And XML.? AJAX  Asynchronous hota hai ?  AJAX koi programming language nhi hai ye ek set of technologies hai Asynchronous JavaScript And XML ? AJAX me Page reloading kar re bina page update kar sakte hai mains koi button ko upadete karna hai us ka page refresh kar re bina upadate kar sate hai ? AJAX ka use kar ke ham fast and dynamic web page bana sakta hai ? Modern Website JSON ka use karti hai na ke XML---> is ka full-orm hoota hai Extensible Markup Language ? Javascript ka use kar ke HTTP-Request server ko karne ke liye new XMLHttpRequest(); use hota hai ?

// HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

//Status Code ?
// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499) Server not respos technical issu ?
//404 ---> Not Found -> File ko request karne me server ko file nhi milti tab ye error ata hai ?
// Server error responses (500 – 599)

// Readystate Code ?

// Value	   State	                Description

// 0	     UNSENT	                   Client has been created. open() not called yet.
// 1	     OPENED	                   open() has been called.
// 2	     HEADERS_RECEIVED	       send() has been called, and headers and status are available.
// 3	     LOADING	               Downloading; responseText holds partial data.
// 4	     DONE	                   The operation is complete.

let url = "https://jsonplaceholder.typicode.com/users";

let AccessButton = document.getElementById("ajax");
AccessButton.addEventListener("click", ajaxFunction);

let postObj = {  //create post request ?
    id: 1, 
    title: "What is AJAX", 
    body: "AJAX stands for Asynchronous JavaScript..."
}
function ajaxFunction() {
  // console.log('Clicked');
  let xhr = new XMLHttpRequest(); //request send karne ke liye server ko ?
  console.log(xhr);
xhr.responseType = "json"; //Kis type me data hona JSON.XML,ya String me xhr.responseType ='json' string me aye ga data ?
  xhr.onload = () => {
console.log(xhr.response); //json me data mile ga respons se q ke hamne xhr.responseType json kiya hua hai ?

// console.log(JSON.parse(xhr.response)); //json file me data aisa bhi le sakte hai ?

if (xhr.status === 200) { //aisa condistion bhi laga sakte hai ham status ke liye koi bhi statu code use kar sakte hai?
console.log('Successful responses');
} 
// else if (xhr.status === 404) {
// console.log('Page Not Found');    
// }
// console.log(xhr.status)//Status Code kon sa status error code aye ga number only ?
  };

xhr.onerror = () =>{ //koi error aye gi yaha se pata chale ga ?
 console.log('Error')

}


  xhr.open("GET", url, true); //serevr se data access karne ya dene ke liye use hota hai open() method is me three parameter hote hai first kon sa method use get,pots second parametar hota hai URL ya file name and three parametar hota hai true and falsa true use tu Asynchronous me work hoga and false use tu synchronous me work hoga ?

  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8'); //jab bhi post request marte hai setRequestHeader set karna hi padta hai ?

//   xhr.send(); // Request ko server pe send karne ke liye ye send() Method use karte hai ?
  xhr.send(JSON.stringify(postObj)); //post request ke liye send method aisa use  hoga ? jab bhiu ham server pe data send kar te hai JSON.stringify() method me karte hai ? 


}




// ========================================= Ftach API =================================================//
// Fatch API USE AJAX Call ?

// Fatch API ----> fatch API ECMAScript6 (ES6) featur me aya hai ? Fatch API ka work hota haim server se deta lena ya dene ke liye use hota hai ? Fatch API Promise return karta hai ?

// fetch("data2.json")
// fetch('https://fakestoreapi.com/products')
// .then((apiData)=>{
//     console.log(apiData);
//     return apiData.json();
// }).then((accessData)=>{
//     console.log(accessData)
// }).catch((error)=>{ //Promise me kuch error tu ye catch wala code chale ga ?
// console.log("Error Occurs",error);
// })
