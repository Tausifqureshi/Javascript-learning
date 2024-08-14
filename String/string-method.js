//=====================================String-Method of Jvascript ======================================//

//================================================= concat method =================================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me strings ko concatenate karne ke liye concat method use kiya jata hai. Yeh method ek ya zyada strings ko jod kar ek naya string banata hai. Yeh original strings ko modify nahi karta, balki naya string return karta hai.

// let firstName = 'Tausif';
// let text = 'Hello'
// let lastName = 'Qureshi';

// let result = firstName.concat(lastName,text); //String joind hori yaha se ? kitni bhi string joind kr sakte hi
// console.log(result)

//================================================ chartAt method =================================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me charAt method use kiya jata hai kisi string ke specific position (index) par maujood character ko retrieve karne ke liye. Yeh method ek single character ko return karta hai jo given index par hota hai.

// ChatGPT Se liya hua Syntax --->
// let str = "Hello, World!";
// console.log(str.charAt(0));    // Output: "H"
// console.log(str.charAt(7));    // Output: "W"
// console.log(str.charAt(12));   // Output: "!"
// console.log(str.charAt(13));   // Output: ""
// console.log(str.charAt(-1));   // Output: ""
// console.log(str.charAt(100));  // Output: ""

// let text = "HELLO WORLD";
// let letter = text.charAt(1);//word ki position retrun kar re ga yaha se 'E' aye ga.
// let letter = text.charAt(text.length-1); //aise karne se last ka word mile ga 'D' aye ga.
// console.log(letter);

//================================================ includes method ================================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me includes method string ke andar kisi specified substring ko search karne ke liye use hota hai. Yeh method true return karta hai agar specified substring string me maujood hai, aur false return karta hai agar nahi hai.

// let text = "Hello world, welcome to the universe.";
// console.log(text)
// let result = text.includes("world");
// console.log(result)

//========================================= indexOf and lastIndexOf method ========================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me indexOf method string me kisi specified substring ka index (position) find karne ke liye use hota hai. Yeh method substring ke pehle occurrence ka index return karta hai. Agar substring string me nahi milta, to yeh -1 return karta hai.

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("Welcome");

// let result = text.indexOf("e",2); //is ka means is me jitne bhi 'e hai ye sub chode ke 2number ki index se start kar re the se start hoga?

// console.log(result);

// ChatGPT Se liya hua Syntax ---> lastIndexOf Method ---> JavaScript me lastIndexOf method string me kisi specified substring ka last occurrence ka index find karne ke liye use hota hai. Yeh method substring ke last occurrence ka index return karta hai. Agar substring string me nahi milta, to yeh -1 return karta hai.
// let text = "Hello planet earth, you are a great planet.";
// let result = text.lastIndexOf("planet");
// console.log(result);

//=============================================== length property =================================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me length property string ki length, yaani ki string me kitne characters hain, ko find karne ke liye use hoti hai. Yeh property string object ka ek inbuilt property hai aur string ke total characters ko count karti hai.

// let text = "Hello World!";
// console.log(text.length)
// let length = text.length;
// console.log(length) //aise bhi check kar sakte hai dono same hi answer aye ga ?

//================================================= match method ==================================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me match method string objects ke sath use hota hai aur regular expressions ke saath matching operations perform karta hai. Yeh method ek array return karta hai jo string me match hone wale substrings ko contain karta hai, ya null return karta hai agar koi match nahi hota.

// ChatGPT Se liya hua Syntax --->
let str = "The rain in Spain stays mainly in the plain.";

// Simple match
let result1 = str.match(/ain/);
console.log(result1); // Output: ["ain"]

// Global match
let result2 = str.match(/ain/g);
console.log(result2); // Output: ["ain", "ain", "ain"]

// Case-insensitive match
let result3 = str.match(/ain/i);
console.log(result3); // Output: ["ain"]

// Global and case-insensitive match
let result4 = str.match(/ain/gi);
console.log(result4); // Output: ["ain", "ain", "ain"]

