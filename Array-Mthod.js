//========================================Array Method============================?


// <------------------------------>Array concat Method<-------------------------------->
// concat Method ---> ye method two array kop joind karne ke liye use hota hai ? ye method new array return karta hai joined kiye huye array ko ? ye original array ko change nhi karta hai ye method ? array ki lenght bhi deta hai ?

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
// every metod ---> ek call back function lete hai ? or ye original arrya ko change nhi karta hai? every method array ke share element ko check karne ke liye use kiya jata hai share element same condition fullfil tohi ya true retrun karta hai wrana flase deta hai ? ye method true and false me answer deta hai ?

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
//Fill method --> ye array ke element ko ek  value se overwrite kar sakte hai ? ye method original array ko overwrite kar deta hai ? or is me 3 parameter hote hai first value second start positon and thred end positon leta hai ye method ? 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.fill("Kiwi",2,4);
// console.log(fruits)

// const myArray = [1,2,3,4,5,6,7,8];
// myArray.fill(0,2,5); //0 index se fill karna hai starat karna hai 2 se or end karna hai 5 tak menas  6number tak but 6 nhi aye ga 5 pe hi ruk jaye ga ye fill method ?
// console.log(myArray);




//<------------------------------>Array Filter Method<-------------------------------->
//Filter Method---->ye method use hota hai ek element me se kuch bada ya chhote number nikalne keliye ? ye method new array deta hai ? ye method bhi ek callback function leta hai ? ye method original array ko change nhi karta hai ? ye method bhi 3 parameter leta hai currentValue index or array jo hamne defiend kiya hoga?

//Normal Exapmle kuch big number ko 18 > se bada tu new array me store karna?

// let arr = [34,45,56,2,5,7,8,23,15]
// let arr1 = arr.filter((val)=>{
//        return val > 18

// })

// console.log(arr1)

//Example array object me se only potion nikalna filter use kar ke ?
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







// <------------------------------>Array find Method<-------------------------------->
//Find Method ---> ye method koi element ki length check karne ke liye use hota hai array me o value hai ya nhi ? ya method element hai ya nhi hai dhakta hai ? ye method bhi ek call back function leta hai ? koi element nhi milta tu ye method undefind ata hai ? ye method original array ko change nhi karta hai ?

//find method
// const myArray = ["Hello", "cat", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length === 3); //ye method bata ra hai 3 length pe cat hai ?
// console.log(ans);

// const users = [
//   { userId: 1, userName: "harshit" },
//   { userId: 2, userName: "harsh" },
//   { userId: 3, userName: "nitish" },
//   { userId: 4, userName: "mohit" },
//   { userId: 5, userName: "aaditya" },
// ];

// const myUser = users.find((user) => user.userId === 3);
// console.log(myUser);




// <------------------------------>Array ForEach Mthod<-------------------------------->
//ForEach Method----> ye method ek call-back input leta hai means ek function lega?parametar me current value index or array leta hai means hame currnt VALIBLE KA NAAM? foreach first parameter hemsa number fir index leta hai ye new array nhi deta hai forech ek loop ki tara work karti hai?

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
// Form Method ---> 




// <------------------------------>Array includes Method<-------------------------------->
// Includes Method ---> 





// <------------------------------>Array includes Method<-------------------------------->




// <------------------------------>Array indexOf Method<-------------------------------->
// indexOf Method ---> 




// <------------------------------>Array isArray Method<-------------------------------->
// isArray Method ---> 




// <------------------------------>Array join Method<-------------------------------->
//join Method ---> ye method array ke element ko string me return karta hai ? ye method ye original array ko change nhi karta hai ? 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(typeof fruits);
// console.log(Array.isArray( fruits));

//let text = fruits.join();

// let text = fruits.join("and"); //ye method array ke value ko string me deta hai ?
// console.log(typeof text);
// console.log(Array.isArray( text));




// <------------------------------>Array length Method<-------------------------------->
// length Method ---> 





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



// <------------------------------>Array Pop Method<-------------------------------->
//pop ---> last se delete karta hai ? or ye orignal array ko change karta hai ? or ye remove item ko retun bhi karta hai ?
// let fruits = ["mango", "banana","apple"];
// console.log(fruits);

// fruits.pop(); //original array ko change kar ra hai or last se delete kar ra hai?
// console.log(fruits)

// const store=fruits.pop() //or remove element bhi retrun karta hai?
// console.log(store)




// <------------------------------>Array Push Method<-------------------------------->
// push --->last se add karta hai ? or ye array ki length change karat hai or new length deta hai?
// let fruits = ["mango", "banana","apple"];
// console.log(fruits);
// fruits.push("orange"); //arrary lenth change new lengt dega
// console.log(fruits)




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
// Slice-Method ---> ye method use hota hai ap ko kaha se kaha tak value chahye jaise muje 'banana',se 'Apple' tak hona lekin onlye 'lemon' tak hi pring hoga,q ke ye method end wali position ko count nhi karta us se phele ka hi ek word return karta hai ?  start or end position dena padta hai kaha se kaha tak value hona ? ye method two value leta hai start and end wali position ? ye method original Array ko change bhi nhi karta hai? ye method new array bhi deta hai ? 

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus)



// <------------------------------>Array some Method<-------------------------------->
// some method ---> bhi ek callback function leta hai ? some method original array ko change nhi karta hai ? ye mthod use hota hai array ka ek bhi element satisfy hota hai true return karta hai jaise hi ek condition satisfy hohi true ata hai ? ye method true and flase me answer deta hai ?

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

































