//========================================Array Method============================?


// <------------------------------>Array concat Method<-------------------------------->
// concat Method ---> ye method two array kop joind karne ke liye use hota hai ? ye method new array return karta hai joined kiye huye array ko ? ye original array ko change nhi karta hai ye method ? array ki lenght bhi deta hai kitne array hai us me?

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const children = arr1.concat(arr2);
// console.log(children);

// const arr3 = ["Cecilie", "Lone"];
// const arr4 = ["Emil", "Tobias", "Linus"];
// const arr5 = ["Robin"];
// const children1 = arr3.concat(arr4, arr5); //multipel array bhi concat kar sakte hai ? 
// console.log(children1) 




// <------------------------------>Array every Method<-------------------------------->
// every method ---> ek call back function lete hai ? or ye original arrya ko change nhi karta hai? every method array ke share element ko check karne ke liye use kiya jata hai share element same condition fullfil tohi ya true retrun karta hai wrana flase deta hai ? ye method true and false me answer deta hai ?

// let school = ['Hindi', "Urdu","English", 'Hindi','Urdu'];
// let school = ['Hindi', "Hindi","Hindi", 'Hindi','Hindi']; //is tara se check tu hi ture aye ga share element same hona chaiye ?

// const allHindi = school.every(function(student){
//   return student === "Hindi";
// });

// console.log(allHindi);



// const userCart = [
//   {productId: 1, productName: "mobile", price: 12000},
//   {productId: 2, productName: "laptop", price: 22000},
//   {productId: 3, productName: "tv", price: 35000},
// ]


// const ans = userCart.every((cartItem)=>cartItem.price < 30000);//check kar ra hai har itme 30000 hazar ka hai ya nhi? q ke har item  har itme 30000 hazar ka nhi hai is liye false aye gi value ?
// console.log(ans)



// <------------------------------>Array fill Method<-------------------------------->
//Fill method --->  is method se array ke element ko ek value se overwright kar sakte hai means rejact kar ke dusri value add karta hai ? ye method original array ko overwrites karta hai ? is method se start and end position se value change kar sakte hai ? start and value nhi dege tu share fruits ki jaga 'kiwi' ay ajye ga ? is method me 3 parametar hote hai first value kon si add karna hai second start postion kon se index se start karna hai 3position hoti hai end kon si index tak value change karna overwites karna hai ? //ye method jab ham end position dete hai Example hamne end postion 4 di hai but ye 4 position tak ko nhi print kar re ga ye 'Mango' tak hi print kar re ga 'Lemon' tak nhi jaye ga ye is ka roll hai ? array ki lenght bhi deta hai kitne array hai is me ?

// const fruits = ["Banana", "Orange", "Apple", "Mango","Lemon"];
// console.log(fruits);

// fruits.fill("Kiwi"); //start and value nhi dege tu share fruits ki jaga 'kiwi' ay ajye ga?
// console.log(fruits)  //original array change hoga is se tara se check karta hai ?

//fruits.fill("Kiwi",2,4); //ye method jab ham end position dete hai Example hamne end postion 4 di hai but ye 4 position tak ko nhi print kar re ga ye 'Mango' tak hi print kar re ga
// console.log(fruits)

// const myArray = [1,2,3,4,5,6,7,8];
// myArray.fill(0,2,5); //0 index se fill karna hai starat karna hai 2 se or end karna hai 5 tak menas  6number tak but 6 nhi aye ga 5 pe hi ruk jaye ga ye fill method ?
// console.log(myArray);



//<------------------------------>Array Filter Method<-------------------------------->
//Filter Method----> ye method use hota hai ek element me se kuch bada ya chhote number nikalne keliye ? ye method new array deta hai ? ye method bhi ek callback function leta hai ? ye method original array ko change nhi karta hai ? ye method bhi 3 parameter leta hai currentValue index or array jo hamne defiend kiya hoga ? ye method higher oder function hai means hota hai aisa function jo kisi or function ko argument accpet karte hai ? kuch bade number nilak na ya odd even number nikalne ke liye use hota hai ? Array deta hai pura us ki lenght ke sath ?

