let promt = prompt('Tausif');
// document.writeln(promt);


let userGuess = +prompt("Guess a number") //users se number lere hai ye propmt? promt string me leta hai value +is se number me change hoga 

// document.writeln(userGuess) // promt se liya hua kuch print aise karte hai


function myFunction() {
  let text = "Press a button!\nEither OK or Cancel.";
  if (confirm(text) == true) {
    text = "You pressed OK!";
  } else {
    text = "You canceled!";
  }
  document.getElementById("demo").innerHTML = text;
}