//=====================================String-Method of Jvascript ======================================//


//================================== concat method =======================================//
// Concat method ---> ye method two srting ko joing karne ke liye use hota hai ? ye method original String ko Change nhi karta hai ? ye method new string retrun karta hai ? 

// let firstName = 'Tausif';
// let lastName = 'Qureshi';
// let result = firstName.concat(lastName); String joind hori yaha se ?
// console.log(result)


//================================== replace method =======================================//
// Replace Method ---> ye method original string ko change nhi karta hai ? ye method 2 postion leta hai kis position ko change kar ke dusri value ko replace kar re ge ? ye method new string bhi retrun karta hai ?

// let firstName = 'Hello Tausif name';
// console.log(firstName);

// let result = firstName.replace('name','Qureshi'); //Replace hora yaha se ?
// console.log(result);



//================================== trim method ==================================================//
//Trim Method ---> Ye method space ko remove karne ke liye use hota hai ? ye oringinal string ko change nhi karta hai ?
// let firstame ='     Tausif       ';
// console.log(firstame.length);
// let result = firstame.trim();
// console.log(result.length);


// TrimEnd-Method ---> Ye method string ke last se space ko remove karta hai ? ye original string ko change nhi karta hai ? 

// let text1 = "     Hello World!     ";
// console.log(text1.length);
// let text2 = text1.trimEnd(); 
// console.log(text2.length);


// TrimStart-Method ---> Ye method string ke start se space ko remove karta hai ? ye method original string ko change nhi karta hai ?
// let text1 = "     Hello World!     ";
// console.log(text1.length);
// let text2 = text1.trimStart(); 
// console.log(text2.length);


//================================== split method ===================================================//
// Split Method ---> split method string ko ek ke kar ke nikal ke array me deta hai is split se string ke chotte chotte word ko tod sakte hai ? split method new array deta hai ? split method original string ko change nhi karta hai ? split method index se bhi split karta hai hame kaha se kon si value show karwna hai ? 

let firsNtame = 'Hello Tausif Qureshi';
console.log(firsNtame);

// let result = firsNtame.split(""); //ek ek word ko tod ke array ke form me dega ye split ?
// console.log(result);

// let result1 = firsNtame.split(" "); //aise karne se Hello,Tausif aisa split hoga ?
// console.log(result1)

// let result2 = firsNtame.split(" "); 
// console.log(result2[1]); //aise karne se kon si index ki value hona ?

let result3 = firsNtame.split(" " ,2); //aise karne se Kaha se kaha tak value chaiye ?
console.log(result3)



//==============================toUpperCase toLowerCase method ========================================//

// toUpperCase ---> ye method letter ko capitalize me karta hai ? ye original string ko change nhim karta hai ?

// toLowerCase ---> ye method string ko small letter me karta hai ? ye original string ko change nhim karta hai ?


// let firsNtame = 'HELL0';
// console.log(firsNtame);

// let result = firsNtame.toLowerCase(); //Share Latter ko small me hoge /
// console.log(result);

// let firsNtame = 'tausif';
// console.log(firsNtame);

// let result = firsNtame.toUpperCase();  //share letter yaha se capital hoge ?
// console.log(result);




//============================= toLocaleUpperCase toLocaleLowerCase method ======================================//

// toLocaleLowerCase Method ---> ye method oringinal string ko change nhim karta hai ? 
        
// toLocaleLowerCase  Method ---> ye method oringinal string ko change nhim karta hai ? 

// let firsNtame = 'HELL0';
// console.log(firsNtame);

// let result = firsNtame.toLocaleLowerCase(); //Share Latter ko small me hoge ?
// console.log(result);

// let firsNtame = 'tausif';
// console.log(firsNtame);

// let result = firsNtame.toLocaleUpperCase(); //Share Latter ko capital me hoge ?
// console.log(result);





//==================================includes method ======================================//
//  Includes method  ---> ye method jis bhi value ko check kar re hai o mil jati hai true retrun karta hai ? ye method true and flase me work karta hai ? 

// let text = "Hello world, welcome to the universe.";
// console.log(text)
// let result = text.includes("world");
// console.log(result)


//==================================lenght property ======================================================//
// Lenght-property ---> string ki lenght batati hai ? koi empty string hoti hai us pe lenght property 0 batati hai ?

// let text = "Hello World!";
// console.log(text.length)
// let length = text.length;
// console.log(length) //aise bhi check kar sakte hai dono same hi answer aye ga ?


//======================================== toSring method =============================================//
//toSring-Method ---> ye method original string ko change nhi karta hai ? ye method string ko string me hi return karta hai ? kisi string object ko string me change karne ke liye is method ka use hota hai ?



//===================================== startWith and endWith method ======================================//
// startWith Method ---> ye method dhakta hai start me string me jo value search kar re hai agar o mil jati hai tu ture return  karta hai warna false ? or ye case-sensitive hai means agar capital word hai string me us ko hi search kar re ge tuhi true aye ga but small search kar re ge tu false aye ga ? 

// let text = "Hello world, welcome to the universe.";
// console.log(text)
// let startWhit = text.startsWith("Hello");
// let startWhit = text.startsWith("Hello",0); //index se bhi check kar sakte hai agar wrong index number dal ke check karte hai tu false aye ga right number check tu true aye ga ? 
// console.log(startWhit)


// endtWith Method ---> ye method dhakta hai end me string me jo value search kar re hai agar o mil jati hai tu ture retru  karta hai warna false ? or ye case-sensitive hai means agar capital word hai string me us ko hi search kar re ge tuhi true aye ga but small search kar re ge tu false aye ga ? 

// let text = "Hello world";
// console.log(text);

// let result = text.endsWith("world");
// console.log(result);



//===================================== Slice method ======================================//

// Slice-Method ---> ye metho use hota hai ap ko kaha se kaha tak word chahye jaise muje pura tausif nhi hona only sif hona tu start or end position dena padta hai kaha se kaha tak word hona or ye method end wali position ko count nhi karta us se phele ka hi ek word return karta hai? ye method two value leta hai start and end? ye method new stringn deta hai or na hi original string ko change bhi nhi karta ye method? ye method ek string ka ek parts niklta hai or us se new string me return karata hai?

// let firstName = "Tausif";
// console.log(firstName.slice(0, 3)) 

// console.log(firstName.slice(1))

//  let newString = firstName.slice(0,3)// aisa bhi kar sakte hai 
//  console.log(newString)



//===================================== search method ======================================//
// // search method ---> ye method use hota hai agar koi word mil jata hai us ki position retrun karta hai kis position pe hai o word ? agar is ko o word nhi milta hai tu -1 return karta hai

// let text = "Mr Blue has a blue house";
// // let position = text.search("Blue"); //value ki index return kare ga ?

// let position = text.search("red"); // value nhi mili tu -1 dega ye method ?
// console.log(position)


//===================================== match method ======================================//
// match method ---> 
















