//Normal Exapmle kuch big number ko 18 > se bada tu new array me store karna?

// let arr = [34,45,56,2,5,7,8,23,15] //jo number Greater-than 18 se bada number jitne ohi aye ge is method se or o sahre element new array me store hoge  ye method new array deta hai ?
// let arr1 = arr.filter((val , index)=>{
//        return val > 18 ,index; //index bhi print karwa sakte hai hamare pe hai ?
// })
// console.log(arr1)


// let arr = [] //kuch nhi tu empty array ayeg ga console se ?
// let arr1 = arr.filter((val)=>{
//        return val > 18

// })

// console.log(arr1)

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const evenNumbers = numbers.filter((number)=>{  //arrow function ye?
//     return number % 2 === 0;
// });
// console.log(evenNumbers);

//Example array object me se only potion nikalna filter use kar ke ?
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
//      return val.name === 'Tausif';
//     })
//     console.log(devloper)




// <------------------------------>Array find Method<--------------------------------------------------------->
//Find Method ---> ye method array ke koi bhi first index ki value milti hai us value ko hi return kar deta hai aage badta hi nhi hai ? koi value nhi milta tu ye method undefind deta hai agar milta hai tu us ki value deta hai 'cate','lion' aisa deta hai? ya method value hai ya nhi hai dhakta hai ? ye method bhi ek call back function leta hai? ye method original array ko change nhi karta hai ?

//find method
// const numArray = [1,3,4,5,7,9,10];

// let saveNumber = numArray.find(findFuncion); //Ek function hai ye findFunction ?

// function findFuncion(value){ //Ek parameter hai ye is se hi check hogi shari value jo hame oppression karna hai ?

//     return value > 7 //check kar re hai 7 se bada koi number hai 9 aye ga q ke ye method ko jaise first value match ho jati hai us ko return kar deta hai baad me kitne bar bhi 9 aye us se nhi consider karta ye function ?
// }
// console.log(saveNumber)



// const myArray = ["Hello", "cat", "lion"];

// // function isLength3(string){
// //     return string.length === 3;
// // }

// const ans = myArray.find((string)=>string.length === 3); //ye method bata ra hai 3 length pe cat hai ?
// console.log(ans);

// const users = [
//   { userId: 1, userName: "harshit" },
//   { userId: 2, userName: "harsh" },
//   { userId: 3, userName: "nitish" },
//   { userId: 4, userName: "mohit" },
//   { userId: 5, userName: "aaditya" },
// ];
// const myUser = users.find(objName).userName; //.userName use karne se pura object nhi only name ki value aye gi?
// function objName(value){
//     return value.userName  == 'harsh'
// }
// console.log(myUser);


// const myUser = users.find((user) => user.userId === 3);//ye method bata ra hai 3 length pe userId: 3,ayi gi ? sort arrow function hai ye ?
// console.log(myUser);



// <-----------------------------------> Array ForEach Mthod <---------------------------------------->
//ForEach Method ----> ye method ek call-back input leta hai means ek function leta hai ? parametar me current value index or array leta hai means hame currnt VALIBLE KA NAAM? foreach first parameter hemsa number fir index leta hai ?ye method  new array nhi deta hai ? forech ek loop ki tara work karti hai ? ye method array ke share element ko run karta hai ya access ya get karta hai ? dusre sabdo me bol sakte hai foreach method array ke har ek element ke liye call-back function arenge karta hai jo array ki har ek value ko user defind call-back function set karta hai jis se ham har ek element ko apne coding me accoding koi bhi taks karwa sakte hai ? foreach ko Map and set object me bhi use kar sakte hai ? ye method higher order function hai means hota hai aisa function jo kisi or function ko argument accpet karte hai ?

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



// <------------------------------>Array Form Method<-------------------------------->
// Form Method ---> ye method array me convearting karta hai string ko  ek ek word tod ke deta hai ye method ?  arary ki lenght bhi deta hai kitne array hai us me ?

// let firstName = "Tausif";
// console.log(firstName);
// console.log(typeof firstName); //types check object ya string kya hai ?
// console.log(Array.isArray(firstName)); //Cheking array hai ya nhi 

// let converingArray = Array.from(firstName); //Array me conering hua ye string se ye method ki waza se ?
// console.log(converingArray);
// console.log(typeof converingArray); //array ka types check object aye ga is se ?
// console.log(Array.isArray(converingArray)); //Array hai is liye ab true aye ga is se ?





// <------------------------------>Array includes Method<-------------------------------->
// Includes Method ---> is method ka use hota hai Array me jo value search ki gayi hai ya nhi agar hai tu true dega warna false deta hai ye function ? or ye method case-sensitive hai means agar capital word hai string me us ko hi search kar re ge tuhi true aye ga but small search kar re ge tu false aye ga ? includes me two parameter hote hai fisrt current value and dusri indexing bhi leta hai ye method ? ye method true and false me answer deta hai ? ye method  2 ya jo bhi index number dalte hai us ke baad dehkta hai o word hai ya nhi Example 2index ke baad 'Mango' fir se hai array me agar hoga tu true warna false aye ga ye method aisa work karta hai ?

// const fruits = ["Banana", "Orange", "Apple", "Mango" ,"Orange"];
// console.log(fruits)
// // // let includingMethod = fruits.includes("Banana", 0); // aise index dal ke bhi check kar sakte hai is index pe value hai ya nhi kon si index ke baad fir se "Orange", hai ya nhi?

// let includingMethod = fruits.includes("orange", 2); // true aye ga q ke 2 index ke baad fir se 4index pe 'Mango hai' ya method aise work karta hai ?
// // console.log('Checking Includes Method valuse Exist and not Exist',includingMethod)

// if (includingMethod) { //if else se bhi use lar saklte hai ? agar hame chotta programm bana ho ?
//        console.log('orange Exist in the second index by',includingMethod);
       
// }else{
//        console.log('orange is not Exist in the second index by',includingMethod);
// }






// <------------------------------>Array indexOf and lastindexOf Method<-------------------------------->
// indexOf Method ---> ye method first index value ki position return karta hai ? agar koi value nhi milti hai tu -1 retrun karta hai ye method ? ye index method array me jab value search karta hai left se right tak ?  or ye method case-sensitive hai ? array me same element ek se jayda bar aya hoga tu o first wali elemnt ko by default position bata ta hai us ke baad jo bhi element hai us ki postion batye ka o kis position pe hai ?

// const fruits = ["Banana", "Orange", "Apple", "Mango"]; //simple exmaple
// console.log(fruits)
// let index = fruits.indexOf("Apple"); //position return kar re ga 2 aye gi potion is 'Apple' ki?
// console.log(index);

//Value replace this methid
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)
// fruits[fruits.indexOf('Tausif')] = 'Banana' //is method se replace bhi kar sakte hai method ko 'Banana' ki Jaga 'Tausif' ko add kar re hai ?
// console.log(fruits)


// const fruits = ["Banana", "Orange", "Apple", "Mango"]; //sms print not show -1 not found the value exist array ?
// console.log(fruits)
// let index = fruits.indexOf("Kiwi"); //-1 retrun kar re ga ye method agar kuch nhi milta tu -1 retrun karta hai ?

// if (index > -1) { //-1 na aye koi meseege return kar re aise banate hai program meseege aye ? 
//     console.log('Kiwi is exist this array' ,index)
// }else{
//     console.log('Kiwi is not exixt thsi array',index);
// }


// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// let index = fruits.indexOf("Apple", 3); 2 index ke baad fir se ye method dheka ga 'Apple' kis postion pe hai 4index pe 'Apple' 4 return kar re ga ye method aisa work karta hai?
// console.log(index);




// lastIndexOf Method ---> ye method last se value ko specify kartra hai ? ye method ko agar value nhi milti hai -1 return karta hai ? ye method value ko jab search karta right se left se ?

// const fruits = ["Apple", "Orange", "Apple", "Mango"];  
// let index = fruits.lastIndexOf("Apple");
// console.log(index);


// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// let index = fruits.lastIndexOf("Apple", 3); 2 index ke baad fir se ye method dheka ga 'Apple' kis postion pe hai 4index pe 'Apple' 4 return kar re ga ye method aisa work karta hai?
// console.log(index);





// <------------------------------>Array isArray Method<-------------------------------->
// isArray Method ---> ye method array ko check karne ke liye use hota hai array hai ya nhi ? ye method true and false me answer deta hai ?

// let text = "W3Schools";
// console.log(typeof text);
// let result =  Array.isArray(text); //array ko checking aise karte hai false aye ga ye array nhi hai ?
// console.log(result);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(typeof fruits)
// let result = Array.isArray(fruits);//true aye ga ye array hai ?
// console.log( result); 



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(typeof fruits)
// let result = Array.isArray(fruits);
// console.log( result); 

// //change array string me ?
// let result1 = fruits.toString();
// console.log(result1);
// console.log(typeof result1);
// console.log(Array.isArray(result1))




// <------------------------------>Array join Method<-------------------------------->
//join Method ---> ye method array ke element ko string me return karta hai ? ye method ye original array ko change nhi karta hai ? ye method new string return karta hai ? ye method se apne khud se diye huye separator(#), (*),(%). kisi tara bhi separator kar sakte hai ? 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)
// console.log(typeof fruits); //array ka typeof object ata hai is liye ye object aye ga ?
// console.log(Array.isArray( fruits)); //check in array true aye ga ye array hai is liye?

// let text = fruits.join(" and ");//Joind method me adda bhi kuch karwa sakte hai ? 
// console.log(text)

// //let text = fruits.join(); //ye method array ke value ko string me deta hai ?
// console.log(typeof text);
// console.log(Array.isArray( text)); //string me change ab array is liye false aye ga ?




// <------------------------------>Array length Method<-------------------------------->
// length Method ---> ye property lenght check karne ke liye use hoti hai ?
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length =  fruits.length;
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.length = 1; //kitni lenght hona 'banana' aye ga kitni bhi le sakte jitni marray me hai utni hi bus ?
// console.log(fruits);





// <------------------------------>Array Map Method<-------------------------------->
//Map Method----> ye method ES6 me aya js me ?Map method se array ke share ke share element pe opration perfom karne me use hota hai us ke jo result aya us se duasre array me store karta hai Map Method Example? ye bhi ek call back function leta hai ?Map function hemasa new array banta hai?agar ham retrun nhi karte hai console karte hai number* print hoga but ham kuch retrun nhi karate undefind ayega? loop ki tara kam karta hai but toda fark hai is me?original array ko change nhi karta hai ? ye paramert me currentValue, index, arr ? map method me empty element hai function nhi chale ga ? map array ke har element ko sirf ek bar hi execute karta hai o bhi index order me ?

//  const numbers = [3, 4, 6, 1, 8];
//  const square2 = numbers.map(function(number){
// return number*number;  //jab bhi mfunction retrun karta hai us se kahai na kahi store karan padta hai jaise square varibal me store hori retiurn value ?

//   console.log (number*number);
//  console.log(square2)

//Example 2 Real life Use Map object?
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


// const returnValue = users.map(user =>(  //value shari obhrct me aye gi is tara se karne se 4 object aye ge is se?
//    {   Name: user.firstName,
//       Age : user.age
// }));
//  console.log(returnValue);


// <------------------------------>Array Pop Method<-------------------------------->
//pop ---> last se delete karta hai ? or ye orignal array ko change karta hai or lrngth ko bhi change kar deta hai? or ye remove item ko retun bhi karta hai ? aray empty hai tab ya undefind return kar re ga ? 
// let fruits = ["mango", "banana","apple"];
// console.log(fruits);

// // fruits.pop(); //original array ko change kar ra hai or last se delete kar ra hai?
// // console.log(fruits)

// const store = fruits.pop() //or remove element bhi retrun karta hai ye method 'Apple' aye ga delete itme ?
// console.log(store, 'Deleted items')

// console.log(fruits) //orignal array ko change karta or us ki lenght bhi chnag karta hai ?


// <------------------------------>Array Push Method<-------------------------------->
// push --->last se add karta hai ? or ye array ki length change karat hai or new length deta hai?
// let fruits = ["mango", "banana","apple"];
// console.log(fruits);
// fruits.push("orange"); //arrary lenth change new lengt dega
// console.log(fruits)




// <------------------------------>Array Reduce Method<-------------------------------->
//Reduce Method----> Reduce Method bhi ek callback function leta hai ? ye method array ke har ek element ke sath ek function run karta hai jis se array ko reduce kar ke single value me return karwana reduce method ka kaam hota hai ? ye method array ko ek new array me return karwta hai ? ye method original array ko change nhi karta hai ?

// const numbers = [1,2,3,4,5, 10];
// // in sub ka  : sum of all the numbers in array ?

// const sum = numbers.reduce((accumulator, currentValue)=>{//pure reduce me de ek value dera hai? sub ka sum dera hai ye reduce method ? accumulator inital value agar jo hamne di hai nhi di tu koi issu nhi ? accumulator work karta hai inital value waha se start karta hai or ya har ek element ko run karne ke baad apne pass store kar leta hai ?

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


//Map object exmple ?
// const userCart = [
//   { productId: 1, productName: "mobile", price: 12000 },
//   { productId: 2, productName: "laptop", price: 22000 },
//   { productId: 3, productName: "tv", price: 15000 },
// ];

// const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
//   return totalPrice + currentProduct.price; //pure object se hame srif price chachiye or jo chahiye o retrun karwa sakte firstname product jo bhi?
// }, 0);

// console.log(totalAmount);

// total price      currentValue     return
// 0                {}                  12000   //current value first time pura object hoga
// 12000            22000                34000
// 34000            15000                49000






// <------------------------------>Array reverse Method<-------------------------------->
// reverse Method ---> ye method original array ko change karta hai ? ye method order change karne ke liye use hota hai means left ki postion se nhi right ki position se value milti hai is se bolte hai order-changes ?

// const reverse = ["Banana", "Orange", "Apple", "Mango"];
// console.log(reverse)
// let reverse1 = reverse.reverse();
// console.log(reverse1)



// <------------------------------>Array Shift Method<-------------------------------->
// shift --->first element se delete karta hai ye ? original array ko change karta hai ? ye delete item ko return karta hai?
// let fruits = ["mango", "orange","apple"];
// console.log(fruits);

// fruits.shift() //original array change karta hai start se delete karata hai?
// console.log(fruits)

//  let removeitem = fruits.shift()   //or remove element bhi retrun karta hai?
//  console.log(removeitem)



// <------------------------------>Array slice Method<-------------------------------->
// Slice-Method ---> ye method use hota hai ap ko kaha se kaha tak value chahye jaise muje 'banana',se 'Apple' tak hona lekin onlye 'lemon' tak hi print hoga,q ke ye method end wali position ko count nhi karta us se phele ka hi ek word return karta hai ?  start or end position dena padta hai kaha se kaha tak value hona ? ye method two value leta hai start and end wali position ? ye method original Array ko change bhi nhi karta hai? ye method new array bhi deta hai ? 

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3); 
// console.log(citrus)



