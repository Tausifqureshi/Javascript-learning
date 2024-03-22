//js me hamre pass data types hote hai ?

//primitive  data types hai ye?
//String, Number, Booleans, Undefiend, Null, ?

let num1 = 6;//primitive  data types hai ye num1 me change tu num2 me change nhi hoga only num1 me hi change hoga?   
let num2 = num1;
console.log(num1); 
console.log(num2);
num1++;      //Num1 me ek Increment kar re hai but num2 me koi effect nhi hoga only num1 one hi chang hoga?
console.log(num1) //primitive  data types hai ye num1 me change tu num2 me change nhi hoga only num1 me hi change hoga?  
console.log(num2)

//string Variable creating
let str = "Tausif";
console.log(str);
console.log(str.length) //langth chacking use ?
console.log(typeof (str)); //type checking method now


//Number Variable creating
let num = 100;
console.log(num);
console.log(typeof (num));


//undefiend----> jab ham variabal bana dete hai or us se value assing nhi karte to undefiend ata hai but const ke sat aisa nhi kar sakte us se value dena hi padta hai
// let num;
// console.log(num)

//null---->  is ka matlab hota hai kuch nhi? null typesof me objrct deta hai ye object nhi ek bug error hai ye?
// let num = null;
// console.log(typeof num , num)

//bigint---> ES2020 me aya js me ?
// let num1 = BigInt(13)
// let num2 = 14n; //aise bhi bigint bana sakte hai?
//  console.log(num1*num2)



// =================================boolean========================================//
//boolean----->ture are false retun karta hai?
//  use comparison operator ke sath use hote hai boolean?
// let x = 5;
// let y = 5;
// let z = 6;
// let c= '6'

// console.log(x==y)     //== only types check karta hai
// console.log(x==z)

// console.log(x===z) //value ke sath types bhi check karta hai ye operator

// console.log(z===c)

//!= ye cheak karta hai value alag alag hai tu true deta hai agar value same tu false aye ga ye ulta hai work karta hai?
// let x = 5;
// let z = 6;
// console.log(x!=z)

// !== ye bhi != ki tara hi work karta hai  but ye value ke sath type bhi check karta hai?
// let x = 5;
// let z = 6;
// let c = "6";
// let b = 5;
// console.log(x!==z)

// console.log(x!==b)
// console.log(x!==c) // datatype bhi chech hora hai ulta hi ye dono operator work karta hai agar value same tu false alaga alag tu ture deta hai ye dono operator

//string
//number

//symbal

//types aise check karte hai
let firstName = "tausif";
// console.log(typeof firstName)



//ternery operator?
// let age = 5;
// let store = age >=5 ? "coffe" : "milk";
// console.log(store)


// and or operator and && or||
// let Name = "Tausif";
// let age = 24;

// if(Name[0]==='T' && age >= 23){   
//     console.log("name and age valid");

// }else{
//     console.log("name and age not valid")
// }




//============================================ Reference data-type? ==========================================//

// Reference data-type? means ek variable me chang to dusre me chang hoga?
//Array object,
let array1 = ['item1', 'item2','item3'];   //array hai
    let array2 = array1 //aisa karne se  array1 me add tu array 2 me bhi hoga q ke Array reference ?
    console.log(array1)
    console.log(array2)
    array1.push('item4')  //array1 one me push lekin array2 me bhi effect hoga is se q ke ye reference type hai
    console.log(array1)
    console.log(array2)


 // let array1 = ['item1', 'item2','item3'];  //aisa karne se reference types me bhi add nhi hoga alag Array banane se?
  // let array2 = ['item1', 'item2','item3']; //aisa karne se reference types me bhi add nhi hoga alag Array banane se?
    // console.log(array1)
    // console.log(array2)
    // array1.push('item4')
    // console.log(array1)
    // console.log(array2)

//===================================================== Non-primitive  ===============================//

//Non-primitive Data types javascript ? means ek variable me chang to dusre me chang hoga?
// Object, Array 
// Array creating
let city = ["mumbai", "hyderabad", "lucknow", "gujarat", "secunderabad"];
console.log(city)
console.log(city[0])
console.log(city.length) //Array length property
console.log(Array.isArray(city)) //Array Checking Property True and false




//object creating 
let mySelf = {
  firstname: "Tausif",
  lastname: "Qureshi",
  age: 24,
  hobbies: "Cricket"
 
};

console.log(" My Name is " + mySelf.firstname + " I Am " + mySelf.age + " Years Old" + " Favourite Game " + mySelf.hobbies);
console.log(typeof (mySelf));




















