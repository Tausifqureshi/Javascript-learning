//js me hamre pass data types hote hai ?

//primitive  data types hai ye?

//undefiend----> jab ham variabal bana dete hsi or us se value assing nhi karte to undefiend ata hai but const ke sat aisa nji kar sakte us se value dena hi padta hai
// let num;
// console.log(num)

//null---->  is ka matlab hota hai kuch nhi? null typesof me objrct deta hai ye object nhi ek bug error hai ye?
// let num = null;
// console.log(typeof num , num)

//bigint---> ES2020 me aya js me ?
// let num1 = BigInt(13)
// let num2 = 14n; //aise bhi bigint bana sakte hai?
//  console.log(num1*num2)

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


// let a = 4;
// let b = 7;




function handelr(event){
    event.preventDefault()
    let inputName = document.getElementById("input-name").value
    let inputAge = document.getElementById("input-age").value

    if(inputName.trim() === '' && inputAge.trim() === ""){
        alert("Please Enter Your Fullfil Details")

    }
    else if(inputName.trim() === ""){
        alert("Please Enter Your Name")
    }
    
    else if(inputAge.trim() === ""){
        alert("Please Enter Your age")
    }
     



}


