// <------------------------------>Array some Method<-------------------------------->
// some method ---> ye bhi ek callback function leta hai ? some method original array ko change nhi karta hai ? ye mthod use hota hai array ka koi ek bhi element satisfy hota hai true return karta hai jaise hi ek condition satisfy hohi true ata hai ? ye method true and flase me answer deta hai ?

// let course = ['Hindi',"Urdu","English", 'Telgu'];

// let urdu = course.some(function(leng){
//   return leng === 'Hindi'
// })
// console.log(urdu)


// let courses = ['Hindi', 'Urdu', 'English', 'Telugu'];
// let isAnyCourseUrdu = courses.some(course => course === "Urdu");

// console.log(isAnyCourseUrdu); // true if any course is "Urdu", false otherwise


//===================some method  object using===============//
// let student =[
//    {name : 'Tausif', age : 24},
//    {name : 'Qureshi', age : 25},
//    {name : 'Javed', age : 23}
// ]

// let ret = student.some(function(matc){
//   return matc.name ==='Tausif';
// })

// console.log(ret)

// const userCart = [
//   {productId: 1, productName: "mobile", price: 12000},
//   {productId: 2, productName: "laptop", price: 22000},
//   {productId: 3, productName: "tv", price: 35000},
//   {productId: 3, productName: "macbook", price: 250000},
// ]

