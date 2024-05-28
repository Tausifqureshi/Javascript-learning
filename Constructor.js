// OOPs in  me hi ata hai Constructore bhi

//  ES5 (ECMAScript 2014) OOP ka old Concept ab is ki jaga new OOP ne liya jis se ham Class and Object Constructor bolte hai ?
//=========================================JS Function Object Constructor=======================================//
//Is se hi ham Constructor function ya Constructor object dono same hi hai ? Constructor used kar ke Main object se new object bana sakte hai or new object ko Multipal time alag alag object property ke sath print kar sakte hai ? Jab bhi ham object Constructor Function bante hai us ka First letter Captital hota hai ? ek se jayda bar obejct ko copy na kar re is liye ham object Constructor banaya gaya hai Javascript me ? Ye bhi Object oriented programming me hi ata hai ? 

// ChatGPT Se liya hua Syntax ---> Constructor functions JavaScript mein classes introduce hone se pehle objects create karne ke liye use kiye jate the. Ek constructor function banane ke liye, aap function keyword ka use karte hain aur new keyword ke sath ise call karte hain.

// ChatGPT Se liya hua Syntax ---> Constructor functions mein methods ko prototype pe define karna padta hai, jo thoda complex aur verbose ho sakta hai.

// ChatGPT Se liya hua Syntax ---> Constructor functions mein inheritance ko implement karna thoda complex hota hai aur manually prototype ko set karna padta hai.




// New keyword ----> is kyeword ka use hota hai Consturctor ko call karne ke liye kisi object ko create  karne ke liye use kiya jata hai ? is ka ham use karte hai constructor function se object banane ke liye javascript me ?

// ChatGPT Se liya hua Syntax ---> JavaScript me new keyword ka istemal objects create karne ke liye kiya jata hai. Yeh keyword ek constructor function ko call karta hai aur ek naya object return karta hai. new keyword ke sath, JavaScript internals kuch specific steps follow karta hai:





// =========================================== Glowvia Teac Chaneal Chaptert =================================//
//Simple Object Create ? Object  Literals bhi bolte hai is ko ?
// let car = { 
//     firstName : 'Tata',
//     modal : 2020,
//     color : "Read",
// }

// console.log(car) // pura Object Print ?
// console.log(car["firstName"])//aise bhi access kar sakte breaket notation se javascript me key string me hi hoti hai?
// console.log(car.firstName) //dost use kar ke bhi Print karwa sakte hai ?



//Creating Using Object-Constructor ?

// function Student(fName, lName, age) { //is tara se bhi bana sakte Constructor function jo hame eyse pade ?
//   // Call the User constructor to initialize User properties
//   User.call(this, fName, lName, age);
// }

// // Define the User constructor
// function User(fName, lName, age) {
//   this.firstName = fName;
//   this.lastName = lName;
//   this.age = age;
// }

// // Define methods on User prototype
// User.prototype.fullName = function () {
//   return `${this.firstName} ${this.lastName} ${this.age}`; 
// };

// User.prototype.getRole = function () {
//   return this.numbeRole;
// };

// User.prototype.setRole = function (changeRole) {
//   this.numbeRole = changeRole;
// };

// User.prototype.setName = function (changeName) {
//   this.name = changeName;
// };

// User.prototype.language = "English";

// // Set up inheritance
// Object.setPrototypeOf(Student.prototype, User.prototype);

// // Correct the prototype constructor reference
// Student.prototype.constructor = Student;

// // Example usage
// let student = new Student("John", "Doe", 20);
// console.log(student.fullName()); // "John Doe 20"
// console.log(student.language); // "English"
// student.setRole("Student");
// console.log(student.getRole()); // "Student"
// console.log(student.firstName)



// let user = new User("hello", "Doe", 40);
// console.log(user)
// console.log(user.lastName)






function Car (name, modal, color,weight){ //Object-Constructor function me first letter Captal hota hai ?
  this.carName = name, //this means currnet object ka referance means Car object ka referace ?
  this.carModa = modal,
  this.carColor = color,
  this.carWeight = weight
};

// let car1 = new Car ('Tata Nexon',2023, "Red", '800 kg'); //Constructor function ko call karne ka tarika hai new keyword ?
// // console.log(car1.carName);  // is tara se koi bhi value print karwa sakte carModal jo bhi print karwna ho ?

// car1.speed = 150 ; //is tara se proprty add kar sakte hai ?

// delete car1.speed ; //aise delete bhi kar sakte hai property  ko ?

// console.log(car1)  //pura Car name ka Constructor-Object-Function aye ga is se ?

// let car2 = new Car ('Tata Nexon',2023, "orange", '800 kg'); //kitne bhi Car object bana sakte hai aise ?
// console.log(car2);


// let car3 = new Car ('Tata Nexon',2023, "Yellow", '800 kg');
// console.log(car3); //Pura object print hopga is se

