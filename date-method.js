
//=================================== Date Get Method ===============================================//

// Method	             Description

// getFullYear()	     Get year as a four digit number (yyyy)
// getMonth()	         Get month as a number (0-11)
// getDate()	         Get day as a number (1-31)
// getDay()	             Get weekday as a number (0-6)
// getHours()	         Get hour (0-23)
// getMinutes()	         Get minute (0-59)
// getSeconds()	         Get second (0-59)
// getMilliseconds()	 Get millisecond (0-999)
// getTime()	         Get time (milliseconds since January 1, 1970)


// const d = new Date("2021-03-25") //Static value me se full-year
// console.log(d.getFullYear()) ;


// const d = new Date(); //Dynamic value se full-year ?
// console.log(d)
// console.log(d.getFullYear()) ;



// The getMonth() Method
// The getMonth() method returns the month of a date as a number (0-11).
// Note
// In JavaScript, January is month number 0, February is number 1, ...
// Finally, December is month number 11.

// const d = new Date("2021-03-25");
// d.getMonth();
// console.log(d);

// const d1 = new Date(); //Dynamic value month ?
// console.log(d1);
// console.log(d1.getMonth()); //3 pe 'April' aye ga ?

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const d = new Date();
// let month = months[d.getMonth()];
// console.log(month);




// The getDate() Method
// The getDate() method returns the day of a date as a number (1-31):
// const d = new Date("2021-03-25");
// d.getDate();

// const d1 = new Date(); //Dynamic value Date ? current date dega ye method ?
// console.log(d1);
// console.log(d1.getDate());




// The getHours() Method
// The getHours() method returns the hours of a date as a number (0-23):
// const d = new Date("2021-03-25");
// d.getHours();

// const d = new Date(); //Dynamic value Hours mile ga ?
// console.log(d);
// console.log(d.getHours());





// The getMinutes() Method
// The getMinutes() method returns the minutes of a date as a number (0-59):
// const d = new Date("2021-03-25");
// d.getMinutes();

// const d = new Date(); //Dynamic Value ?
// console.log(d);
// console.log(d.getMinutes());



// The getSeconds() Method
// The getSeconds() method returns the seconds of a date as a number (0-59):
// const d = new Date("2021-03-25");
// d.getSeconds();

// const d = new Date();  //Dynamic Value ?
// console.log(d)
// console.log(d.getSeconds());







// The getMilliseconds() Method
// The getMilliseconds() method returns the milliseconds of a date as a number (0-999):
// const d = new Date("2021-03-25");
// d.getMilliseconds();

// const d = new Date();  //Dynamic Value ?
// console.log(d);
// console.log(d.getMilliseconds());





// The getDay() Method
// The getDay() method returns the weekday of a date as a number (0-6).

// Note
// In JavaScript, the first day of the week (day 0) is Sunday.
// Some countries in the world consider the first day of the week to be Monday.
// const d = new Date("2021-03-25");
// d.getDay();

// const d = new Date();  //Dynamic Value ?
// console.log(d);
// console.log(d.getDay()); //3 number pe "Wednesday" ?

// const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const d = new Date();  //Dynamic Value ?
// let day = days[d.getDay()]; 
// console.log(day)




// The getTime() Method
// The getTime() method returns the number of milliseconds since January 1, 1970:
// const d = new Date("1970-01-01");
// d.getTime();

// const d = new Date("2021-03-25");
// console.log(d)
// console.log(d.getTime());



// he Date.now() Method
// Date.now() returns the number of milliseconds since January 1, 1970.
// let ms = Date.now(); 
// console.log(ms)

// Calculate the number of years since 1970/01/01 ?
// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

// let years = Math.round(Date.now() / year); //Years nikal re  Calculate kar ke ?
// console.log(years)








//==================================== Date Set Method ===============================================//

//Date ko set karne ka tarika

// Method	            Description

// setDate()	        Set the day as a number (1-31)
// setFullYear()	    Set the year (optionally month and day)
// setHours()	        Set the hour (0-23)
// setMilliseconds()    Set the milliseconds (0-999)
// setMinutes()	        Set the minutes (0-59)
// setMonth()	        Set the month (0-11)
// setSeconds()	        Set the seconds (0-59)
// setTime()	        Set the time (milliseconds since January 1, 1970)


// const d = new Date(); //full-years set kar re hai ?
// d.setFullYear(2020);
// console.log(d);


// The setFullYear() method can optionally set month and day ?
// const d = new Date();
// d.setFullYear(2020, 11, 3);
// console.log(d);



// The setMonth() Method
// The setMonth() method sets the month of a date object (0-11) ?
// const d = new Date();
// d.setMonth(11);
// console.log(d);

// The setDate() Method
// The setDate() method sets the day of a date object (1-31)?
// const d = new Date();
// d.setDate(15);
// console.log(d);


// The setHours() Method
// The setHours() method sets the hours of a date object (0-23) ?

// const d = new Date(); 
// d.setHours(22);
// console.log(d)


// The setMinutes() Method
// The setMinutes() method sets the minutes of a date object (0-59):
// const d = new Date();
// d.setMinutes(30);
// console.log(d);



// The setSeconds() Method
// The setSeconds() method sets the seconds of a date object (0-59):
// const d = new Date();
// d.setSeconds(30);
// console.log(d);

























































































































