// const ans = userCart.some((cartItem)=>cartItem.price > 100000);// check kar re koi itme ki price 1 lahk ke upper hai ya nhi true ya false me answer aye ga ? true aye ga q ke 1 lahk ke upper hai price item ki ?
// console.log(ans);


// <------------------------------>Array sort Method<-------------------------------->
// sort method ?
// ASCII TABLE
//char : ascii value

//string me number ki ye position hoti hai?
// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64

// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90

// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96

// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125

// sort Method ?ye method origan array ko change karta hai meuted means change karna hota hai?ek callback function bhi leta hai ye sort method?

// [5,9,3000,1200,400]
//3000, 1200, 400, 9, 5 // desending sort bolte hai is se?
// 5,9,400, 1200, 3000     //asending sort bolte hai us se?

//Number Sort Example
//js me jab ham sort method use karte tu js us se number samaj ke sort nhi karta hai string samaj ke sort karta hai?
// const number =[5,9,1200, 400, 3000]
// number.sort()
// console.log(number)

//["5", "9", "1200", "400", "3000"]    //js first sub element ko aisa string me karta hai?string ko sort karne ke liye js ACSII use karta hai google search karo? agar 1200 hai tu js 1200 nhi dheka ga only 1 dheyke ga us ke ACSII code jo hoga o print hoke aye ga?

