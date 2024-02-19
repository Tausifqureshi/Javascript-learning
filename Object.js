
// object bhi ek referance type hai?object bhi memory me aise hi strore hota haio jaise array hota hai share referance types ek hi tara se store hote hai memory me? obejct me indexing nhi hota hai?is me array bhi store kar sakte hai?
// const key = "email"; //key add hori emails ki
// let person = {
//     name: 'Tauisf',
//     age: 24,
//     address: "Mumbai",
//     hobbies:["Crickect" ,"Bookread" ,"coding" ,"Game"],
// }

// person.contec= 8429097693; //add peoperty object me p
// person[key]= "tausifqureshi@gaml.com" //aise key value add kar sakte key email aye gi
// person.lastName = "javed"  //aise bhi add karte hai but ye normal add hoga is se?

// document.writeln(person.hobbies)
// console.log(person["name"]) //aise bhi access kar sakte breaket notation se javascript me key string me hi hoti hai?
// console.log(person) //pura object print hoga is se?




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



//nested destructuring?
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

// function printDetails({firstName,lastName,age}){  //parameter desturcturing 
//     console.log(firstName)
//     console.log(lastName)
//     console.log(age)

// }
// printDetails(perosn)