// No match
let result5 = str.match(/xyz/);
console.log(result5); // Output: null

let str2 = "Hello, my name is John Doe. John is a developer.";
// Capturing groups
let result6 = str2.match(/John (Doe)/);
console.log(result6); // Output: ["John Doe", "Doe"]

// Non-capturing groups
let result7 = str2.match(/(?:John) (Doe)/);
console.log(result7); // Output: ["John Doe", "Doe"]

// Match digits
let str3 = "My phone number is 123-456-7890.";
let result8 = str3.match(/\d{3}-\d{3}-\d{4}/);
console.log(result8); // Output: ["123-456-7890"]

//================================================== repeat method ================================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me repeat method string ko specified number of times repeat karne ke liye use hota hai. Yeh method ek nayi string return karta hai jo original string ko specified number of times repeat karti hai.

// let text = "Hello world!";
// let result = text.repeat(2); //jitne number utne bar Hello world! aye ga ?
// console.log(result)

//================================== replace and replaceAll method =======================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me replace method string ke andar specified substring ko ya pattern ko ek naye substring se replace karne ke liye use hota hai. Yeh method ek nayi string return karta hai jisme specified replacement kiya gaya hota hai, aur original string ko modify nahi karta.

// let firstName = 'Hello Tausif name';
// console.log(firstName);

// let result = firstName.replace('name','Qureshi'); //Replace hora yaha se ?
// console.log(result);

// ChatGPT Se liya hua Syntax ---> replaceAll method ---> JavaScript me replaceAll method string ke andar specified substring ko ya pattern ko ek naye substring se replace karne ke liye use hota hai. Yeh method string me sabhi occurrences ko replace karta hai, na ki sirf pehli occurrence ko jaise replace method karta hai.

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");
// console.log(text)

//=============================================== split method ===================================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me split method string ko ek array me convert karne ke liye use hota hai, jisme string ko specified separator ke basis par split kiya jata hai. Yeh method ek naya array return karta hai jisme split ki gayi substrings hoti hain.

let firsNtame = "Hello Tausif Qureshi";
console.log(firsNtame);

// let result = firsNtame.split(""); //ek ek word ko tod ke array ke form me dega ye split ?
// console.log(result);

// let result1 = firsNtame.split(" "); //aise karne se Hello,Tausif aisa split hoga ?
// console.log(result1)

// let result2 = firsNtame.split(" ");
// console.log(result2[1]); //aise karne se kon si index ki value hona 'Tausif' aye ga?

// let result3 = firsNtame.split(" " ,2); //aise karne se Kaha se kaha tak value chaiye kinti length hona kon si lenght tak value hona 2 lenght tak value hona  'Tausif; ' Qureshi' aye gi value ? 0 kar ke empty [] array dega q ke ham index nhi lenght re hare hai ?
// console.log(result3)

//================================================= Slice method =================================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me slice method string me se ek substring extract karne ke liye use hota hai. Yeh method ek naya string return karta hai jo original string ke specified portion ko represent karta hai. slice method string ko ek range ke basis par extract karta hai, jisme start aur end positions specify kiye jate hain.

// let firstName = "Tausif";
// console.log(firstName.slice(0, 3))

// console.log(firstName.slice(1))

//  let newString = firstName.slice(0,3)// aisa bhi kar sakte hai
//  console.log(newString)

//================================================= search method =================================================//
// ChatGPT Se liya hua Syntax ---> avaScript me search method string me kisi specified regular expression ko search karne ke liye use hota hai. Yeh method regular expression ke pehle match ka index return karta hai. Agar match nahi milta, to yeh -1 return karta hai.

// let text = "Mr Blue has a blue house";
// // let position = text.search("Blue"); //value ki index return kare ga ?

// let position = text.search("red"); // value nhi mili tu -1 dega ye method ?
// console.log(position)