//Charachter Sort Example? is me jo first ata hai word us se first rahkta hai example? cde or bca but ye sort method first bca ko rahke ga fir cde ko?
//agar capital letter ho ga firt o aye ga q ke ACSII code me ciptal letter kam number ke position kam hote hai?
// const userNames = ['harshit', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Harshit'];
// userNames.sort();
// console.log(userNames);

// const nam = ["cde", "bca"];
// console.log(nam.sort());

// //expected output example in sort method in numbers?
// const numbers = [5, 9, 1200, 410, 3000];
// numbers.sort((a, b) => {
//   //return a-b //asendin me sort ye
//   return b - a; //desending me sort ye
// });
// numbers.sort((a, b) => a - b);
// console.log(numbers);
//agar positive ata hai answer tu hame phele b ko rahkna hai nagitive me first a ko rahkna hai?
// 1200,410
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a
// 410 , 1200

// a-b ---> negative ----> a,b
// 5, 9 ---> -4

// Real use case? Example jab ham ecommerce website pe jate hai tu ham opetion ata hai kam price ya low price wale?
// price lowToHigh HighToLow
// const products = [
//   { productId: 1, produceName: "p1", price: 300 },
//   { productId: 2, produceName: "p2", price: 3000 },
//   { productId: 3, produceName: "p3", price: 200 },
//   { productId: 4, produceName: "p4", price: 8000 },
//   { productId: 5, produceName: "p5", price: 500 },
// ];

