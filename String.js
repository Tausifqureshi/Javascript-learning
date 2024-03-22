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


//===================================== concatination strring ============================================= //
// let telling = 'Hello'
// let fullname = "tausif";
// let lastname = "qureshi";
// console.log(fullname + " " +lastname);

// Using template literals
// console.log(`${telling} ${fullname} ${lastname}`); // aisa bhi kar sakte hai space aye ga ?

// let concatination = telling.concat(" ", fullname, " ", lastname); //aisa bhi concatination strring kar sakte hai ?
// console.log(concatination); // This will print: Hello tausif qureshi





//========================================= template string use =============================================== //
// let Name = "Tausif";
// let age = 24;
//  console.log(`My name is ${Name} This is My age ${age} years!`)