// car3.carInfo = function(){  //kisi bhi object me method add karne ka tarika abhi ye car3-object me add hora hai ?
//   return this.carName + " " + this.carModa ;
// }

// console.log(car3.carInfo()); // jo method me return kar re hai carName, carModal us ki value aye ki onlye ?

// console.log(car3); // check methpd  add hua ya nhi car3 variable me ? 


// ================================== Object-Constructor-Prototype ================================//
// Object-Constructor-prototype ---> is ko ham Object-Prototype bhi bolte hai ? Prototype ka use ham consturctor ya jaavscript ki class me use kar kar te hai ?  prototype ka use kar ke Constructor me propertry and method add kar sakte hai ? prototype ka use kar ke onlye object me hi property and method change add kar sakte hai ? javascript ke inbilt data-type ko prototypes se nhi change kar sakte hai Example?

// Numbers
// Strings
// Arrays
// Dates
// Booleans
// Function
// Objects



function Car (name, modal, color,weight){ //Object-Constructor function me first letter Captal hota hai ?
  this.carName = name, //this means currnet object ka referance means Car object ka referace ?
  this.carModa = modal,
  this.carColor = color,
  this.carWeight = weight
};

// let car1 = new Car ('Tata Nexon',2023, "Red", '800 kg'); //Constructor function ko call karne ka tarika hai new keyword ?
// console.log(car1.carName);  // is tara se koi bhi value print karwa sakte carModal jo bhi print karwna ho ?
// car1.speed = 150 ; //is tara se proprty add kar sakte hai only object me add hogi na ke Constructor me ?





Car.prototype.madein = 'india'; //Constructor-Objeect me property add hoga is tara se prototype use kar ke ?

// console.log(car1.madein) //Checking madein add hua ya nhi ?

Car.prototype.carInfo = function(){ //prototype use kar ke Constructor me function bhi add kar sakte hai carInfo function add hora hai ?
  return `${this.carName } ${this.carModa}  ${this.madein}`;
}
// console.log(car1.carInfo()); //jo method add us ko call kar re hai carInfo () ko ?

// console.log(car1)  //pura Car name ka Function aye ga is se ?


let car2 = new Car ('BMW',2024, "yallow", '800 kg'); //is ke sath bhi method work kar re ga ?

console.log(car2.carInfo()); // car2 ke sath bhi method use kar sakte hai jitne object create utno ke sath use kar sakte hai ?
//  console.log(car2.madein) //add ki hohi property kisi bhi object ke sath bhi use kar sakte hai ?












// ==================================Tech Gun Chanel ka Capter ================================//
// 

// function Show (name,id,selery,){ // Constructor Show ka first capital is se bolte hai Constructor function ?
//     this.name = name;   //this matlab us object ka refer lena
//     this.id= id;
//     this.selery= selery;
//    this.hello = function(){    //function add bhi kar sate constructor me
// return this.name + "" + this.id
//}

//  }
// Show.prototype.nationlity = 'indian'; //constructor me alag se add karne ka tarika ye aisa

//let add = new Show("Tausif",12,2300); //new keyword se constructor Object create hora show wale function ka? 
// console.log(add); // pura object print hoga ? 

//add.nationlity= 'indian'  //only object me add add hoga aise constructor me add nhi hoga ?


//add.hello = function(){  //add object me ek method bhi add hora hai hello name ka means function?
// return this.name + "" + this.id
//}

//console.log(add.hello());  // jo value print karwaye ohi aye ga is add wale function se ?






//  ==========================================This-call=======================================================//
// This and call ek sath use ---> Aisa bi constructor function khabi banae ki zarurat pad sakti hai ?


function SetUserName(userName){
  this.myName = userName
}


function CreateUser(userName,email,password) {
SetUserName.call(this,userName); //---> ham is wale function se userName set karwana hai ? is me jo ham userName pass kar re hai o is hi function CreateUser ka hi jo ham ek argument dere hai q ke hamne setUserName me ek Parameter pass kiya hai tu argument bhi dena hoga is liye ham argument ke taur per is Createuser function me ka userName de re hai ? ham is function ka use kar ke CraeteUser fubction wale ka userName Set kar re hai ? call ham is liye use kar re hai Call function ka use kar ke ek object ki property dusre object use kar sakta haiu ? this object ko refere karta hai is SetUserName() me jo this hai o CreateUser function ke userName ke liye call hora hai or console me is ki propertymyName ke set hogi q ke hame SetUserName se username set kar re hai tu hamne is usename varibel ka naam ya key bol do is naam myName rahka hai is liye CreateUser function wale userName me jo bhi value aye gi is myName me set ho jaye gi ?



  // this.myName = userName; ----> //aisa bhi set kar sakte hai but hame abhi aisa nhi karna hame ek dusre function ki value ko use karna hai is wale function me ?

  this.myEmail = email;
  this.myPassword = password;
}

let visitingUser = new CreateUser("Tausif","Tausifqureshi@gmail.com",123);
console.log(visitingUser)














