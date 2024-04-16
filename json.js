//JSON ---> JSON Full-Form Javascript-Object-Notation Hota Hai ? JSON ka use data ko store ya data ko Exchange ke liye use hota hai ? JSON is language independent har language ke sath use kar sakte hai ? JSON ka use kiya jata hai jab server se web page pe data beja jata hai tab JSON ka use hota hai ? JSON samajne me eyse hai ? JSON syntax Javascript-Object-Notation se liya gaya hai ? leink JSON ek Text formet hai only ? JSON Data ko read and or generating means banane ke liye code kisi bhi programming language Lihka ja sakta hai ?

// JSON me Data type itne store kar sakte hai ?
// String,Array,Null,Boolean,Number,Object ?

// JSON.parse ---> server se jab bhi koi data ata hai o string me hota hai us se object me convart karne ke liye hi JSON.Parse ka use hota hai ?
 
// JSON.stringify ---> server pe jab bhi object me jo bhi data jata hai us data ko string me change karta hai ye method ?

let details = {
  firstName: "Tausif", //String value
  age: 24, //Number Value
  married: false, //Boolean value

  car: { //nested object 
    name: "Tata", 
    modal: 2024,
    color: "gray",
  },

  coruse: ["HTML","CSS","Javascrip"],              //Array value
  kids: null,                                         //Null value
  city: "Mumbai"
  
};

console.log(details);

// console.log(typeof details.kids); //dost use kar ke bhi Print karwa sakte hai ?
// console.log(details["firstName"]); //aise bhi access kar sakte breaket notation se jo bhi properry lena ho ?
