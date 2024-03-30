//=========================================JS Function Object Constructor=======================================//
//Is se hi ham Constructor function ya Constructor object dono same hi hai ? Constructor used kar ke Main object se new object bana sakte hai or new object ko Multipal time alag alag object property ke sath print kar sakte hai ? Jab bhi ham Constructor Function bante hai us ka First letter Captital hota hai ? ek se jayda bar obejct ko copy na kar re is liye ham object Constructor banaya gaya hai Javascript me ? Ye bhi Object oriented programming me hi ata hai ?


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



//Creating Using ObjectConstructor ?
function Car (name, modal, color,weight){ //Constructor function me first letter Captal hota hai ?
  this.carName = name, //this means currnet object ka referance means Car object ka referace ?
  this.carModa = modal,
  this.carColor = color,
  this.carWeight = weight
};

let car1 = new Car ('Tata Nexon',2023, "Red", '800 kg'); //Constructor function ko call karne ka tarika hai new keyword ?
console.log(car1.carName);  // is tara se koi bhi value print karwa sakte carModal jo bhi print karwna ho ?

car1.speed = 150 ; //is tara se proprty add kar sakte hai ?

// delete car1.speed ; //aise delete bhi kar sakte hai property  ko ?

console.log(car1)  //pura Car name ka Function aye ga is se ?

// let car2 = new Car ('Tata Nexon',2023, "orange", '800 kg'); //kitne bhi Car object bana sakte hai aise ?
// console.log(car2);


// let car3 = new Car ('Tata Nexon',2023, "Yellow", '800 kg');

// car3.carInfo = function(){  //kisi bhi object me method add karne ka tarika ?
//   return this.carName + " " + this.carModa ;
// }

// console.log(car3.carInfo()); // jo method me return kar re hai carName, carModal us ki value aye ki onlye ?

// console.log(car3); // check methpd  add hua ya nhi car3 variable me ? 

















// ==================================Tech Gun Chanel ka Capter ================================//
// 

// function Show (name,id,selery,){ // Constructor Shoe ka first capital is se bolte hai Constructor function ?
//     this.name = name;   //this matlab us object ka refer lena
//     this.id= id;
//     this.selery= selery;
//    this.hello = function(){    //function add bhi kar sate constructor me
// return this.name + "" + this.id
//}

//  }
// Show.prototype.nationlity = 'indian'; //constructor me alag se add karne ka tarika ye aisa

//let add = new Show("Tausif",12,2300); //new keyword se constructor Object create hora show wale function ka?
//add.nationlity= 'indian'  //only object me add add hoga aise constructor me add nhi hoga ?

//add.hello = function(){  //add object me ek method bhi add hora hai hello name ka means function?
// return this.name + "" + this.id
//}

//this.hello = function(){     //only jo hame retun karwana ho id,name jo bhi aisa karte hai
// return this.name + "" + this.id
//}
//console.log(add.hello());  //pura object print hoga?






//================================================ Object Constructor==========================================//
//Creating Object Constructor ---> First Letter Captital

let Person = {
  firstName : "Tausif",
  lastName : "Qureshi"
}











