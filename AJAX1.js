//Asynchronous Programming me ata hai ---> 


// AJAX ---> AJAX Ki dusri file hai ye onlye AJAX me use hone wali property and method is me aye ge na ke koi exmple jitni property and method hai is me aye ge ?
console.log(" AJAX Property And Method Get! ");


// let url = "https://jsonplaceholder.typicode.com/users";

// let AccessButton = document.getElementById("ajax"); //dono AJAX File me same id ka button use hora hai ?
// AccessButton.addEventListener("click", ajaxFunction);

// function ajaxFunction(){
// let xhr =  new XMLHttpRequest();
// console.log(xhr);
// xhr.responseType = "json";//Kis type me data hona JSON,XML,ya TextFile, me hona ? hamne xhr.responseType ='json' set kiya hai is liye ye formate object me data hai ? is xhr.responseType = "json" commit tu data sting me mile ga ?

// // console.log("ReadState Zero ", xhr.readyState);
// if(xhr.readyState === 0 ){ //aisa condition bhi laga sakte hai ?
// console.log("Open method se first call 0")
// }

// xhr.open("GET",url,true); 

// // console.log("ReadState First ", xhr.readyState);
// if(xhr.readyState === 1 ){ //aisa condition bhi laga sakte hai ?
//     console.log("Open method call 1 ")
// }

// xhr.onreadystatechange =()=> {//Readystate Code 1,2,3,4 ye code? onreadystatechange ki jaga onload bhi use hota hai ?

// // console.log("ReadState Second", xhr.readyState);
// if(xhr.readyState === 2 ){ //aisa condition bhi laga sakte hai ?
//     console.log("Respone Header 2 ")
// }

// if(xhr.readyState === 3 ){ //aisa condition bhi laga sakte hai ?
//     console.log("Looding 3 ")
// }

// if(xhr.readyState === 4 ){ //aisa condition bhi laga sakte hai ?
//     console.log("DONE 4 ")
// }

// if(xhr.readyState === XMLHttpRequest.DONE){ //XMLHttpRequest.DONE is ki jaga number 4 bhi use kar sakte hai ?

// if(xhr.status === 200){ //Status code check ?
// //console.log(xhr);

// console.log("Successfully Execution Code",xhr.response); //json me data mile ga respons se q ke hamne xhr.responseType json kiya hua hai ?

// }else{
// console.log("Response the Problem"); //Error ke liye ye code ?
// }

//     }

// }

//xhr.open("GET",url,true); //serevr se data access karne ya dene ke liye use hota hai open() method is me three parameter hote hai first kon sa method use get,pots second parametar hota hai URL ya file name and three parametar hota hai true and falsa true use tu Asynchronous me work hoga and false use tu synchronous me work hoga ?

// xhr.send(); //Request ko server pe send karne ke liye ye send() Method use karte hai ?
// }




//============================================= Eaxmple 2 ============================================= //
//AJAX Use method only ?

// onLoad () ---> ye function jab call hota hai XMLHttpRequest() transaction completes ho jata hai ?
// onprogress () ---> ye method work karta hai request success hone se phele call hom jata hai ye method ?
// onerror () ---> Error ke liye use hota hai ye method ?
// onloadstart () ---> data transfer hone se phele hi ye method call ho jata hai ?
// onabort () ---> 
// ontimeout () ---> jab ham timeout attribute use karte hai tab hi ye method work karta hai ?
// onloadend () ---> jab hamra tranfer data end ho  jata hai tab ye methiod call hota hai ?

// let url = "https://jsonplaceholder.typicode.com/users";

// let AccessButton = document.getElementById("ajax"); //dono AJAX File me same id ka button use hora hai ?
// AccessButton.addEventListener("click", ajaxFunction);

// function ajaxFunction(){
// let xhr =  new XMLHttpRequest();

// // console.log(xhr);

// xhr.responseType = "json";//Kis type me data hona JSON,XML,ya TextFile, me hona ? hamne xhr.responseType ='json' set kiya hai is liye ye formate object me data hai ? is xhr.responseType = "json" commit tu data sting me mile ga ?


// xhr.open("GET",url,true); 

// // xhr.timeout = 2;
// // xhr.timeout = 2000;


// xhr.onload =()=> {//Readystate Code 1,2,3,4 ye code? onreadystatechange ki jaga onload bhi use hota hai ?
//  console.log(xhr);

// if(xhr.status === 200){ //Status code check ?
// //console.log(xhr);

// console.log("Successfully Execution Code",xhr.response); //json me data mile ga respons se q ke hamne xhr.responseType json kiya hua hai ?

// }else{
// console.log("Response the Problem"); //Error ke liye ye code ?
// }

// }


// xhr.onprogress = (e) =>{
// //ye method 2 peoperty leta hai ?    
// console.log('progress Load',e.loaded); // kitna data load hota hai o bata hai ye method ?
// console.log('progress Total',e.total); // kitna data hai file me wood o bata hay ye method ?
// }

// xhr.onerror = () =>{
// console.log("OnError-Method",)
// }

// xhr.onloadstart = () =>{
// console.log("onLoadStart-Method")
// }

// xhr.onloadend = () =>{
// console.log("onLoadEnd-Method")
// }

// xhr.onabort = () =>{
// console.log('onAbort-Method')
// }

// xhr.ontimeout = () =>{
// console.log("onTimeOut-Method")
// }




// xhr.send();
// }





// ===========================================Example 3 =====================================================//
//AJAX Use Property Only

let url = "https://jsonplaceholder.typicode.com/users";

let AccessButton = document.getElementById("ajax"); //dono AJAX File me same id ka button use hora hai ?
AccessButton.addEventListener("click", ajaxFunction);

function ajaxFunction(){
let xhr =  new XMLHttpRequest();

// console.log(xhr);

xhr.responseType = "json";//Kis type me data hona JSON,XML,ya TextFile, me hona ? hamne xhr.responseType ='json' set kiya hai is liye ye formate object me data hai ? is xhr.responseType = "json" commit tu data sting me mile ga ?


xhr.open("GET",url,true); 


xhr.onreadystatechange =()=> {//Readystate Code 1,2,3,4 ye code? onreadystatechange ki jaga onload bhi use hota hai ?
 console.log(xhr);

if(xhr.status === 200){ //Status code check ?
//console.log(xhr);

console.log("Successfully Execution Code",xhr.response); //json me data mile ga respons se q ke hamne xhr.responseType json kiya hua hai ?

}else{
console.log("Response the Problem"); //Error ke liye ye code ?
}

}




xhr.send();
}
















// const url = "https://jsonplaceholder.typicode.com/posts";

// async function myFun1(){
// try {
//     let fatchingAPI =  await fetch(url);
//     console.log(fatchingAPI);
//     let jsonData = await fatchingAPI.json(); //json data me file aye gi is tara se ?
//     console.log(jsonData);
//     // let textData = await fatchingAPI.text();  // fetchAPI me text File me bhi aisa data le sakte hai but not good peractic this text() method json me hi data lene chachiye ?
//     // console.log(textData);
// } catch (error) {
// console.error("Error fetching data: ", error);
// }


// }

// myFun1();




 




























































































































































































