// lowToHigh
// const lowToHigh = products.slice(0).sort((a, b) => {
//   //slice use kaha se hame apni value start karna hai clone ke liye use?
//   return a.price - b.price; //kam price wale ke liye use
// });

// const highToLow = products.slice(0).sort((a, b) => {
//   return b.price - a.price; //jayda price wale ke liye use
// });
// // console.log(products) // slic use se produts clone hoge is se pure products upper nice nhi hoge jais hai line bye line ayeb ge

//sort method charachter example? jo word first ata hai us se phle rahke ga jaise garima first aye ga q ke teble me g ki position jaldi ati hai is liye garima jaldi aye ga us baad harshit aise hi word two word work kare ge?
// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// users.sort((a,b)=>{
//     if(a.firstName > b.firstName){
//         return 1;
//     }else{
//         return -1;
//     }
// });

// console.log(users);





// <------------------------------>Array spilce Method<-------------------------------->
// splice method --->  add ya remove karta hai array ke element ko ? ye method bhi overwirte karta hai orioginal array ko change karta hai ? array ke biche me element ko remove ya add karna hota hai tab ham spile method use karte hai ? ye method se ham arry ke kisi bhi position me add ya remove kar skate hai ? ye method 2  parameter leta hai  start position leta hai last end position leta hai ? ye method new array nhi deta hai ?

