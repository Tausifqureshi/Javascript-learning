
// ========================================= Ftach API =================================================//

// Fatch API ----> fatch API ECMAScript6 (ES6) featur me aya hai ? Fatch API ka work hota haim server se deta lena ya dene ke liye use hota hai ? Fatch API Promise return karta hai ? 



// Fatch API AJAX Call ?
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((apiData)=>{
    // console.log(apiData);
})


   

// ==========================================fetch API Post request ========================================= //
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        method: 'POST'
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }

        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// To use fetchData and handle its result properly, wrap the call in an async function if you are not using top-level await.
async function main() {
    const value = await fetchData();
    console.log(value);
}

// main();




