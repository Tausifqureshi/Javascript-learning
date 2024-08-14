//JSON ---> JSON Full-Form Javascript-Object-Notation Hota Hai ? JSON ka use data ko store ya data ko Exchange ke liye use hota hai ? JSON is language independent har language ke sath use kar sakte hai ? JSON ka use kiya jata hai jab server se web page pe data beja jata hai tab JSON ka use hota hai ? JSON samajne me eyse hai ? JSON syntax Javascript-Object-Notation se liya gaya hai ? leink JSON ek Text formet hai only ? JSON Data ko read and or generating means banane ke liye code kisi bhi programming language Lihka ja sakta hai ?

// JSON me Data type itne store kar sakte hai ?
// String,Array,Null,Boolean,Number,Object ?

// JSON.parse ---> server se jab bhi koi data ata hai o string me hota hai us se object me convart karne ke liye hi JSON.Parse ka use hota hai ?

// JSON.stringify ---> server pe jab bhi object me jo bhi data jata hai us data ko string me change karta hai ye method ?

let details = `{
 "firstName": "Tausif", 
 "age": 24,
 "married": false, 
 "coruse": ["HTML","CSS","Javascrip"],             
 "kids": null,                                         
  "city": "Mumbai",
 "car":{ 
    "name": "Tata", 
    "modal": 2024,
    "color": "gray"
   }

}`;

let jsonParse = JSON.parse(details); //server se data object me convert hoke aye ga json.parse se ?
console.log(jsonParse);

// console.log(details);

// console.log(typeof details.kids); //dost use kar ke bhi Print karwa sakte hai ?
// console.log(details["firstName"]); //aise bhi access kar sakte breaket notation se jo bhi properry lena ho ?



let details1 = {
    firstName: "Tausif", 
    age: 24,
    married: false, 
    coruse: ["HTML","CSS","Javascrip"],             
    kids: null,                                         
     city: "Mumbai",
    car:{ 
       name: "Tata", 
       modal: 2024,
       color: "gray"
      }
   
   };

let jsonStringfy = JSON.stringify(details1); //server pe data bejne ke liye use hota hai json.stringfy ?
console.log(jsonStringfy)
