// ChatGPT Se liya hua Syntax ---> if-else statements JavaScript mein conditions ko evaluate karne aur unke anusaar code ko execute karne ke liye istemal hota hai. Yeh bahut hi basic aur important part hai JavaScript programming ka.

// ChatGPT Se liya hua Syntax ---> Detailed Explanation.

// if block: Yadi condition true hai, to yeh block execute hota hai.
// else block: Yadi condition false hai, to yeh block execute hota hai.

// ========================================if else if Conditional ====================================== //
// if, else, and else if ---> js me Conditional statements 3 type ki hoti hai ? A.HTML File me bhi hai ?
// [1] ----> if 
// [2] ----> else if 
// [3] ----> else 

//if ---> conditional ko check karnr ke liye use hota hai if ?

//else if ---> ye else if bhi Conditional ko check karne ke liye use hota hai > is pe code jab ata hai jab first wali if ki conditionla false hohi ?

// else ----> jab koi conditional false hoti hai tab ye wala code chalta hai ?
 
// let tempInDegree =23;
// if(tempInDegree < 0){  //lest then use
//     document.writeln("extremely cold outside");
// }else if(tempInDegree < 16 ){
//     document.writeln("it is cold outside")
// }else if(tempInDegree < 25 ){
//     document.writeln("wheather is ok")
// }else if(tempInDegree < 35 ){
//     document.writeln("lets go form swim")
// }
// else if(tempInDegree < 45 ){
//     document.writeln("turn on ac")
// }else{
//     document.writeln("too hot")
// }



// let tempInDegree = 15; 
// if(tempInDegree > 40){     //greter then use
//     console.log("too hot");
// }else if(tempInDegree > 30){
//     console.log("lets go for swim");
// }else if(tempInDegree > 20){
//     console.log("weather is cool");
// }else if(tempInDegree > 10){
//     console.log("it is very cold outside");
// }else{
//     console.log("extremely cold");
// }



// ===================================== Nested if-eles condison ==============================================//
let winnigNumber = 19;
let userGuess = +prompt("Guess a number") //users se number lere hai ye propmt? promt string me leta hai value +is se number me change hoga 

// document.writeln(userGuess)  // aise print hoga user se liya hua number/
 if (winnigNumber === userGuess){
    document.writeln('Your guess Number is right')
 }else if(userGuess < winnigNumber){
    document.writeln("too low Number")
 }else{
    document.writeln("to high Number")
 }

// ===================================== Nested if-eles condison ==============================================//
//  let winningNumber = 19;
// let userGuess = +prompt("Guess a number");

// if(userGuess === winningNumber){
//     console.log("Your guess is right!!");
// }else{
//     if(userGuess < winningNumber){
//         console.log("too low !!!");
//     }else{
//         console.log("too high !!!");
//     }
// }


// let time = new Date().getHours()
// console.log(time)