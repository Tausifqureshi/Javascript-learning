// ChatGPT Se liya hua Syntax ---> JavaScript me functions ka use code ko modular, reusable, aur organized banane ke liye kiya jata hai. Functions kuch specific tasks ko perform karte hain aur values return kar sakte hain. Functions define aur invoke (call) kiye ja sakte hain.

// ChatGPT Se liya hua Syntax ---> Additional Points:
// Functions ko parameters ke sath define kiya jata hai, jo function ke andar use ho sakte hain.

// Function kisi bhi jagah pe define kiya ja sakta hai, aur usko baar-baar call kiya ja sakta hai.

// Functions flexibility aur code readability ko badhate hain, especially jab aapko ek hi task ko baar-baar perform karna ho.

// <------------------------------------>function declaretion<------------------------------------------->
// return ---> jab ham javascript me return ka use karte hai tab us ke baad functiom ka execution stop ho jata hai ? Return keyword ke baad koi statement hame lihkte hai tu waha pe o us ko print nhi kar re ga ? jab bhi ham javacsript me invoke karte hai menas function ko call karte hai tab javascript kuch na kuch value return karta hai jo return karta hai o value function me bajta hai exmple function ka name hai sumNumber () us me num1 and num1 value k plus kar ke return ka re hai j bhi return hoga is sumNumber wale function mw jaye ga us ke baad  us ko ek varible me store kar re ke ham ge us ka function ko call kare ge fir hame value mili gi jo plus hoe ari hai.

// function sumNumber (num1,num2){
//     return num1+num2; //
// }
// const retrunvalue = sumNumber(3,5);
// console.log(retrunvalue);

// const retrunvalue1 = sumNumber(4,6); //kitne bar bhi reuse kar sakte hai is function ko ?
// console.log(retrunvalue1);


// function sumNumber(){
//     console.log(2+3)

// }
// sumNumber()

//===============================odd even function=============================?
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
  //         if(arr[i]=== target){
    //     for(let i =0; i<arr.length; i++){
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

// <------------------> Arrow function Oriented-programing file ka chapter <------------------>
// Arrow function ka this nhi hota hai ? Arrow function jo this leta hai apne surrounding se means Arrow function ka This jo hota hai window object hota hai globle bhi bolte hai ? Arrow Function ka This Change nhi kar sakte hai ? 

// const user1 = {
//   firstName : "harshit",  
//   age: 8,
//   about: () => {
//     // console.log(this) //Window object aye ga? Arrow function ka This Window hota hai?
//     console.log(this.firstName + " " + this.age);
//   }   
// }

// user1.about(user1);
// user1.about.call(user1); //Arrow Function ka This Change nhi kar sakte hai ? 



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
 

// function myFun(){   //higyer order function

//     function hello (){
//     // console.log('hello world')
//       return 'hello world' //string retrun
//     }
//     return hello;   //function return
//  }
//    let ans = myFun();
  //  console.log(ans)  //pura function retrun hoga aisa karne se ?
  //  console.log(ans())  //Function retrun use karne se hello world aise hi print go jaye ga lin number 212 se ?






 


