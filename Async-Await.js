//Asynchronous Programming me ata hai ---> 

//async hame hamesa propmies return karta hai? asyn function bhi propmies ki tara work karta hai ya ye reslove hoga ya reject? esync function ES 2017 me javascript me aya?awaite bhi aysnc ke ander hi work karta hai awaite waite karta hai promies ke liye? kisi bhi function ke aage aysnc laga dete hai o function promies ban jata hai?


// ChatGPT Se liya hua Syntax --->  Async-await JavaScript mein ek powerful technique hai jo asynchronous code ko likhne aur manage karne mein madad karta hai. Is technique ka istemal promises ke upar kiya jata hai. Async-await, code ko readable aur maintainable banane ke liye ek elegant tarika hai


// ChatGPT Se liya hua Syntax --->  Async functions:
// Async functions ko async keyword ke saath define kiya jaata hai. Ye functions promises return karte hain.

// ChatGPT Se liya hua Syntax ---> Await keyword:
// await keyword ka use async function ke andar kiya jaata hai. Yah ek promise ke resolve hone ka intezaar karta hai aur phir promise ka resolved value return karta hai



// async function test (){ 
//     return 'Tausif'
// }
// console.log(test())


// const test = async()=>{ //arrow function bhi create kar ke bhi kar sakte hai?
//     return "Tausif"
// }
// test().then((result)=>{     //jo string upper se return hoke result varibal me store or nihce call  hori?
//   console.log(result)
// })


//aysnc await Example = await jis ke aage lagta hai us ka matlab waite karna hota hai us ke baad ki line baad me print hogi? is ka means use hota hai sarver se data ko fetch kar ke lena hota hai?


//  async function test (){ 
//   const respon = await fetch("data.json") //fetch two result deta hai text me ya json me?
//   const data = await respon.json()
// //   console.log(respon)
//    return data;
//  }
//   test ().then((res)=>{ //ye ek varibal hai jo retrun hoke ara is me store hora?
//     console.log(res)
//   }).catch((error)=>{//error aye ga tu ye wala code chale ga?
//     console.log(error)
//   })


  

//error handling in async await means promies?
// async function test (){ 
//       try { //error nhi aye ga tu ye code execute hoga warna catch wala chale ga ?
//       const respon = await fetch("data.json") //fetch two result deta hai text me ya json me?
//       const data = await respon.json();
//        return data;

//       }catch(error) { //ab bar bar lihkne ki  zarurt nhi catch niche .then me
//         console.log(error)
        
//       }

      
//      }
//       test ().then((res)=>{ 
//         console.log(res)
    
//       })
    




