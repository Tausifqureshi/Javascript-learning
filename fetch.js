
// ========================================= Ftach API =================================================//

// Fatch API ----> fatch API ECMAScript6 (ES6) featur me aya hai ? Fatch API ka work hota haim server se deta lena ya dene ke liye use hota hai ? Fatch API Promise return karta hai ? 



// Fatch API AJAX Call ?
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((apiData)=>{
    console.log(apiData);
})




// ==========================================fetch API Post request ========================================= //
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

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

main();





async function postData(url, data = {}) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    return response.json(); // Assumes the server responds with JSON. Handle accordingly if there's variation.
}

// Example usage:
postData('https://example.com/data', { key: 'value', anotherKey: 'anotherValue' })
    .then(data => console.log(data))
    .catch(error => console.error('Error during postData:', error));
