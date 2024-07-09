// ChatGPT Se liya hua Syntax ---> JavaScript mein data types ko samajhna zaroori hai kyunki yeh programming mein data ko handle karne ka tarika bataate hain. JavaScript mein do tarah ke data types hote hain: Primitive aur Non-primitive.

// ChatGPT Se liya hua Syntax ---> Primitive Data Types.
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 4. Null
// 5. Symbol (ES6 mein introduce hua)
// 6. BigInt (ES11 mein introduce hua)

let num1 = 6;//primitive  data types hai ye num1 me change tu num2 me change nhi hoga only num1 me hi change hoga?   
let num2 = num1;
console.log(num1); 
console.log(num2);
num1++;      //Num1 me ek Increment kar re hai but num2 me koi effect nhi hoga only num1 one hi chang hoga?
console.log(num1); //primitive  data types hai ye num1 me change tu num2 me change nhi hoga only num1 me hi change hoga?  
console.log(num2);


//=================================================== Number =====================================================//
// ChatGPT Se liya hua Syntax --->  JavaScript me numbers integers aur floating-point numbers, dono ko represent kar sakte hain.

let num3 = 42;          // Integer
console.log(num3);
console.log(typeof num3);

let num4 = 3.14;        // Floating point
console.log(num4);
console.log(typeof num4);


//=================================================== String =====================================================//
// ChatGPT Se liya hua Syntax ---> Strings text ko represent karte hain aur single (' ') ya double quotes (" ") mein likhe jaate hain. 

let str1 = 'Hello';
let str2 = "World";
console.log(str1);
console.log(str2);
console.log(typeof str1,str2);



//=================================================== Boolean =====================================================//
// ChatGPT Se liya hua Syntax ---> Boolean true ya false ko represent karta hai.

let isTrue = true;
console.log(isTrue);
console.log(typeof isTrue);

let isFalse = false;
console.log(isFalse);
console.log(typeof isFalse);




//================================================= Undefined ====================================================//
// ChatGPT Se liya hua Syntax ---> Agar kisi variable ko declare kiya gaya hai lekin initialize nahi kiya gaya hai, toh uski value undefined hoti hai.

let x;
console.log(x); // undefined
console.log(typeof x);




//================================================= Null ====================================================//
// ChatGPT Se liya hua Syntax ---> Null ek intentional non-value hai. Yeh undefined se different hai kyunki undefined automatically assign hoti hai jabki null explicitly assign ki jaati hai.

let y = null;
console.log(y); // null
console.log(typeof y);



//================================================= Symbol ====================================================//
// ChatGPT Se liya hua Syntax ---> Symbol ek unique and immutable primitive value hai jo mostly object properties ko unique banane ke liye use hoti hai.

let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2); // false
console.log(typeof sym1); // false



//================================================= BigInt ====================================================//
// ChatGPT Se liya hua Syntax ---> igInt large integers ko represent karne ke liye use hota hai jo Number data type se bahar hote hain.


let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // 1234567890123456789012345678901234567890n
console.log(typeof bigInt)





//============================================ Non-Primitive Data ==============================================//
// ChatGPT Se liya hua Syntax ---> Non-Primitive (Reference) Types.Reference Type bhi bolte hai.
// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. RegExp


// Reference data-type. means ek variable me chang to dusre me chang hoga.
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



//================================================== Object ===================================================//
// ChatGPT Se liya hua Syntax --->  Objects key-value pairs ka collection hote hain.
let person = {
  name: 'John',
  age: 30,
  isMarried: true
};
console.log(person.name); // John





//================================================== Array ===================================================//
// ChatGPT Se liya hua Syntax ---> Arrays ordered lists hote hain values ka, jo index se access ki jaati hain.


let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[1]); // Banana



//================================================== Function ===================================================//
// ChatGPT Se liya hua Syntax ---> Functions reusable blocks of code hote hain jo specific tasks perform karte hain.


function greet(name) {
  return 'Hello ' + name;
}
console.log(greet('Alice')); // Hello Alice



//================================================== Date ===================================================//
// ChatGPT Se liya hua Syntax ---> Date objects dates aur times ko represent karte hain.

let today = new Date();
console.log(today); // Current date and time



//================================================== RegExp ===================================================//
// ChatGPT Se liya hua Syntax ---> Regular expressions patterns ko represent karte hain jo text search aur manipulation mein use hote hain.

let regex = /hello/i;
let testStr = "Hello world!";
console.log(regex.test(testStr)); // true


