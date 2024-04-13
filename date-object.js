//Date ----> Javascript me Date ek inbuilt keyword hai ? Javascript me date bhi ek object hai ? date bhi ek referance data-type hai ?  Replit me bhi hai code is ka or ?


// 3 types of JavaScript date input formats hai ?
// [1] 
// Type	              Example

// ISO Date	         "2015-03-25" (The International Standard)

// The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format ? written Tarika hai ye ISO ka ?
// const d = new Date("2015-03-25");
// console.log( d);


// ISO dates can be written without specifying the day (YYYY-MM) ?
// const d = new Date("2015-03");  //ISO Dates (Year and Month );
// console.log(d);


// ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DD T HH:MM:SSZ) ?
// const d3 = new Date("2015-03-25T12:00:00Z"); // ISO Dates (Date-Time);
// console.log(d3)



//  let newDate = new Date("2023-03-25"); //aisa bhi kar sakte apni khuid ki date defind kar ke ?
//  console.log(newDate)
//  console.log(newDate.getFullYear()); //Koi bhi method data ka use kar sakte hai is me ?


 //interview me ata hai ye qution aisa logi currnt date se 50 day jayda hona
 let newDate = new Date("2023-03-25"); //aisa bhi kar sakte apni khuid ki date defind kar ke ?
//  console.log(newDate)
newDate.setDate( newDate.getDate() + 50)
 console.log(newDate);

// [2] --->
// Type	                       Example

// Short Date	              "03/25/2015"

// Short dates are written with an "MM/DD/YYYY" syntax like this ? Sort data ka wright tarika yahi hai ?

// const d = new Date("03/25/2015"); //Sort Date right Tarika ya hai ?
// console.log(d)


// WARNINGS !
// In some browsers, months or days with no leading zeroes may produce an error:
// const d1 = new Date("2015-3-25");
// console.log(d1)

// The behavior of "YYYY/MM/DD" is undefined.
// Some browsers will try to guess the format. Some will return NaN.
// const d2 = new Date("2015/03/25");
// console.log(d2)


// The behavior of  "DD-MM-YYYY" is also undefined.
// Some browsers will try to guess the format. Some will return NaN.
// const d3 = new Date("25-03-2015"); //Is tara se Invalid Date Error aye ga ?
// console.log(d3)





// [3] --->

// Type	                        Example
// Long Date	                "Mar 25 2015" or "25 Mar 2015"


// Long dates are most often written with a "MMM DD YYYY" syntax like this ?

// const d = new Date("Mar 25 2015");
// console.log(d);


// Dono tara se jun defind kar sakte hai ?
// const d1 = new Date("January 25 2015");
// console.log(d1);

// const d2 = new Date("Jan 25 2015");
// console.log(d2);








// ==============================================


// let newDate = new Date(); //current date deta hai ye method ?
// document.writeln(newDate);





// let newDate =  Date.now(); //ye kuch number dega bar bar jab bhi console kar re ge is se ?
// document.writeln(newDate + '<br/>');









//================================ // Static Date Month Example ? ===============================================//

// let day = 4;
// let month = ""; // It's a good practice to declare the variable outside the switch

// switch (day) {
//   case 0: //case se use hame koi option means koi value match karwana ho is se case se match karwate hai ?
//   month = "January";
//   break;
//   case 1:
//   month = "February";
//   break;
//   case 2:
//   month = "March";
//   break;
//   case 3:
//   month = "April";
//   break;
//   case 4:
//   month = "May";
//   break;
//   case 5:
//   month = "June";
//   break;
//   case 6:
//   month = "July";
//   break;
//   case 7:
//   month = "August";
//   break;
//   case 8:
//   month = "September";
//   break;
//   case 9:
//   month = "October";
//   break;
//   case 10:
//   month = "November";
//   break;
//   case 11:
//   month = "December";
//   break; // break keyword ka matlab jo case ture ohi execute hoga forther code nhi hoge sida bher default wala run ?

//     default: //is keyword jab chalte hai jab value true nhi hoti koi value match nhi hoti hai ?
//      console.log("Invalid Day")
// }

// console.log("Todays Month is : ", month)




//================================ // Dynamic Date Month Example ? ===============================================//

// var currentDate = new Date(); 
// var monthNumber = currentDate.getMonth();  //ye method month deta hai 
// var month = "";
// switch(monthNumber.getMonth()){ //dynamic value lere hai ham is se ?
// case 0:
// month = "January";
// break;
// case 1:
// month = "February";
// break;
// case 2:
// month = "March";
// break;
// case 3:
// month = "April";
// break;
// case 4:
// month = "May";
// break;
// case 5:
// month = "June";
// break;
// case 6:
// month = "July";
// break;
// case 7:
// month = "August";
// break;
// case 8:
// month = "September";
// break;
// case 9:
// month = "October";
// break;
// case 10:
// month = "November";
// break;
// case 11:
// month = "December";
// break;}

// document.writeln("Todays Month is : " + month + "<br>");




//================================ // Dynamic Date Day Example ? ===============================================//

// let d1 = new Date()
// var day = "";

// switch(d1.getDay()){
// case 0:
// day = "Sunday";
// break;
// case 1:
// day = "Monday";
// break;
// case 2:
// day = "Tuesday";
// break;
// case 3:
// day = "Wednesday";
// break;
// case 4:
// day = "Thursday";
// break;
// case 5:
// day = "Friday";
// break;
// case 6:
// day = "Saturday";
// break;}
// document.writeln("Todays Day is : " + day + "<br>");
























































