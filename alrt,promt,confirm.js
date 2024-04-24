//Alert and Prompt and Confirm Method ?


// ===================================================== Alert Method =======================================// 

// alert("Hello User")


// ===================================================== Prompt Method =======================================// 
// let promt = prompt('Tausif');
// document.writeln(promt);

// let userGuess = +prompt("Guess a number") //users se number lere hai ye propmt? promt string me leta hai value +is se number me change hoga

// document.writeln(userGuess) // promt se liya hua kuch print aise karte hai



// ===================================================Confrim Method ======================================//
// let buttonText = document.getElementById("cliked");
// buttonText.addEventListener("click",myFunction);

function myFunction() {
  let text = "Press a button!\nEither OK or Cancel.";
  if (confirm(text) == true) {
    text = "You pressed OK!";
    // document.writeln("You pressed OK!");
  } else {
    text = "You canceled!";
    // document.writeln("You canceled OK!");
  }
  document.getElementById("demo").innerHTML = text; //HTML me bhi value print karwa sakte hai id use kar ke ?
}

// myFunction();



let buttonText = document.getElementById("cliked");
buttonText.addEventListener("click",function(){ //Anonymous Function ka bhi use kar sakte hai ?
  
  let text = "Press a button!\nEither OK or Cancel.";
  if (confirm(text) == true) {
    text = "You pressed OK!";
    // document.writeln("You pressed OK!");
  } else {
    text = "You canceled!";
    // document.writeln("You canceled OK!");
  }
  document.getElementById("demo").innerHTML = text; //HTML me bhi value print karwa sakte hai id use kar ke ?
});


// document.getElementById("clicked").addEventListener("click", () => { //use Arrow function ?
//   let text = "Press a button!\nEither OK or Cancel.";
//   if (confirm(text) == true) {
//     text = "You pressed OK!";
//   } else {
//     text = "You canceled!";
//   }
//   document.getElementById("demo").innerHTML = text;
// });
