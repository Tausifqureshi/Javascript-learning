//Math-Object ----> Math bhi ek object hai javascript me ? mathe me jab bhi hame value lena hota hai us ke method use kar te hai direct ? The JavaScript Math object allows you to perform mathematical tasks on numbers ?


// JavaScript Math Methods

// Method	                Description

// abs(x)	                Returns the absolute value of x
// acos(x)	                Returns the arccosine of x, in radians
// acosh(x)	                Returns the hyperbolic arccosine of x
// asin(x)	                Returns the arcsine of x, in radians
// asinh(x)	                Returns the hyperbolic arcsine of x
// atan(x)	                Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y,                 x)	Returns the arctangent of the quotient of its arguments
// atanh(x)	                Returns the hyperbolic arctangent of x
// cbrt(x)	                Returns the cubic root of x
// ceil(x)	                Returns x, rounded upwards to the nearest integer
// cos(x)	                Returns the cosine of x (x is in radians)
// cosh(x)	                Returns the hyperbolic cosine of x
// exp(x)	                Returns the value of Ex
// floor(x)	                Returns x, rounded downwards to the nearest integer
// log(x)	                Returns the natural logarithm (base E) of x
// max(x, y, z, ..., n)	    Returns the number with the highest value
// min(x, y, z, ..., n)	    Returns the number with the lowest value
// pow(x, y)	            Returns the value of x to the power of y
// random()	                Returns a random number between 0 and 1
// round(x)	                Rounds x to the nearest integer
// sign(x)	                Returns if x is negative, null or positive (-1, 0, 1)
// sin(x)	                Returns the sine of x (x is in radians)
// sinh(x)	                Returns the hyperbolic sine of x
// sqrt(x)	                Returns the square root of x
// tan(x)	                Returns the tangent of an angle
// tanh(x)	                Returns the hyperbolic tangent of a number
// trunc(x)	                Returns the integer part of a number (x)





//creating abs() ---> jo bhi hamra number hai us ki absolute value deta hai means nagetiv number pass to positiv number milta hai ye method ?

// var num1 = -4;
// console.log("abs() of "+ num1 +" : " + Math.abs(num1));
// console.log("<br>abs() of 4 : " + Math.abs(4));
// console.log("<br>abs() of [] : " + Math.abs([]));
// console.log("<br>abs() of [2,7] : " + Math.abs([2,7]));
// console.log("<br>abs() of null : " + Math.abs(null));
// console.log("<br>abs() of empty : " + Math.abs());



//creating ceil() --->  return jo hamre current number se badi value hoti hai o return karta hai 4.2 is ke pass integer value 5 dga ye method ? 

// console.log("ceil() of 4.2 : " + Math.ceil(4.2));
// console.log("<br>ceil() of 7.6 : " + Math.ceil(7.6));
// console.log("<br>ceil() of -4.2 : " + Math.ceil(-4.2)); //nagetiv number ke liye use tu badi value se jo chota o value mile gi 4.2 hai us ki value 4 aye gi nagetiv number me ?




//creating exp() ---> exponential method ?
// console.log("exp() of 1 : " + Math.exp(1));
// console.log("<br>exp() of 2 : " + Math.exp(2));





//creating floor() ---> largest integer number off value deta hai ?

// console.log("floor() of 7.2 : " + Math.floor(7.2)); //small value dega pogetive me ye method ?
// console.log("<br>floor() of -7.2 : " + Math.floor(-7.2)); //nagetiv number ke liye use tu ye method jo bada number hoga us ke pass o dega -7.2 ka aye ga 8 ?




//creating log() --->  log hame log value return karta hai ?

// console.log("log() of 1 : " + Math.log(1));
// console.log("<br>log() of 0 : " + Math.log(0));
// console.log("<br>log() of 10 : " + Math.log(10));





//creating max() ---> big number fiend ke liye use ye method ka ?
// console.log("Maximum number from 7,6,8,1,9,2 : " + Math.max(7,6,8,1,9,2)); //is ka big number 9, aye ga ?
// 

