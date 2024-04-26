//Asynchronous Programming me ata hai ---> 


// AJAX ---> AJAX Ki dusri file hai ye onlye AJAX me use hone wali property and method is me aye ge na ke koi exmple jitni property and method hai is me aye ge ?
console.log(" AJAX Property And Method Get! ");


let url = "https://jsonplaceholder.typicode.com/users";

let AccessButton = document.getElementById("ajax"); //dono AJAX File me same id ka button use hora hai ?
AccessButton.addEventListener("click", ajaxFunction);

function ajaxFunction(){
let xhr =  new XMLHttpRequest();
console.log(xhr);
xhr.responseType = "json";//Kis type me data hona JSON,XML,ya TextFile, me hona ? hamne xhr.responseType ='json' set kiya hai is liye ye formate object me data hai ? is xhr.responseType = "json" commit tu data sting me mile ga ?

// console.log("ReadState Zero ", xhr.readyState);
if(xhr.readyState === 0 ){ //aisa condition bhi laga sakte hai ?
console.log("Open method se first call 0")
}

xhr.open("GET",url,true); 

// console.log("ReadState First ", xhr.readyState);
if(xhr.readyState === 1 ){ //aisa condition bhi laga sakte hai ?
    console.log("Open method call 1 ")
}

xhr.onreadystatechange =()=> {//Readystate Code 1,2,3,4 ye code? onreadystatechange ki jaga onload bhi use hota hai ?

// console.log("ReadState Second", xhr.readyState);
if(xhr.readyState === 2 ){ //aisa condition bhi laga sakte hai ?
    console.log("Respone Header 2 ")
}

if(xhr.readyState === 3 ){ //aisa condition bhi laga sakte hai ?
    console.log("Looding 3 ")
}

if(xhr.readyState === 4 ){ //aisa condition bhi laga sakte hai ?
    console.log("DONE 4 ")
}

if(xhr.readyState === XMLHttpRequest.DONE){ //XMLHttpRequest.DONE is ki jaga number 4 bhi use kar sakte hai ?

if(xhr.status === 200){ //Status code check ?
//console.log(xhr);

console.log("Successfully Execution Code",xhr.response); //json me data mile ga respons se q ke hamne xhr.responseType json kiya hua hai ?

}else{
console.log("Response the Problem"); //Error ke liye ye code ?
}

    }

}












///serevr se data access karne ya dene ke liye use hota hai open() method is me three parameter hote hai first kon sa method use get,pots second parametar hota hai URL ya file name and three parametar hota hai true and falsa true use tu Asynchronous me work hoga and false use tu synchronous me work hoga ?

xhr.send(); //Request ko server pe send karne ke liye ye send() Method use karte hai ?
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




 




























































































































































































































