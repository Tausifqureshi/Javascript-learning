
// OOPs in  me hi ata hai Constructore bhi

// ChatGPT Se liya hua Syntax ---> Prototype JavaScript mein ek fundamental concept hai jo object-oriented programming mein bahut important hai. Prototype ka use karke hum objects ko inherit kar sakte hain aur ek object se dusre object ko create kar sakte hain, jo ki JavaScript mein bahut flexible aur powerful feature hai.


// ChatGPT Se liya hua Syntax ---> Prototype in JavaScript.
// JavaScript me har ek object ke paas ek prototype hota hai, jo use inheritance ka mechanism provide karta hai. Har object ek prototype object se inherit karta hai, aur ye prototype chain ke through linked hota hai.

 
// ChatGPT Se liya hua Syntax ---> Understanding Prototype Chain
// Prototype chain me har ek object apne prototype object se properties aur methods inherit karta hai. Jab aap kisi property ya method ko access karte hai, JavaScript pehle current object me dekhta hai, fir uska prototype object me jaata hai, aur isi tarah se chain ke through upar jaata hai jab tak property mil jaati hai ya prototype chain khatam na ho jaaye.


// ChatGPT Se liya hua Syntax ---> Prototype inheritance JavaScript mein object-oriented programming ka ek important concept hai, jiske through hum ek object ko dusre object se inherit kar sakte hain. Ismein ek object dusre object ke properties aur methods ko use kar sakta hai, jo ki JavaScript mein bahut flexible aur powerful feature hai.

// ChatGPT Se liya hua Syntax ---> Prototype Inheritance in JavaScript.
// Prototype inheritance ka concept prototype chaining par based hai. Har ek object JavaScript me ek prototype property rakhta hai, jo ek reference hota hai dusre object ka. Jab bhi aap kisi object ka property ya method access karte hai, JavaScript pehle current object me dekhta hai, fir uska prototype object me jaata hai, aur isi tarah se chain ke through upar jaata hai jab tak property mil jaati hai ya prototype chain khatam na ho jaaye.




// __proto__  ----> is use hota hai ek object se other object ki property and method ko link kar ke use karne ke liye ?


let blankObj = {}; // is tara se object banae se jab ham console open karte hai tab hame jo javascript ka har ek ke sath object-protype hai us me jitni bhi property hai dirct show hogi ?
// console.log(blankObj);



function Student(fName, lName) { //Dusra Constructor function ?
    this.firstName = fName,
    this.lastNmae = lName
}


function Person(fName, lName) {
        this.firstName = fName,
        this.lastNmae = lName

        // this.fullName = function () { 
        // return `${this.firstName} ${this.lastNmae}`;

        // } // but is me ek problem hai jo hamne fullName ka method banaye hai o bhi Person use kar ke jitne object banye ke us me copy peste ho gaye ga hai is progrmming me bolte hai dry dont repit your code aise code repit nhi hona us se memory me jaga leta hai is ke suletion hai jab bhi ham function banye ke us ko object ka ander nhi rahk ke prototype me rahkte means constructor ke ander ?
}

Student.prototype.country = function(){ //Student wale me add hora ye function ?
// return `${this.firstName} ${this.lastNmae}`; 
console.log('Code executing this function')
}

Student.prototype.setName = function (changeName) {
  return this.name = changeName;
};// khabi kisi ka name ya other property chnage karna ho tu aise karte hai or kski bhi object ke sath use kar sakte hai inheritance kar ke dusre dusre object ke sath use kar sakte hai ?

let studentOlder = new Student('Java','Qureshi'); //Student function wale ka ye object ?
// console.log(studentOlder);

studentOlder.setName("niuce") //name change function call 
console.log(studentOlder);

// Person.prototype.__proto__ = Object.create(Student.prototype); //is se ye hora hai student ki property and method ye use kar sakta hai person constructor ? agar Person ki property and method ko Stydent use Student.prototype.__proto__ = Object.create(Person.prototype); karna hoga or jitne bhi method Add karna hoga prototype me o Person ke us me karna hoga ?
// console.log(studentOlder.country()); //Country wala function call student ke sath ?
Object.setPrototypeOf(Person.prototype, Student.prototype); //same kam hi hora hai line number 49 wala .

Person.prototype.madein = 'india'; //proptotype me property bhi add kar sakte hai means constructor ke ander ? Preson wale me add hora hai ?
// Object.setPrototypeOf(Person, { 
//   prototype: {
//     madein: 'India'
//   }
// });


Person.prototype.fullName = function(){ //is bolte hai prototype me method rahkna means constructor ke ander aye ga ye method ?  is se dry nhi hoga code dry dont repit your code aise code repit nhi hona ?
return `${this.firstName} ${this.lastNmae} ${this.madein}` //add ki property return bhi kar re hai madein ko ?
}

 

let autherName = new Person('Tausif','Qureshi'); // Constructor object banane se jo javascript ka har ek ke sath object-protype hai us me jitni bhi property hai dirct show nhi hoti hai ? jab bhi ham constructor function se obejct banate hai tu constructor function apne naam ka hi ek prototype bana leta hai us ke baad jo prototype show hota hai o javascript ka inbuilt Prototype hota hai har ek ke sath us ki property constructor wale prototype ke baad show hoti hai ? is ko bolte hai prototype chaining constructor function ka prototype javascript ke inbuilt object wale prototype se conect hota hai ?

