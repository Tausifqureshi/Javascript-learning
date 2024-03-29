//Javascript-Object ---> js me kahi data types hote hai us me se ek data type hai object ? object ka use bhi key value ka store karne le liye kiya jata hai ? 
// object bhi ek referance type hai ? object bhi memory me aise hi strore hota haio jaise array hota hai share referance types ek hi tara se store hote hai memory me ? obejct me indexing nhi hota hai ? is me array bhi store kar sakte hai ? Objecr itareble nhi hota hai ?


// const key = "email"; //key add hori emails ki
let person = {
    name: 'Tauisf',
    age: 24,
    address: "Mumbai",
    hobbies:["Crickect" ,"Bookread" ,"coding" ,"Game"],
}

// person.contec= 8429097693; //add peoperty object me 
// person[key]= "tausifqureshi@gaml.com" //aise key value add kar sakte key email aye gi ?
// person.lastName = "javed"  //aise bhi add karte hai but ye normal add hoga is se ?

// document.writeln(person.hobbies)
// console.log(person["name"]) //aise bhi access kar sakte breaket notation se javascript me key string me hi hoti hai?
console.log( typeof person) //pura object print hoga is se or types bhi check kar re hai ?




// <------------------------------>Object iterable chepter<-------------------------------->
//iterate karna means loop chalana hota hai? object ko iterated karne ke liye ham 2 loop use kar hai?
// [1] for in loop
// [2] object.keys

// const person = {
//     name: 'Tauisf',
//     age: 24,
//     address: "Mumbai",
//     hobbies:["Crickect" ,"Bookread" ,"coding" ,"Game"]
// }

// for in loop 
// for(let b in person){
    // console.log(b) //only key key aye gi name age hobbies ?

    // console.log(person[b]) // only value ke liye aisa use karan hota hai?

    // console.log(b,person[b]) key value ke liye aisa use karna padta hai?
// }



//object.keys loop use?

// const person = {
//     name: 'Tauisf',
//     age: 24,
//     address: "Mumbai",
//     hobbies:["Crickect" ,"Bookread" ,"coding" ,"Game"]
// }
//  console.log(Object.keys(person)) //person object ek array me value retrun kare ga is se?




// <------------------------------>Object Speard oparetor chepter<-------------------------------->
//object me ek key ek bar se jayda nhi ho sakti?
// const obj1={
//     key1: "value1",
//     key2: "value2"
// }
// const obj2={
//     key3: "value3",
//     key4: "value4"
// }
// const obj3={...obj1,...obj2,key5:"value5"}; // speard hoge obje3 me jari value? new key bhi add kar sakte hai?

// console.log(obj3)
// console.log(typeof obj3) //types bhi check hora hai is se?

// const newObject = {..."abcdefgijklmnpqrstuvwxyz"} // agar khabi alpha bate ki index dhakna ho tu aisa use kar sakte hai?only string pe hi work karta hai number pe nhi q ke intiger number itarebal nhi hote hai agar{...1 2 3 } aisa speard kiye tu?
// console.log(newObject)



// <------------------------------>Object destructuring chepter<-------------------------------->

// const person = {
//         name: 'Tauisf',
//         age: 24,
//         address: "Mumbai",
//         hobbies:["Crickect" ,"Bookread" ,"coding" ,"Game"]
//     }

//const{name:var1 ,age:var2,...var3}=person; //destructurin hora yaha se alag alag variabal ban tre hai?varibal ka naam aise change karate hai [var1:] kar ke? ...sperad oparetor use kar ke bachi hoho value var3 me jaye gi
//   console.log(var1);

//   console.log(var3)// speard oparetot use bachi hohi value is me aye gi adress hobbies?



//==============================nested destructuring object==========================================?
// const users= [             // ek array me kuch object store user ke ?

//           {userId: 1, firstName: "Tausif", gender:"Male"},
//           {userId: 2, firstName: "Qureshi", gender:"simple" },
//           {userId: 3, firstName: "Iqbal", gender:"hello"}
// ]


// const [ user1,user2,user3]= users
//  console.log(user1) //simple destructuring ye 

// const [{firstName, userId},{gender}] =users // is ko bolte hai nested destructuring ham object ke ander selere hai?firstName index[0]ka hai or gender index[2] ka hai  q ke hai ek ,user  kar re hai  simple wala aye ga ,, use tu hello aye ga kuch nhi use to male hi aye ga?

// console.log(firstName) //
// console.log(userId) //first wali user id print hogi is se?

// console.log(gender)







// <------------------------------>Object inside Array<-------------------------------->
//object ke ander Array create karen matlab ya fir array ke ander bhut share object create karan ye hota hai object inside array ? React me kafi use full hai ye method or real world application me bhi?

// const user= [             // ek array me kuch object store user ke ?

//           {userId: 1, firstName: "Tausif", gender:"Male"},
//           {userId: 2, firstName: "Qureshi", gender:"Male" },
//           {userId: 3, firstName: "Iqbal", gender:"Male"}
// ]
//   console.log(user[0])

