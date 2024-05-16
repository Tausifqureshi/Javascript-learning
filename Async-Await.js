//Asynchronous Programming me ata hai ---> 

//async hame hamesa propmies return karta hai? asyn function bhi propmies ki tara work karta hai ya ye reslove hoga ya reject? esync function ES 2017 me javascript me aya?awaite bhi aysnc ke ander hi work karta hai awaite waite karta hai promies ke liye? kisi bhi function ke aage aysnc laga dete hai o function promies ban jata hai?
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
    




      // Fatch API Call data.json File?
      async function myFun() {
        try {
          let call = await fetch("data2.json");
          let respon = await call.json();
          console.log(respon);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      }

      // myFun()





// jab bhi data fetch karte hai await nhi use tu promise pending return karta hai ?

 let url = "https://jsonplaceholder.typicode.com/posts";
  // async function fetchData(){
  //   try {
  //   // let dataFetch = fetch(url); //
  //   let dataFetch = await fetch(url) ;
  //   // console.log(dataFetch);
  //   } catch (error) {
  //     console.error('There was a problem with the fetch operation:', error)
  //   }
 
  // }

  // fetchData()
