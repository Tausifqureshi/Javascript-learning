//Array Method?
// <------------------------------>Array Push Method<-------------------------------->
// push --->last se add karta hai or ye array ki length change karat hai or new length deta hai?
// let fruits = ["mango", "banana","apple"];
// console.log(fruits);
// fruits.push("orange"); //arrary lenth change new lengt dega
// console.log(fruits)


// <------------------------------>Array Pop Method<-------------------------------->
//pop ---> last se delete karta hai or ye orignal array ko change karta hai or ye remove item ko retun bhi karta hai?
// let fruits = ["mango", "banana","apple"];
// console.log(fruits);

// fruits.pop(); //original array ko change kar ra hai or last se delete kar ra hai?
// console.log(fruits)

// const store=fruits.pop() //or remove element bhi retrun karta hai?
// console.log(store)


// <------------------------------>Array Unshift Method<-------------------------------->
//unshift ---> starting se adda karta hai ye or ek se jayda ko bhi add kar sakte hai?
// let fruits = ["mango", "banana","apple"];
// console.log(fruits);
// fruits.unshift("grapes"); //start se add hora?
// console.log(fruits);


// <------------------------------>Array Shift Method<-------------------------------->
// shift --->first element se delete karta hai ye? original array ko change karta hai ye delete item ko return karta hai?
// let fruits = ["mango", "orange","apple"];
// console.log(fruits);

// fruits.shift() //original array change karta hai start se delete karata hai?
// console.log(fruits)

//  let removeitem = fruits.shift()   //or remove element bhi retrun karta hai?
//  console.log(removeitem)


// <------------------------------>Array ForEach Mthod<-------------------------------->
//ForEach Method---->first ek call-back input leta hai means ek function lega?parametar me current value index or array leta hai means hame currnt VALIBLE KA NAAM? foreach first parameter hemsa number fir index leta hai ye new array nhi deta hai forech ek loop ki tara work karti hai?

// let fruits = ["Apple","Banana","Mango","Orange" ];
// fruits.forEach((cuurentvalue,index,array)=>{
//     console.log("currentvalue-" + cuurentvalue + "  index-" + index+ "    array1-" + array)
// })

// // Example 2 ForEach?
// let numbers = [5,6,7,8,]
// function myfun(currnetValue,index,array){
// console.log(`index of ${index} currnentvalue:${currnetValue} array:${array}`)
// // console.log("index-" + index + "  number-" + currnetValue + "    array-" + array)
// }
// numbers.forEach(myfun)

//Example 3 se multuplay kar ke dega har element ko ye function forEach use hora hai?
// let numbers = [5,6,7,8,]
// numbers.forEach(function(number,index,array){
// console.log(number*3 ,index,array)

// })

//Real LIfe Example?
// const users = [
//   { firstName: "Tausif", age: 23 },
//   { firstName: "Qureshi", age: 21 },
//   { firstName: "Rehamn", age: 22 },
//   { firstName: "Abdul", age: 20 },
// ];
// users.forEach((user,index, array)=>{ // ye parameters hai?
// console.log(user.firstName,index,array)//parameter yaha se print hora?//hamre marzhi index value print karwana?

// })


// <------------------------------>Array Map Method<-------------------------------->
//Map Method---->Map method se array ke share ke sharew element pe opration perfom karne me use hota hai us ke jo result aya us se duasre array me store karta hai Map Method Example? ye bhi ek call back function leta hai ?Map function hemasa new array banta hai?agar ham retrun nhi karte hai console karte hai number* print hoga but ham kuch retrun nhi karate undefind ayega? loop ki tara kam karta hai but toda fark hai is me?original array ko change nhi karta hai ye ye paramert currentValue, index, arr?

//  const numbers = [3, 4, 6, 1, 8];
//  const square2 = numbers.map(function(number){
//      return number*number;  //jab bhi mfunction retrun karta hai us se kahai na kahi store karan padta hai jaise square varibal me store hori retiurn value ?
//   console.log (number*number);z
//  console.log(square2)


//Example 2 Real life Use Map?
// const users = [
//   { firstName: "Tausif", age: 23 },
//   { firstName: "Qureshi", age: 21 },
//   { firstName: "Rehamn", age: 22 },
//   { firstName: "Abdul", age: 20 },
// ];

// const returnValue = users.map((user,index,arry)=>{
//     return user.firstName,index,arry;
// })
// console.log(returnValue)

//<------------------------------>Array Filter Method<-------------------------------->
//Filter Method---->ye method use hota hai ek element me se kuch bada ya chhote number nikalne keliye ?ye method new array deta hai?ye method bhi ek callback function leta hai? ye method original array ko change nhi karta hai m? ye method bhi 3 parameter leta hai currentValue index or array jo hamne defiend kiya hoga?    

//Normal Exapmle kuch big number ko 18 > se bada tu new array me store karna?

// let arr = [34,45,56,2,5,7,8,23,15]
// let arr1 = arr.filter((val)=>{
//        return val >18

// })

// console.log(arr1)



//Example array object me se only potion nikalna filter use kar ke 
// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const evenNumbers = numbers.filter((number)=>{  //arrow function ye?
//     return number % 2 === 0;
// });
// console.log(evenNumbers);


// let tem =[
//           {
//             name:'Tausif',
//             position: 'developer'
//           },
//           {
//             name:'Qureshi',
//             position: 'developer'
//           },
//           {
//             name:'1qbal',
//             position: 'developer'
//           },
//           {
//             name:'Abdul',
//             position: 'developer'
//           },
// ]
    //  let devloper = tem.filter((val)=>{
    //      return val.name ;
    //     })
    //     console.log(devloper)






// <------------------------------>Array Reduce Method<-------------------------------->
//Reduce Method---->

// Reduce Method? ye method bhi ek callback function leta hai?

// const numbers = [1,2,3,4,5, 10];  
// // in sub ka  : sum of all the numbers in array 

// const sum = numbers.reduce((accumulator, currentValue)=>{//pure reduce me de ek value dera hai? sub ka sum dera hai ye reduce method

//     return accumulator + currentValue;
// }, 100);      //inital  value ye 100?means hamne apni taraf se value di us se bolte initial value?
// console.log(sum);

// accumulator , currentValue,  return //ab accumulator ki value hogi 100 first q q ka hamne 100 initial value de hai
// 100              1             101        ab current ki value 1 hogi 100 nhi?
// 101              2             103
// 103              3             106
// 106              4             110
// 110              5             115
// 115             10             125   total sum value 125 aye gi?                      




const userCart = [
  {productId: 1, productName: "mobile", price: 12000},
  {productId: 2, productName: "laptop", price: 22000},
  {productId: 3, productName: "tv", price: 15000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{ 
  return totalPrice + currentProduct.price;    //pure object se hame srif price chachiye or jo chahiye o retrun karwa sakte firstname product jo bhi?
}, 0)

console.log(totalAmount);

// total price      currentValue     return 
// 0                {}                  12000   //current value first time pura object hoga
// 12000            22000                34000
// 34000            15000                49000














