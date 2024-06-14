//===================================== block scope vs function scope ======================================//
//global variablr ko hame function and function ke bher bhi call karwa sakte hai ? but local variable ko only function me hi call karwa sakte hai ?

// let and const are block scope menas local scope onlye function me call ?
// var is function scope means globle scope ?

let firstName1 = "Tausif"; // global variable ye fir ye koi bhi keyword se defiend ho let const var is ko function ke ander and bher dono jaga call kar sakten hai.

function myFun() {
  let firstName = "Tausif"; //Local variable
  //jo bhi varibel function ke ander defind o local hi variable hua fir o koi bhi veriable ho let const ya var agar ye local varibel me defind tu in ne ander hi call karna hoga local varible le bher call se error dega.

  console.log(firstName); // local varoible access is ko only is function me hi access karna hoga.

  // console.log(firstName1); //global varibel access function me.
}
myFun();

console.log(firstName); //local varible ko access nhi kar sakta bher error dega.


// jab {} ye function ya if else ke sath ata hai is ko bolte hai scope. object alag hai. is liye const and let block scope hai.is let and const keyword ke variable ko {} is me hi access karna hoga. warna ye error dega upper function ka exmple hai ye if ka example hai.
//   if (true) { //var ko block and block ke bher kahi bhi call karwa saktew hai ?
//     var firstName = 'Tausif';
//     console.log(firstName)
//   }
//   console.log(firstName)


//   if (true) {
// //let and const ko block me hi call karwa sakte hai only ? {} is ke ander hi call karna hoga sirf.warna error dega.
//     let firstName = 'Tausif';
//     console.log(firstName);
//   }
//  console.log(firstName); //ye first name jo upper defind hai var se us ko access kar ra hai agar o var ko commint tu error aye ga.
