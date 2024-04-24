//Asynchronous Programming me ata hai ---> 

// AJAX ---> Is ka Full-Form hai  Asynchronous JavaScript And XML.? AJAX  Asynchronous hota hai ?  AJAX koi programming language nhi hai ye ek set of technologies hai Asynchronous JavaScript And XML ? AJAX me Page reloading kar re bina page update kar sakte hai mains koi button ko upadete karna hai us ka page refresh kar re bina upadate kar sate hai ? AJAX ka use kar ke ham fast and dynamic web page bana sakta hai ? Modern Website JSON ka use karti hai na ke XML---> is ka full-orm hoota hai Extensible Markup Language ? Javascript ka use kar ke HTTP-Request server ko karne ke liye new XMLHttpRequest(); use hota hai ? 


// HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)


fetch('https://fakestoreapi.com/users')
.then((getData)=>{
    // console.log(getData);

})


let AccessButton = document.getElementById("ajax");
AccessButton.addEventListener('click',ajaxFunction);

function ajaxFunction (){
// console.log('Clicked');
let xhr = new XMLHttpRequest(); //request send karne ke liye server ko ?
console.log(xhr);







xhr.open('GET','https://fakestoreapi.com/users',true);
xhr.send();
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





























































































































































