// console.log(autherName);
// console.log(autherName.country()); //Student ka method is Person ke sath use hora hai __proto__ use karne se ?

// console.log(autherName.fullName()); //kisi bhi object ke sath call kar sakte ye method ? ye method ab object me nhi ara hai ye constuctor ke ander ara hai ? jo fullName ka method ander defind hai us ko commit open kar ke console kar re ge tu o method constructor me nhi balki object me aye ka jaisa fisrtname,lastName are hai ? add ki hoho property bhi use kar sakte hai madein wali ?



// let autherName1 = new Person('Hayderabaad','kodad'); // constructor function me jitne bhi property and method defind kiya te o authername and authername 1 dono object me copy huye jitne bhi object defind kar re ge un sub me copy ho jaye ge this.lname ye sub and fullName ka method bhi ? 

// console.log(autherName1)
// console.log(autherName1.fullName()); //kisi bhi object ke sath call kar sakte ye method ?





//======================================= simple Object pe use ___proto__  ========================================//


let obje = {
    name : "Tausif",
    lastName : "Qureshi",
}


let obj2 = {
    owner : 'Best',
    last : 'Qureshi', 

    // about: ()=>{ //create method means function
    //   alert("Run the method")
    // }
}
// console.log(obje)
// console.log(obj2)

// obje.__proto__ = obj2; // __proto__  ----> aise use hota hai ek object se other object ki property and method ko link kar ke use karne ke liye ? obje obj2 ki shari property and method use kar ra hai ? is ko hi bolte hai prototype-inheritance ?

Object.setPrototypeOf(obje,obj2) //same hi kam hora .__proto__ but ye setprototype modern hai ab is se hi use kar te hai ?

// obj2.__proto__ ={ //ek propaty ka bhi prototyp se add kar sakte hai ? is ka prototype object set kar re hai ?
//     autherName : "English",
// };
// console.log(obje.autherName) //protypes set constructor ke ander 'English' ?
   
Object.setPrototypeOf(obj2,{ 
  autherName: 'Maths' //same kam upper wala kim tara property add kar re hai  but ham is me setprototypeof ka use kar ke q ke ye modern hai ?
});
// console.log(obje.autherName)

// obje.about();
// console.log(obje.owner) // __proto__   ek object se dusre object ki property bhi use kar sakte hai ? 



// ======================================================================================================//
// object ke prototype me method create jo jo object ke sath use kar sakte hai q ke hamne prototype me ye method cerate kar diya hai ? ys code ko block kar sakta hai is tara se share code ko ?
      //   Object.prototype.tausif = function() {
      //      console.log("I am All time present");
      // }
      
    var person = {
        name: 'Alice',
        age: 30
    };
    
    var car = {
        brand: 'Toyota',
        model: 'Corolla'
    };
    
    // person.tausif(); // Logs: "I am All time present"
    // car.tausif();    // Logs: "I am All time present"
    


// ==========================================================================================//
// Array ke bhi prototype set koi bhi arry use us me ye call hoga ? is se use karna jayda sahi nhi hai Prototype ka is se code me 

Array.prototype.power = function() {
  // "this" refers to the array being called upon
  return this.map(function(num) { //this is me jo bhi varible is ko use kar re ga jaise ke arrayInstance ko refere kar ra hai jo jo call us ko refere ka ke ga this keyword refere ke liye hi use hota hai?

    return num ** 3;  //power ke liye 3 use ? squer ke liye 2 use ?
  }); //apna khud ka banya hua method jo hame har number ka power nikal ke dega ham is se kisi bhi array ke sath use kar sakte hai only array ke sath hi use ?
};

// Create an array instance to call the sumArray method
let arrayInstance = [8,9,12];
let storeValue = arrayInstance.power();
// console.log(storeValue);  


let secondArray = [2,4,5];
// console.log(secondArray);
let accessValue = secondArray.power();
console.log(accessValue);  






// ==========================================================================================//
//String ke prototype me add method kisi bhi string ke sath use kar sakte hai ? is se use karna jayda sahi nhi hai Prototype ka 

String.prototype.trimLength = function() {
  //Remove leading and trailing whitespace

  // return this.trim().length; //this is me jo bhi varible is ko use kar re ga means call kar re ga jaise ke tringLength ko refere kar ra hai jo jo call us ko refere ka ke ga this keyword refere ke liye hi use hota hai?

  return this.replace(/^\s+|\s+$/, '').length; //same kam kar ra hai trim ka hi ?
};



let stringLength = "Javascript          "
console.log(stringLength)
console.log(stringLength.length);
let valueTrim = stringLength.trimLength();
console.log(valueTrim.length)



// ==================================== parctical Exmple =======================//

      // Simple Object Create ?
      let num = {
        name: "Tausif",
      };
    //   console.log(num)

      // Constructor Function ?
      function Show(fName, lName) {
        (this.name = fName),
          (this.name2 = lName),
          (this.fullName = function () {
            //dirct aisa bhi add kart sakte function jab ham constructor create karte hai tab hi ?
            return this.name + " " + this.name2;
          });
      }
      let save = new Show("Tausif", "qureshi");
      //  console.log(save.fullName());
    //   console.log(save);



      let array1 = ['a'];
    //   console.log(array1)

              function Pizza(name) {
                  this.firstName = name;
              }
         const orderName = new Pizza('Chicken pizza');
        //  console.log(orderName);



