// <------------------------------>for loop<-------------------------------->
//Progrmming language  me loop ka use kisi action ya procese ko bar bar repit karne ke liye use kar te hai ? iterate mens hota hai repit karna bar bar us ko hi loop bolte hai ? 
for(let i = 0; i < 10; i++){
    document.writeln("Tausif Qureshi","<br>","<br>");
}


//Loop ka matlab  iterated karna hota hai
//for loop ---->  
// let i =0; // yaha pe bhi variable diclear kar sakte hai

// for(let i =0; i<=9; i++){
//     console.log(i)

// }

//for loop example?
// let total = 0;
// let i=1;
// for(;i<=10; i++){
//     total=total+i
// }
// console.log(total)


// let total = 0    // aisa bhi kar sakte jo eyse pade hame?
// let num = 10
// for(let i=1; i<=num; i++){
//     total=total +i
// }
// console.log(total)

// <------------------------------> loop decrment use mean ulta<-------------------------------->

// for (var i = 10; i > 0; --i) {
//   console.log(i)
// }

// for(var i = 10; i > 0; i--){
//     document.write(i+ "<br>");
// }

// <------------------------------>while loop<-------------------------------->
//While loop--->
//less then use i ki value 0 hai ya 3 ke bara nhi hoti tab tak ye loop chale gi jaise hi 3 aye ga ruk jaye gi 4 nhi aye q ke <= use hai us se choti ya barabr ki value tak hi print hoga
// let i = 0;
// while (i <= 10) {
//   document.write(i + "<br>");
//   i++;
// }
   
//while loop example
//  let i = 0;
//  let total = 0;
//  while(i<=10){
//     total=total+i;  //ek ek sum hoga total me 10 bar tak niche example hai total first 0 ta fir one one add hoga?
//     i++
//  }
//console.log(total)
//uppr while loop se kuch aisa hi hora hai
// total= 0 + 1;     // ye 1se10 tak i use hora loop chala ke 1,2,3,10 tak ye i hai jo loop chala run hone pe are hai?
// total= 1 + 2;
// total= 3 + 3;
// total= 6 + 4;
// total= 10 + 5;
// total= 15 + 6;
// total= 21 + 7;
// total= 28 + 8;
// total= 36 + 9;
// total= 45 + 10;
// total= 55// aye ga anwser?

// let num = 10;    //aisa bhi kar sakte hai ye fast hai?
// let total1 = (num*(num+1))/2;
// console.log(total1)


// <------------------------------>do while loop<-------------------------------->
//do while loop--> while loop ka hi version hai ye do while loop? ye loop ek bar zarur chalti hai contision false ho tobhi?
// let i = 10   //value false tobhi chale ga q ke o first console hora hai?

// do{
//     console.log(i)
  
// }while(i<=9)



// <------------------------------>break and continue keyword<-------------------------------->
//The break statement "jumps out" of a loop.

//break ye jis pe use hota hai codo wahi block ho jata hai code direct lop ke bher nikal jata hai?
// for(let i = 0; i<=10; i++){
    //     if(i===4){
        //         break;
        //     }
        //     console.log(i)
// }


//contineu ye ji number pe contineu use hota hai us se block nhi karta us se ignor kar ke aage badta hai
//The continue statement "jumps over" one iteration in the loop.

// for(let b = 0; b<=10; b++){
    //     if(b===5){
        //         continue;
        //     }
        //     console.log(b)
// }



// <------------------------------>Array use for loop<-------------------------------->
//Loop ka matlab  iterated karna hota hai?
// let array1 = ["apple","mango","banana","orange","kiwi"]
// let newArray=[] //new array bana ke direct push 

// for(let i=0; i < array1.length; i++){
// //console.log(array1[i].toUpperCase())  //upper lower or bhi method use kar sakte hai aisa?

// newArray.push( array1[i].toUpperCase()) //newArray jo ban raha us me jara
// }
// console.log(newArray) //newArrya me jo jara print hora yaha se ?



// <------------------------------>Array use for of loop<-------------------------------->
//Loop ka matlab  iterated karna hota hai?
// //for of loop autometically chalti hai jitni us ki length hoti hai waha tak chalti hai or loo ki tara initialvalue nhi ena hota hai?
// let fruits = ["apple","mango","banana","orange","kiwi"];
// for(let i of fruits){
//     console.log(i)
// }


// <------------------------------>Array use for in loop<-------------------------------->
//Loop ka matlab  iterated karna hota hai?
//ye loop onlye index deti hai first value nhi deti?
// let fruits = ["apple","mango","banana","orange","kiwi"];
// for(let i in fruits){
//     console.log(fruits[i])// items bhi chahiye to aise print warna ye sirf index deti hai first?
// }





// <------------------------------>Array use while loop<-------------------------------->
//Loop ka matlab  iterated karna hota hai?
// let array1 = ["apple","mango","banana","orange","kiwi"]
// let i = 0;
// while(i < array1.length){
//     console.log(array1[i].toUpperCase())
//     i++
// }








