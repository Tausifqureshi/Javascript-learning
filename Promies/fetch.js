// ========================================= Ftach API =================================================//

// Fatch API ----> Fetch ek global fetch method hai jo global se strat karta hai kisi resource ko fetch karne ke liye ? fatch API ECMAScript6 (ES6) featur me aya hai ? Fatch API ka work hota hai server se deta lena ya dene ke liye use hota hai ? Fatch API Promise return karta hai ?

// ChatGPT Se liya hua Syntax ---> Fetch API JavaScript mein server se data fetch karne ke liye ek built-in interface hai. Isse aap HTTP requests bhej sakte hain, jaise GET, POST, PUT, DELETE, etc. Yeh ek modern alternative hai XMLHttpRequest (XHR) object ka, jo traditional taur par data fetch karne ke liye istemal hota tha.

// Fetch API ke kaam karne ka tarika yeh hai:
// fetch() function: Yah function ek URL ko argument ke roop me leta hai aur ek Promise return karta hai.
// Promise: Promise ek object hai jo ek asynchronous operation ke result ko represent karta hai.
// Response object: Promise resolve hone par, yah ek Response object return karta hai jo HTTP response ko represent karta hai.

// Response methods: Response object me kai methods hote hain jinse aap response data ko access aur manipulate kar sakte hain. Jaise ki:
// json(): Response body ko JSON format me parse karta hai.
// text(): Response body ko string me convert karta hai.
// blob(): Response body ko Blob object me convert karta hai.

// Error handling: Agar request me koi error aata hai, to Promise reject ho jaata hai aur error object return hota hai.


// ChatGPT Se liya hua Syntax ---> Example
fetch('https://api.example.com/data')
  .then(response => {
    // Yahaan se response ka status check karenge
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Agar sab thik hai, toh JSON format mein response ko parse karenge
    return response.json();
  })
  .then(data => {
    // Ab yahaan par aap jo bhi karna chahte hain, woh kar sakte hain
    console.log(data);
  })
  .catch(error => {
    // Agar koi error aata hai toh yahaan handle karenge
    console.error('There was a problem with the fetch operation:', error);
  });







// Fatch API AJAX Call ?
// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((apiData) => {
//     console.log(apiData);
//     return apiData.json();
//   })
//   .then((accessData) => {
//     console.log(accessData)
//   });



// ==========================================fetch API Post request ========================================= //
// aysnc await use post request

const url = 'https://api.example.com/data'; // Replace this with your API endpoint

const postData1 = async () => {
  const data = {
    key1: "value1",
    key2: "value2",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify the content type
        // Add any other headers if needed
      },
      body: JSON.stringify(data), // Convert data to JSON string
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json(); // Parse the JSON response
    console.log("Success:", responseData);
  } catch (error) {
    console.error("Error:", error);
  }
};
// postData1(); //sort tarika hai ye.


// Return kar re ge data tu aisa code lihknqa hoga.
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function main() {
  try {
    const value = await fetchData();
    console.log(value);
  } catch (error) {
    console.error("Error in main:", error);
  }
}

//   main();

// ======================== Fetch API .then use post request ========================================= ?
// const url = 'https://jsonplaceholder.typicode.com/posts'; // Replace this with your API endpoint

const postData = async () => {
  const data = {
    key1: "value1",
    key2: "value2",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify the content type
        // Add any other headers if needed
      },
      body: JSON.stringify(data), // Convert data to JSON string
    });

    if (!response.ok) {
      // Handle HTTP error status codes
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json(); // Parse the JSON response
    console.log("Success:", responseData);
    return responseData;
  } catch (error) {
    // Handle network errors, fetch API errors, or JSON parsing errors
    console.error("Error:", error);
    // Optionally rethrow the error to propagate it
    throw error;
  }
};

// Call the postData function
postData()
  .then(responseData => {
    // Handle the response data if needed
    console.log('Response Data:', responseData);
  })
  .catch(error => {
    // Handle any errors occurred during the postData function
    console.error('Failed to post data:', error);
  });



// upper wala ye dono same hi hai .then wala  but ya sort hai aise bhi request kar sakte hai ?
// const url = "https://jsonplaceholder.typicode.com/posts"; // Replace this with your API endpoint
// const data = {
//   key1: 'value1',
//   key2: 'value2'
// };

// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json', // Specify the content type
//     // Add any other headers if needed
//   },
//   body: JSON.stringify(data) // Convert data to JSON string
// })
// .then(response => {
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json(); // Parse the JSON response
// })
// .then(data => {
//   console.log('Success:', data);
// })
// .catch(error => {
//   console.error('Error:', error);
// });





;
//fetch API me file chanege code hai text.file ka ?
const urls = "https://jsonplaceholder.typicode.com/posts";
// async function myFun1(){
// try {
//     let fatchingAPI =  await fetch(url);
//     console.log(fatchingAPI);
//     let jsonData = await fatchingAPI.json(); //json data me file aye gi is tara se ?
//     console.log(jsonData);
//     // let textData = await fatchingAPI.text();  // fetchAPI me text File me bhi aisa data le sakte hai but not good peractic this text() method json me hi data lene chachiye ?
//     // console.log(textData);
// } catch (error) {
// console.error("Error fetching data: ", error);
// }


// }

// myFun1();




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
//  let url = "https://jsonplaceholder.typicode.com/posts";
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


  
