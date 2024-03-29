//======================================Object-Oriented-Programing Chapter ====================================//
// Object-Oriented-Programing is ko Potptypal-inheritance bolte hai ?


//=====================================Method Chapter ========================================//
// Method ---> method bolte hai kisi object ke ander function Create hai us se method bolte hai ?

// this keyword --->  ka matlab hota hai us object ya variable ka reference this.firstName means object me jo firstName hai us se firstName lega us ka reference lege this ye hota hai ?

// function personInfo(){  //function bher create hai?
//     console.log(`person name is ${this.firstName} and age is ${this.age}`);
// }

// const person1 = {
//     firstName : "Tausif",
//     age: 24,
//     about: personInfo //object ke ander about key hai personInfo value hai jaisa object me hota  hai key value paira?

    // about:function(){
    //  console.log(`person name is ${this.firstName} and age is ${this.age}`);
    // //aise bhi create kar sakte hai function ander hi?
    // }
// }

// const person2 = {
//     firstName : "Qureshi",
//     age: 18,
//     about: personInfo
// }
// const person3 = {
//     firstName : "Iqbal",
//     age: 17,
//     about: personInfo
// }

// personInfo() ---> direct call karne se undefiend aye ga 

// person1.about(); //function call hore jis bhi object ke sath function ke sath defiend hai us se sath call hore hai ?
// person2.about();
// person3.about();



//=====================================Sort Method Chapter ========================================//
//Sorta method ---> means hota hai object me sort tarike se function kaise banate hai ? 

// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }   
// }

// const user1 = {
//     firstName : "harshit",
//     age: 8,
//  about(){     //is ko bolte hai sort function object me ? key value pairs lihkne ki zarurt nhi hai ? abuot method 
//               // create hau is me means function ban gaya about ab ?
// console.log(this.firstName, this.age);
//     }   
// }



// user1.about();



//=====================================This keyword Chapter ========================================//
//console karne se this ki value window object print hoti hai jo javascript ka window object hota hai globel object? console window karne se bhi window object hi print hoga dono same hi hai ? This and Window ek hai baat hai javascript me ?

// console.log(this === window) //dono same hai true and false return hoga agr dono same tu ?

// console.log(this) 

// console.log(window);

// "use strict"; //is ko use karne se function me jo this console hua hai us ki value ab undefiend aye gi use strict mood on karne se but is ko commit karne se this ki value window object hi print hogi? === interview quetion hai ye ?

// function myFunc(){  //function declaretion hai ye ?is function ka bhi this window object hota hai ?
//     console.log(this); 
// }
// myFunc();




//=====================================Call,Apply,Bind Method Chapter ========================================//
// Call,Apply,Bind Method ---> use hote hai jab bhi hame kisi object me function ke add karte hai us se method bolte hai or add karne ke baad ham us function ke relative object ki property ko use karna ho tab Call,Apply,Bind Method ka use karte hai ?


// Call --> Call function ye ek javascript ka inbuilt function hai ?Call function ka use kar ke ek object ka dusre object ki property use karne ke liye work kiya jata hai ? Call Apply Same work Karte hai ? Call Apply me itna fark hai jab Call Stap by Stap o apne argument ko call karwata hai Apply method me Sencod Argument Array me hota hai itna hi fark hai dono me Call ke ander ham koi Bhi Array ka use nhi karte hai ?

// this keyword --->  ka matlab hota hai us object ya variable ka reference this.firstName means object me jo firstName hai us se firstName lega us ka reference lege this ye hota hai ?

let fullName = function(city,contry){ // function bhar bhi create kar sakte hai aise? parameter bhi de sakte hai
    // return `${this.fisrtName} ${this.lastName}`; //bher function tu is tara se koi bhi object print ?

    return `${this.fisrtName} ${this.lastName} ${city} ${contry}`;

    // return `${this.fisrtName} ${this.lastName} ${this.age} ${city} ${contry}`;
   }

let student1 = {
    fisrtName :"Tausif",
    lastName : 'qureshi',
// fullName : function(){   //fullname key hai function value? function ander bhi create kar sakte hai aise?
// return `${this.fisrtName} ${this.lastName}`
// }
}
// console.log(student1.fullName()) //normal calling function ander function tu aisa call?

let student2 = {
    fisrtName :"Javed",
    lastName : 'qureshi',
    age :24,

    // fullName : function(){ //har object me function babane ki zarurat nhi student1 ka hi use kar sakte hai ?
    //     return `${this.fisrtName} ${this.lastName}`
    //     }
    
}
// console.log(student2.fullName()) //student 2 ke liye call hora ye function only ?