//=========================================== startWith and endWith method ========================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me startsWith method check karne ke liye use hota hai ki kya ek string kisi specified substring se start hoti hai ya nahi. Yeh method boolean value return karta hai: true agar string specified substring se start hoti hai, aur false agar nahi hoti.

// let text = "Hello world, welcome to the universe.";
// console.log(text)
// let startWhit = text.startsWith("Hello");
// let startWhit = text.startsWith("Hello",0); //index se bhi check kar sakte hai agar wrong index number dal ke check karte hai tu false aye ga right number check tu true aye ga ?
// console.log(startWhit)

// ChatGPT Se liya hua Syntax ---> endtWith Method ---> JavaScript me endsWith method check karne ke liye use hota hai ki kya ek string kisi specified substring se end hoti hai ya nahi. Yeh method boolean value return karta hai: true agar string specified substring se end hoti hai, aur false agar nahi hoti.

// let text = "Hello world";
// console.log(text);

// let result = text.endsWith("world");
// console.log(result);

//================================================= trim method ===================================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me trim method string ke aage aur peeche ke white spaces ko remove karne ke liye use hota hai. Yeh method ek nayi string return karta hai jisme leading aur trailing white spaces remove kiye gaye hote hain, aur original string ko modify nahi karta.

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

//======================================== toUpperCase toLowerCase method =========================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me toUpperCase method string ko uppercase me convert karne ke liye use hota hai. Yeh method string ko uppercase letters me transform karta hai aur ek nayi string return karta hai. Original string me koi change nahi hota, kyunki strings in JavaScript immutable (unchangeable) hote hain.

// ChatGPT Se liya hua Syntax ---> JavaScript me toLowerCase method string ko lowercase me convert karne ke liye use hota hai. Yeh method string ke sabhi uppercase letters ko lowercase letters me transform karta hai aur ek nayi string return karta hai. Original string me koi change nahi hota, kyunki strings in JavaScript immutable (unchangeable) hote hain.

// let firsNtame = 'HELL0';
// console.log(firsNtame);

// let result = firsNtame.toLowerCase(); //Share Latter ko small me hoge /
// console.log(result);

// let firsNtame = 'tausif';
// console.log(firsNtame);

// let result = firsNtame.toUpperCase();  //share letter yaha se capital hoge ?
// console.log(result);

//================================= toLocaleUpperCase toLocaleLowerCase method ===================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me toLocaleUpperCase method string ko uppercase me convert karne ke liye use hota hai, lekin yeh method locale-specific rules ka bhi dhyan rakhta hai. Yeh method string ko specific locale (language and region) ke rules ke according uppercase me convert karta hai.

// ChatGPT Se liya hua Syntax ---> JavaScript me toLocaleLowerCase method string ko locale-specific rules ke according lowercase me convert karne ke liye use hota hai. Yeh method string ke characters ko specific locale (language and region) ke rules ke according lowercase me transform karta hai. toLocaleLowerCase method ka use internationalization scenarios me kiya jata hai, jahan string conversion locale-specific rules ko dhyan me rakhta hai.

// let firsNtame = 'HELL0';
// console.log(firsNtame);

// let result = firsNtame.toLocaleLowerCase(); //Share Latter ko small me hoge ?
// console.log(result);

// let firsNtame = 'tausif';
// console.log(firsNtame);

// let result = firsNtame.toLocaleUpperCase(); //Share Latter ko capital me hoge ?
// console.log(result);

//===================================== toString method ======================================//
// ChatGPT Se liya hua Syntax ---> JavaScript me toString method ka use string object ya kisi aur object ko string representation me convert karne ke liye hota hai. Yeh method object ke string representation ko return karta hai. String object ke liye, toString method self-explanatory hota hai, kyunki string already ek string hai.

// let text = "Hello world!";
// let result = text.toString();
// console.log(typeof result)

// let num = 6;
// console.log(typeof num);
//  let save = num.toString();
//  console.log(typeof save) //string me change