// for(let i =0; i<user.length; i++){
//     console.log(user[i])
// }

// for(let i of user){
    // console.log(i)
//     console.log(i.firstName)  //name id jo bhi print karwana kar sakte hai?
// }
 
// for(let i in user){  //  koi bhi loop use kar sakte hai?
//     console.log(user[i])
// }
//  let i =0;
//  while (i<user.length) {
//     console.log(user[i])
//     i++ 
    
//  }



// <------------------------------>parameter destructuring<-------------------------------->
//is object me use kiya gaya hai?
//react me kafi usefull method hai ye?

// let perosn ={
//     firstName: "Tausif",
//     lastName: "Qureshi",
//     age: 24,
//     gender: "Male",
// }

// function printDetails({firstName,lastName,age}){ //parameter desturcturing aisa hi karna chaiye
//     console.log(firstName)
//     console.log(lastName)
//     console.log(age)

// }
// printDetails(perosn)



// <------------------------------>Object Creating Method<-------------------------------->

// Object.keys();  ---> itared karne ke liye use hota hai ?
// Object.values(); ---> 
// Object.entries(); ---> 

let myObj = {
    name: 'Tausif',
    age : 24,
    perpation : 'Web Developer'
}
// console.log(myObj) /pura object print hoga?
 
//  Object.keys(myObj).forEach(function(print){   //function eynunemus use jin ka name nhi hota us se bolte hai ?
// //  console.log(print) // only key print hogi is se ?
//  console.log(myObj[print]) // only value print hogi is se ?

// //  console.log([print],myObj) // key Value  print hogi is se ?
//  })

 //Object.Value() Use; ----> Array ki fom me value data hai fir ham is me koi bhi oppressiom kar sakte hai loop arr pe chalna ho ya kcuh bhimarray ke method use karna ho ?
//  let value = Object.values(myObj);
//  console.log(value)
//  console.log(Array.isArray(value)) //Checking Array True and false retrun This method ?


// Object.entries() Use ---> Ye Pura ki pura array deta hai kitne array hai us ki length deta hai ? fir ham is me koi bhi oppressiom kar sakte hai loop arr pe chalna ho ya kcuh bhimarray ke method use karna ho ?
let entries = Object.entries(myObj);
// console.log(myObj) 
console.log(entries[1]); //Key Value dono print hoge
console.log(entries[1][1]); //only Value dono print hoge






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






// <------------------------------>Object option chaining<-------------------------------->

// let user ={
//     firstName: "Tausif",
//     // address: {houseNumber: 12334}, //object ke ander object hai ye ?
// }
// console.log(user.firstName);
// console.log(user?.address?.houseNumber)//line number 233 comment karne se bhi error nhi aye ga undefined q keis liye ham is se use kar re hai react me kafi use hota hai jab ham usestate ya useeffect karte hai ? is ka use hota hai hested object ke liye is hi option chaining bolte hai ?

// console.log(user.address.houseNumber) //object ke ander ki value aise milti hai ?
// console.log(user['firstName']) //aise bhi print karwa sakte hai ?



//<------------------------------>Object Property Getter and Setter<-------------------------------->
// Getter and Setter ---> Function Jaisa hi hota hai ye Getter and Setter ? ye propeter object ki value ko read and set karne ke liye use hoti hai ? is jayda tara use obejct-constructor me use hota hai ? getter se value set karte hai ? setter se value ko set karte hai ?

let proson = { 
    firstName : 'Tausif',
    lastName : 'Qureshi',
    color : " Brown",

    // fullDetails : function() { //is ko method bolte hai ?
    //     return `${this.firstName},${this.lastName}`;
    //}

   get getfullDetails(){ //is ko method bolte hai ?jab get ka use tu functio aisa banate hai ?getter ka use hota hai property ko read karne ke liye ?
        return `${this.firstName}, ${this.lastName}`;
    },

    set setFullDetails (para){  //set ek hi parameter leta hai? agar multiple parameter tu bar bar para ko hi use karna hoga ?
     this.firstName = para.fn, //fn firstName
    this.lastName = para.ln; //ln lastName ,
    }
    
}
proson.setFullDetails = {fn: "Iqbal", ln : "English"} //multipal parameter hai tu value aise add karte hai ?

//proson.setFullDetails = 'Javed' //aise add ? 

console.log(proson.getfullDetails)//property add hone ke baad console lineNumber 265 and 267 dono same hi call joge?

// console.log(proson) //pura object print hoga aise ?

// console.log(proson.lastName) //use Dot notetion ?

// console.log(proson['firstName']) ///aise bhi access kar sakte breaket notation se javascript me key string me hi hoti hai ?

// console.log(proson.fullDetails()) ?  //pura function aye ga is ?

// console.log(proson.getfullDetails) //get use tu aise console se call karwate hai ?







