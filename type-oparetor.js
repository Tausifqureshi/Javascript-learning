// primitive data type in javascript ? means hota hai ek variabe me chang value to dusre me chang nhi hoga primitive data types me 
//String, Number, Booleans, Undefiend, Null, Bigint, Smybol.
 
let num1 = 6;    
let num2 = num1;
console.log(num1);
console.log(num2);
num1++;             //Num1 me ek Increment kar re hai but num2 me koi effect nhi hoga only num1 one hi chang hoga?
console.log(num1)
console.log(num2)




//string Variable creating
let str = "Tausif";
console.log(str);
console.log(str.length)
console.log(typeof (str)); //type checking method now


//Number Variable creating
let num = 100;
console.log(num);
console.log(typeof (num));



//Boolean Variable creating
let blen = true;
console.log(blen);
console.log(typeof (blen));



//Undefiend Variable creating
let und;
console.log(und);
console.log(typeof (und));




//Null Variable creating
let nul = null;
console.log(nul);
console.log(typeof (nul));





// Reference data-type. is ko Privitiv-Data type bolte hai. means ek variable me chang to dusre me chang hoga?
//Array object,function

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




// =================================================================================//
//Upper wale niche wale same hi hai upper wala replit se copy pest

// type of operator --> means kon sa type hai string number object ye sub bata ta hai type of kya hai?

// data types (primitive data types)
// string "Tausif"
// number 2, 4, 5.6 
// booleans 

// undefined ---> 
// let firstName;
// console.log(typeof firstName);
// firstName = "Tausif";
// console.log(typeof firstName, firstName);

// null 
// let myVariable = null;
// console.log(myVariable);
// myVariable = "Tausif";
// console.log(myVariable, typeof myVariable);
// console.log(typeof null);


// BigInt  ---> ye javascript me abhi aya hai lets hai 2020 me aya hai? ye bigint number store karne ke liye 
                //use hota hai ;

// let myNumber = BigInt(12);
// let sameMyNumber = 123n;
// console.log(myNumber); 
// console.log(Number.MAX_SAFE_INTEGER); // ye hame bata hai ham kitna bada number javascript store kar sakte hai?
// console.log(myNumber+ sameMyNumber);


// Symbol
//Checking type off data 
// let age = 22;  // type of Number creating
// let firstName = "Tausif"; //type of string creating
// console.log(typeof age);

// convert number to string. ---> number se string me change hora hai?
// age = age + "";
// console.log(typeof(age)); "22"


// convert string to number.  ---> string se number me change hora hai?
// let myStr = +"34";
// console.log(typeof myStr);

// let age = "18"; ---> string se number me change hora hai?
// age = Number(age);
// console.log(typeof age);

 

