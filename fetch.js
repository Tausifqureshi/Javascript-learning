// ========================================= Ftach API =================================================//

// Fatch API ----> fatch API ECMAScript6 (ES6) featur me aya hai ? Fatch API ka work hota haim server se deta lena ya dene ke liye use hota hai ? Fatch API Promise return karta hai ?
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
// postData1();



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

// ========================Fetch API .then use post request ========================================= ?
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
// fetch API me file chanege code hai text.file ka ?
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