//creating min() --->  small number fiend ke liye use this method ?
// console.log("Minimum number from 7,6,8,1,9,2 : " + Math.min(7,6,8,1,9,2)); // is ka small number 1 aye ga ?




//creating pow() ---> power nikalne ke liye use this method ?
// console.log("2 to the power 3 is : " + Math.pow(2,3)); 
// console.log("<br>5 to the power 1.2 is : " + Math.pow(5,1.2));




//creating random() ---> har bar jo new number genrate hota hai example opt us ham rendom number bolte hai ?
function randomNumber(){
return Math.random()*1000000;
};

// console.log("<br>Create an OTP using Math.random() : " + Math.floor(randomNumber())); // jitne bar 000 use utne digi hi mile ge 6to6 and 5to5 jitne hona ceil and floor method bhi use kar sakte hai ?

// console.log("random number between 0 and 1 : " + Math.random());
// console.log("random number between 0 and 1 : " + Math.random(0,10));// 0 se10 ke bicha ka random number dega ? hame kitne bhi number ka random number le sakte hai 1000,2000, kitne bhi ?



//creating round()  ---> ye method work karta hai is ke pass jo number fir o bada number ho ya chotta ohi number retrun karta hai Example 7.2 is ka round number 7 aye ga and second 7.7 is ka round number 8 aye ga ?  nagetiv number same work karta hai ye method ?

// console.log("round() value of 7.2 : " + Math.round(7.2));
// console.log("<br>round() value of 7.7 : " + Math.round(7.7));
console.log("<br>round() value of -7.2 : " + Math.round(-7.2));
// console.log("<br>round() value of -0.6 : " + Math.round(-0.6));




//creating sign() --->  this method work positiv number pass 1 and answer +1 is return

// console.log("sign() value of 5 : " + Math.sign(5));
// console.log("<br>sign() value of -5 : " + Math.sign(-5));
// console.log("<br>sign() value of 0 : " + Math.sign(0));



//creating sqrt() ---> square nikalne ke liye use this method
// console.log("sqrt() value of 4 : " + Math.sqrt(4));
// console.log("<br>sqrt() value of 1.8452 : " + Math.sqrt(1.8452));



//creating cbrt() ---> cube root
// console.log("cbrt() value of 8 : " + Math.cbrt(8));
// console.log("<br>cbrt() value of 1.8452 : " + Math.cbrt(1.8452));




//creating trunc() ---> jo bhi hamra number hoga us ka integer number mile ga
// console.log("trunc() value of 8.56 : " + Math.trunc(8.56));
// console.log("<br>trunc() value of -0.65 : " + Math.trunc(-0.65));






//creating Math Methods for Trignomatry 
// console.log("<h4>Trignomatry values for 1/2 (1.5) : </h4>");
// console.log("cos(1/2) : " + Math.cos(1.5) + "<br>");
// console.log("sin(1/2) : " + Math.sin(1.5) + "<br>");
// console.log("tan(1/2) : " + Math.tan(1.5) + "<br>");


//creating Math Methods for Hyperbolic Trignomatry 
// console.log("<h4>Hyperbolic Trignomatry values for 1/2 (1.5):</h4>");
// console.log("cosh(1/2) : " + Math.cosh(1.5) + "<br>");
// console.log("sinh(1/2) : " + Math.sinh(1.5) + "<br>");
// console.log("tanh(1/2) : " + Math.tanh(1.5) + "<br>");



//creting Math Methods for Radian Trignomatry
// console.log("<h4>Radian Trignomatry values for 1/2 (1.5) : </h4>");
// console.log("radian cos(1/2) : " + Math.acos(1.5) + "<br>");
// console.log("radian sin(1/2) : " + Math.asin(1.5) + "<br>");
// console.log("radian tan(1/2) : " + Math.atan(1.5) + "<br>");






































































































































































































