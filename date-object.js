//Date ----> Javascript me date bhi ek object hai ? date bhi ek referance data-type hai ?  

// let newDate = new Date();
// document.writeln(newDate);
let newDate =  Date.now();
document.writeln(newDate + '<br/>');

var d1 = new Date();
// document.writeln("Minute right now is : " + d1.getMinutes() + "<br>");

var month = "";

switch(d1.getMonth()){
case 0:
month = "January";
break;
case 1:
month = "February";
break;
case 2:
month = "March";
break;
case 3:
month = "April";
break;
case 4:
month = "May";
break;
case 5:
month = "June";
break;
case 6:
month = "July";
break;
case 7:
month = "August";
break;
case 8:
month = "September";
break;
case 9:
month = "October";
break;
case 10:
month = "November";
break;
case 11:
month = "December";
break;}

document.writeln("Todays Month is : " + month + "<br>");











































