// console.log(fullName.call(student2)) //bher function tu is tara se koi bhi object print ?

// console.log(fullName.call(student1, "Mumbai","India")) //bher function create tu aise call hoga ?

// console.log(fullName.call(student2,'Heydrabaad','India'))

// console.log(fullName.call(student2,student2.age,'Heydrabaad','India')) //bher function create tu aise bhi call kar sakte hai ? 'Heydrabaad','India' argument hai ye ?  




// console.log(student1.fullName.call(student1)) //Call Method ka use kar ke ek object ka dusre object ki property use karne ke liye use kiya jata hai ?object ke ander function defiend tu ais call ?

//  console.log(student1.fullName.call(student2)); //aisa bhi call kar sakte hai ? koi bhi object print kar sakte hai ? ander object defind tab ?



//==============================harshi Start Call Method=============================================//

// function about(hobby, favMusician){
//     console.log(this.firstName, this.age, hobby, favMusician);
// }
// const user1 = {
//     firstName : "harshit",
//     age: 8,   
// }
// const user2 = {
//     firstName : "mohit",
//     age: 9,

// }

// // Call
// about.call(user1, "guitar", "bach");
// about.call(user2, "guitar", "bach");






//Apply --> is Apply me ham Array ki value Pass karte hai means Apply me argument ki second value ko ham Array me rahkte hai ?  Call Apply Same work Karte hai ?


// let fullName = function(city,contry){ // function bhar bhi create kar sakte hai aise?
//     return `${this.fisrtName} ${this.lastName} ${this.age} ${city} ${contry}`;
//    }
//  function fullName (city,contry){ // function declaretion
//     console.log (`${this.fisrtName} ${this.lastName} ${this.age} ${city} ${contry}`);
//    }

// let student1 = {
//     fisrtName :"Tausif",
//     lastName : 'qureshi',
  
// }

// let student2 = {
//     fisrtName :"Javed",
//     lastName : 'qureshi',
//     age :24
// }

// fullName.apply(student1,["Mumbai","India"])//aisa bhi call kar sakte hai but return nhi console function me hi karna hoga?

// console.log(fullName.apply(student2, ["Mumbai","India"])) //Applay me itna fark hai second argument Array me dena hota hai ? Multipal Array lihk sakte hai yaha pe ? retrun wala function commit is tara se call tu undefiend ye ga?

// console.log(fullName.apply(student2,[student2.age,],['Heydrabaad','India'])) 


//==============================harshi Start Apply Method=============================================//

// function about(hobby, favMusician){
//     console.log(this.firstName, this.age, hobby, favMusician);
// }
// const user1 = {
//     firstName : "harshit",
//     age: 8,   
// }
// const user2 = {
//     firstName : "mohit",
//     age: 9,

// }

// // apply
// about.apply(user1, ["guitar", "bach"]);




//Bind -->  Ye Method hame ek new function bana ke deta hai ?ye method hame ek new fiunction retrun karta hai ?or function ke result ko copy bana ke rahkta hai or baad me us se invok karne pe execute hote hai ? ye method function ke joind kar ke rahkta hai ? bind hamre result ko save kar ke rahkta hai ek varible me or us varible ko jab bhi ham invoke means function ko call karna hota hai ?

// let fullName = function(city,contry){ 
//     return `${this.fisrtName} ${this.lastName} ${this.age} ${city} ${contry}`;
//    }

// let student1 = {
//     fisrtName :"Tausif",
//     lastName : 'qureshi',
  
// }

// let student2 = {
//     fisrtName :"Javed",
//     lastName : 'qureshi',
//     age :24
// }

// // console.log(fullName.bind(student1, "Mumbai","India")); //aise pura function return hoga ?

// let bindCall = fullName.bind(student1, "Mumbai","India");
// console.log(bindCall()); // is ko bolte hai invoke karna Bind aise work karta hai

// let bindCall2=fullName.bind(student2,student2.age,'Heydrabaad','India')
// console.log(bindCall2());


//==============================harshi Start Bind Method=============================================//

// function about(hobby, favMusician){
//     console.log(this.firstName, this.age, hobby, favMusician);
// }
// const user1 = {
//     firstName : "harshit",
//     age: 8,   
// }
// const user2 = {
//     firstName : "mohit",
//     age: 9,

// }

// //Bind
// const func = about.bind(user1, "guitar", "bach");
// func();















































