// const fruit = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// console.log(fruit)
// fruit.splice(1,3 ,"Hello",'Array') //1 se 3 index 'orange' se 'mango'  tak delete hore hai ?delete ke baad add hora hai ?
// console.log(fruit)

// let add = fruit.splice(1,3 ,"Hello",'Array')//jo delete karte hai us se return bhi karta hai ye method ? us ke  baad add hor value "Hello",'Array' ye dono ?
// console.log(add,'deleteitem')

// start , delete , add , position leta hai ye method ?
// const myArray = ['item1', 'item2', 'item3'];
// console.log(myArray);

// delete
// myArray.splice(1,1); //1 jo hai 'item2' se delete karne ke liye durra 1 hai us se ek hi delete karna hai 'item2'?
// console.log(myArray);

// let deletedItem = myArray.splice(1,1); 
// console.log("delted item", deletedItem); //jo delete karte hai us se return bhi karta hai ye method ?'item2',  hora 1index se or dusre 1 se ek hi item delete hoga ?

// add
// myArray.splice(1, 0,'inserted item');//1 index se start hoga 0 ka matlab kuch nhi delete us ke baad value add hori hai ?
// console.log(myArray)

// add and delete 
// let deletedItem =  myArray.splice(1, 2, "inserted item1","inserted item2")//jo delete karte hai us se return bhi karta hai ye method ? 'item2', 'item3'delete hore hai us ke baad value add hori hai ?
// console.log( deletedItem);

// myArray.splice(1, 2, "inserted item1","inserted item2") //"inserted item1","inserted item2" add hore hai us ke baad value add hori hai ?
// console.log(myArray);




// <------------------------------>Array toString Method<-------------------------------->
// toString Method ---> ye method oringinal array ko change nhi karta hai ? ye method array ke element ko string me change karata hai ? string me change tu array ke koi bhi method use nhi kar skate hai is pe fir ? 
// const string = ["Banana", "Orange", "Apple", "Mango"];
// console.log(Array.isArray (string))  //checking array hai ya nhi 
// console.log(typeof string) // array ka type check object aye ga array ek object hota hai ? 

// let text = string.toString();
// console.log(typeof text) //tostring se array string me change ho jata hai ?


// <------------------------------>Array Unshift Method<-------------------------------->
//unshift ---> starting se adda karta hai ? ye or ek se jayda ko bhi add kar sakte hai? ye original array kp change karta hai ? 
// let fruits = ["mango", "banana","apple"];
// console.log(fruits);
// fruits.unshift("grapes"); //start se add hora?
// console.log(fruits);



// <------------------------------>Array valueOf Method<-------------------------------->

// valueOf Method ---> ye method original array ko change nhi karta hai ? is method se array ke shari value same position pe ati hai koi change nhi hota hai ye default value hoti hai jaise ham console karwate hai same vaise hi print hoga is method se ?

// const valueOf = ["Banana", "Orange", "Apple", "Mango"];
// console.log(valueOf)
// const myArray1 = valueOf.valueOf();
// console.log(myArray1)

































