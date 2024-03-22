//string ki last index lena hai bhut sahri string hai hame nhi malum tu hame aisse aise  access karte hai?


// let firstName = "Tausif qureshi in web Developer Engineer";

// console.log(firstName[1]) // indexing bataye ga kon si index pe kon sa word hai ?

// console.log(firstName.length) // total word kitne hai dega us ki lenght?
// console.log(firstName[firstName.length-1])  // agar length nhi malum hame apne character ki to aise nikal sakte hai?



// ====================================string function======================================///
// string ke index pe kon sa word hai batye ga ?
// function firstChar(anyString) {
  //   // Check if the string is not empty to avoid undefined behavior
  //   if(anyString.length > 0) {
  //     return anyString[0];
  //   } else {
  //     return 'String is empty';
  //   }
  // }
  
  // let result = firstChar('tausif');
  // console.log(result); // This will correctly log 't'





  //==================================String indexing =============================================//
//  T    a   u   s   i   f   
//  0    1   2   3   4   5   

  let firstName = 'Tauisf';
console.log(firstName[1]); // a aye ga us ki index 1 hai ?

// console.log(firstName.length);  //string ki lenght nikalne ke  liye use aisa nikalte hai ?
// console.log(firstName[firstName.length-1])  // agar length nhi malum hame apne character ki to aise nikal sakte hai?




let letterWord = "harshitdfjakldsfdf"; //khabi aisa ho string ki lengh nhi malum hame kis index pe kon sa word hai d[letterWord.length-2] last se count kar re 2 se d print hoga jo bhi hame chachiye o index number defind karna hoga ?

// console.log(letterWord);

console.log(letterWord[letterWord.length-2]); //khabi aisa ho string ki lengh nhi malum hame kis index pe kon sa word hai d[letterWord.length-2] last se count kar re 2 se d print hoga jo bhi hame chachiye o index number defind karna hoga ?



// ===============================string method ======================================?
// trim() 
// toUpperCase()
// toLowerCase()
// slice()

//trim()----> sapce ko remove karne me work karta hai ye trim method ? ye method dono side se whitespace ko removes karta hai left right se or ye original string ko  change nhi karta hai?

// let firstName = "       Tausif        ";
// console.log(firstName.length)
// let num = firstName.trim()   //new string dega ya us me ham usse store kar re hai
// console.log(num.length)

// firstName =firstName.trim(); // aisa bhi kar sakte ushi string me store 
// console.log(firstName.length)



// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();


// slice---->ye metho use hota hai ap ko kaha se kaha tak word chahye jaise muje pura tausif nhi hona only sif hona tu start or end position dena padta hai kaha se kaha tak word hona or ye method end wali position ko count nhi karta us se phele ka hi ek word return karta hai? ye method two value leta hai start and end? ye method new stringn deta hai or na hi original string ko change bhi nhi karta ye method? ye method ek string ka ek parts niklta hai or us se new string me return karata hai?

// let firstName = "Tausif";
// console.log(firstName.slice(0, 3)) 

// console.log(firstName.slice(1))

//  let newString = firstName.slice(0,3)// aisa bhi kar sakte hai 
//  console.log(newString)




//template string use?
// let Name = "Tausif";
// let age = 24;
//  console.log(`My name is ${Name} This is My age ${age} years!`)




// console.log("Tausif")










