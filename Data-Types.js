// // ChatGPT Se liya hua Syntax ---> JavaScript mein data types ko samajhna zaroori hai kyunki yeh programming mein data ko handle karne ka tarika bataate hain. JavaScript mein do tarah ke data types hote hain: Primitive aur Non-primitive.



//primitive  data types hai ye?
//String, Number, Booleans, Undefiend, Null, Bigint, Symbol?

let num1 = 6;//primitive  data types hai ye num1 me change tu num2 me change nhi hoga only num1 me hi change hoga?   
let num2 = num1;
console.log(num1); 
console.log(num2);
num1++;      //Num1 me ek Increment kar re hai but num2 me koi effect nhi hoga only num1 one hi chang hoga?
console.log(num1) //primitive  data types hai ye num1 me change tu num2 me change nhi hoga only num1 me hi change hoga?  
console.log(num2)











//============================================ Reference data-type ==========================================//
// Non-primitiv data types ko hi. Reference data-type bhi bolte hai.
// Reference data-type? means ek variable me chang to dusre me chang hoga?
//Array object, function
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





















