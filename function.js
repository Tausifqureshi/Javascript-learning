// function bhi referance type hote hai?

// <------------------>function declaretion<------------------>
// function sumNumber (num1,num2){
//     return num1+num2;
// }
// const retrunvalue = sumNumber(3,5);
// console.log(retrunvalue);

// function sumNumber(){
//     console.log(2+3)

// }
// sumNumber()

//odd even function?
// function isEven(number){
//     if(number %2 ===0){
//         return true;
//     }else{
//        return false;
//     }
// }
// console.log(isEven(8))

//Aisa function agar value milti hai tu number index retrun warna -1 aye ga?
// function findTarget(arr,target){
//     for(let i =0; i<arr.length; i++){
//         if(arr[i]=== target){
//             return [i];
//         }
//     }return -1;
// }

// let arr = [3,7,8,9,10,];
// const retrunValue = findTarget(arr,10)
// console.log(retrunValue)

// <------------------>function Expreeson<------------------>

//  const sumNumber = function (num1,num2){
//         return num1+num2;
//     }
//     const retrunvalue = sumNumber(3,5);
//     console.log(retrunvalue);

// <------------------> Arrow function <------------------>
// const findTarget = (arr,target) =>{
//     for(let i =0; i<arr.length; i++){
//         if(arr[i]=== target){
//             return [i];
//         }
//     }return -1;
// }
// let arr = [3,7,8,9,10,];
// const retrunValue = findTarget(arr,10)
// console.log(retrunValue)


// <------------------>function ke ander function defiend<------------------>
// function myFun() {
//   console.log("Tausif");

//   function twoSum(num1, num2) {
//     return num1 + num2;
//   }

//   function multipal(numb1, numb2) {
//     return numb1 * numb2;
//   }

//  setTimeout((numb1,numb2) => {
//      console.log(2+4)
    
//   }, 2000);
//   console.log("inside function execution");

//   console.log(twoSum(4, 6));
//   console.log(multipal(4, 10));
// }
// myFun();



// <------------------>function default parameter<------------------>
// function myfun(a,b=2){  // is ko bolte defualt paramereter ab ham argumnet nhi dege to us ki value yahi aye gi 2? agar argument me value dete hai tu b ko ohi value aye gi?
//     return a+b;

// }

//  console.log(myfun(5,4))


// <------------------>function rest parameter<------------------>
//is ka matlab hota hai--->jitne ham parameter pass kare ge utne hi argument value legi but rest parameret ... use karne se hame baad me argument dena hai tobhi de sakte us pe oprretion hoke aye ga onlye rest function pe use hota hai?
// function addAll(...num1){
//     let total = 0
//     for(let number of num1){
//       total = total+number
//     }
//    return total
// }
//  const ans = addAll(2,3,4,5,1)
//  console.log(ans)




// <------------------>CallBack function<------------------>
//Call back function ka matlab hota hai ek function ko dusre function me pass karna hota hai?
  
// function first(){   //higyer order function
//     console.log("I am first called Function")
// }

// function second(CallBack){ // ye jo hum pass kiye parameter me jab ham argument dege tu function ka naam dege

//    CallBack("tausif")// jo function milra us se call bhi karna hota hai?
//     // console.log(num)
// }
//  second(first) //pura function pass argument me?



// <------------------>Function retuning function <------------------>
//  function retuning function  or function bhut kuch return karta hai?
//  function myFun(){
//     // return [1,2,3];   //array ko bhi retrun kar saktr hai
//     // return {name: 'tausif', age: 24};  //object ko bhi retrun kar sakte hai
//  }
//    const ans = myFun();
// //    console.log(ans)
// ans();   //console nhi karne se ye use karne se i am returning print hoga q ke ans ek function ban gaya hai ab ?


function myFun(){   //higyer order function

    function hello (){
    // console.log('hello world')
      return 'hello world'
    }
    return hello;   //function return
 }
   const ans = myFun();
   console.log(ans())  //pura function retrun hoga is se return ke sath use hello world warna console ke sathe pura function aye ga?

//  ans();//console nhi karne se ye use karne se hello world print hoga q ke ans ek function ban gaya hai ab ?





 


