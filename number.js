//Number ---> Javscript me number bhi ek object hai ? Number ko 2 tara se create kar sakte hai ?


//Number Creating karne ke tarike ?
var x = 2;                               //creating integer value
var y = 2.785;                          //creating flooting point value 
var z = 45e2;                          //creating exponent value output
var a = new Number(16);                //integer value by number object



document.writeln("<h3>Javascript Constants</h3>");

document.writeln("<h4>MIN_VALUE: " + + Number.MIN_VALUE +"</h4>");//minimum value print hogi

document.writeln("<h4>MAX_VALUE: " + + Number.MAX_VALUE +"</h4>");//maximum value print

document.writeln("<h4>POSITIVE_INFINITY: " + + Number.POSITIVE_INFINITY +"</h4>");//
document.writeln("<h4>NEGATIVE_INFINITY: " + + Number.NEGATIVE_INFINITY +"</h4>");//


document.writeln("<h4>NAN: " + + Number.isNaN +"</h4>");//NOT A Number 
document.writeln("to check 'g' is a number: " + Number.isNaN('g') + "<br>");//true false answer[g]number hai ya nhi 
document.writeln("to check '2' is a number: " + Number.isNaN('2')+ "<br>");//true false answer[2]number hai ya nhi 

document.writeln("to check '2' is a number: " + isNaN("hello") + "<br>");// number ke alwa koi or pass to true aye ga
document.writeln("to check '2' is a number: " + isNaN("g") + "<br>");//
document.writeln("to check '2' is a number: " + isNaN(2) + "<br>");//
	




//Number Methods in js

//creating isFinite() jo number ham pass karte hai agar o number finite hai to true and false me answer return hoga
// document.writeln("is 2 a finite? : " + Number.isFinite(2));
// document.writeln("<br>is h a finite? : " + Number.isFinite("h"));
// document.writeln("<br>is -5 a finite? : " + Number.isFinite(-5));
// document.writeln("<br>is NaN a finite? : " + Number.isFinite(NaN));
// document.writeln("<br>is (0,10) a finite? : " + Number.isFinite((0,10)));//renge means ose10 ke bich me number hona
// document.writeln("<br>is (10,0) a finite? : " + Number.isFinite((10,0)));



//creating isInteger ()
// document.writeln("is 2 an Integer? : " + Number.isInteger(2)); //integer number
// document.writeln("<br>is 2.56 an Integer? : " + Number.isInteger(2.56));// not integer number
// document.writeln("<br>is infinity an Integer? : " + Number.isInteger(Infinity));//not integer number
// document.writeln("<br>is -infinity an Integer? : " + Number.isInteger(-Infinity));
// document.writeln("<br>is NaN an Integer? : " + Number.isInteger(NaN));




//creating parseFloat() number string me pass to conveart ho jaye ga number me is method se
// document.writeln("Convert '85' to Float 85 : " + Number.parseFloat("85"));//floting number me print hora hai ye
// document.writeln("<br>Convert 'Hello' to Float : " + Number.parseFloat("Hello"));
// document.writeln("<br>Convert '55Hello' to Float : " + Number.parseFloat("55Hello"));





//creating parseInt () jo number pe ye method use integer me chang ho gaye ga number to hi coveart hoga 
// document.writeln("Convert '85' to Int 85 : " + Number.parseInt("85"));//integer me chang ho gaye ga
// document.writeln("<br>Convert 'Hello' to Int : " + Number.parseInt("Hello"));
// document.writeln("<br>Convert '55Hello' to Int : " + Number.parseInt("Hello"));




//creating toExponential ()
// var a = 2;
// var b = 5;
// document.writeln("Convert '2' to Exponential Number with base 2 : " + a.toExponential(2));
// document.writeln("<br>Convert '2' to Exponential Number with base 5 : " + b.toExponential(2));



//creating toFixed () bhut jayda digt me value us se kam karne ke liye ye use hota hai method
// document.writeln("value of PI is : " + Math.PI.toFixed(2));



//creating toPrecision () number string me conveart ho jata hai is method se
// document.writeln("value of PI is in string : " + Math.PI.toPrecision(3));//string me value ari hai is se

		

//creating toString () 
// var a = 2;
// document.writeln("value of '2' in string : " + a.toString())//string me change
































































































































































































