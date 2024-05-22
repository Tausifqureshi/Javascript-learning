// <------------------------------>Object Method<-------------------------------->
// Method ---> method bolte hai kisi object ke ander function Create hai us se method bolte hai ?

// this keyword --->  ka matlab hota hai us object ya variable ka reference this.firstName means object me jo firstName hai us se firstName lega us ka reference lege this ye hota hai ?

// function personInfo(){  //function bher create hai ? personInfo,
//     console.log(`person name is ${this.firstName} and age is ${this.age}`);
// }

const person1 = {
    firstName : "Tausif",
    age: 24,
    // about: personInfo, // object ke ander jo about hai o key hai or personInfo () ye function hai jo value ki tara set kar re hai personInfo upper jo bher function ki tara use hora hai line number 6 me ?

    about:function(){ //about key hai function value jaisa object me hota  hai key value paira ? ander create method means function ?
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
    //aise bhi create kar sakte hai function ander hi? is method ko har object me use karne ke liye Call,Apply,Bind ke sthe hi use kar sakte hai only sirf jo ye function ander hai is liye 3 method ka use hoga only bher ke liye  personInfo se hi work hoga har object ke luye 
    }

}

const person2 = {
    firstName : "Qureshi",
    age: 18,
    // about: personInfo
}

const person3 = {
    firstName : "Iqbal",
    age: 17,
    // about: personInfo
}
 
// personInfo() //---> direct call karne se undefiend aye ga 

person1.about(); //function call hore jis bhi object ke sath function ke sath defiend hai us se sath call hore hai ?
// person2.about();
// person3.about();






// <------------------------------>Object Creating Method<-------------------------------->

// Object.keys();  ---> itared karne ke liye use hota hai ?
// Object.values(); ---> 
// Object.entries(); ---> 

// let myObj = {
//     name: 'Tausif',
//     age : 24,
//     perpation : 'Web Developer'
// }
// console.log(myObj) /pura object print hoga?
 
//  Object.keys(myObj).forEach(function(print){   //function eynunemus use jin ka name nhi hota us se bolte hai ?
// //  console.log(print) // only key print hogi is se ?
//  console.log(myObj[print]) // only value print hogi is se ?

// //  console.log([print],myObj) // key Value  print hogi is se ?
//  })

 //Object.Value() Use; ----> Array ki fom me value data hai fir ham is me koi bhi oppressiom kar sakte hai loop arr pe chalna ho ya kcuh bhi array ke method use karna ho ?
//  let value = Object.values(myObj);
//  console.log(value)
//  console.log(Array.isArray(value)) //Checking Array True and false retrun This method ?


// Object.entries() Use ---> Ye Pura ki pura array deta hai kitne array hai us ki length deta hai ? fir ham is me koi bhi oppressiom kar sakte hai loop arr pe chalna ho ya kcuh bhi array ke method use karna ho ?
// let entries = Object.entries(myObj);
// console.log(myObj) 
// console.log(entries[1]); //Key Value dono print hoge
// console.log(entries[1][1]); //only Value dono print hoge




// <------------------------------>Object Cloning object assing<-------------------------------->
//object.assing --> is se use kar ke object cloning kar sakte hai? is ko use karne se ek object me change tu dusre object me change nhi hoga q ke object refereance type hote hai ek me change tu dusre me change hota hai ? 

// const obj = {
//     key1 : 'value1',
//     key2 : 'value2'
// }
// //  let obj1 = obj;
// //  let obj1 = {...obj} //sperad operator use obj me add tu obj1 me add nhi hoga cloning bolte is se?
// let obj1 = Object.assign({},obj) // is tarike se bhi cloning karte hai ?
//  obj.ke3 = 'Value3' //ek me change tu dono me change hoga q ke object reference type hota hai?

//  console.log(obj)
//  console.log(obj1)



//<------------------------------>Object Property Getter and Setter<-------------------------------->
// Getter and Setter ---> Function Jaisa hi hota hai ye Getter and Setter ? ye propeter object ki value ko read and set karne ke liye use hoti hai ? is jayda tara use obejct-constructor me use hota hai ? getter se value set karte hai ? setter se value ko set karte hai ?

// let proson = { 
//     firstName : 'Tausif',
//     lastName : 'Qureshi',
//     color : " Brown",

//     // fullDetails : function() { //is ko method bolte hai ?
//     //     return `${this.firstName},${this.lastName}`;
//     //}

//    get getfullDetails(){ //is ko method bolte hai ?jab get ka use tu functio aisa banate hai ?getter ka use hota hai property ko read karne ke liye ?
//         return `${this.firstName}, ${this.lastName}`;
//     },

//     set setFullDetails (para){  //set ek hi parameter leta hai? agar multiple parameter tu bar bar para ko hi use karna hoga ?
//      this.firstName = para.fn, //fn firstName
//     this.lastName = para.ln; //ln lastName ,
//     }
    
// }
// proson.setFullDetails = {fn: "Iqbal", ln : "English"} //multipal parameter hai tu value aise add karte hai ?

//proson.setFullDetails = 'Javed' //aise add ? 

// console.log(proson.getfullDetails)//property add hone ke baad console lineNumber 265 and 267 dono same hi call joge?

// console.log(proson) //pura object print hoga aise ?

// console.log(proson.lastName) //use Dot notetion ?

// console.log(proson['firstName']) ///aise bhi access kar sakte breaket notation se javascript me key string me hi hoti hai ?

// console.log(proson.fullDetails()) ?  //pura function aye ga is ?

// console.log(proson.getfullDetails) //get use tu aise console se call karwate hai ?
