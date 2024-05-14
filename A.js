// Example Alag alag 
// .then and ctch ka use kar ke Error massage handle ?
// document.addEventListener('DOMContentLoaded', function() {
//     const postsContainer = document.getElementById('posts');

//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.json();
//         })
//         .then(data => {
//             data.forEach(post => {
//                 const postElement = document.createElement('div');
//                 postElement.innerHTML = `
//                     <h2>${post.title}</h2>
//                     <p>${post.body}</p>
//                 `;
//                 postsContainer.appendChild(postElement);
//             });
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation: ', error);
//         });
// });




//  aysnc await use kar ke .then and .catch ke sath use ?
async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: Server responded with status ${response.status}`);
      }
      const data = await response.json();
      return data; // This value is returned to the 'then' block of the calling function
    } catch (error) {
      throw error; // This error is passed to the 'catch' block of the calling function
    }
  }
  // Usage of the fetchData function
  fetchData('https://jsonplaceholder.typicode.com/posts') // Notice 'posts' is likely the correct endpoint
    .then(data => console.log('Data received:', data))
    .catch(error => console.error('Error:', error));
  



  
// async awaite ka use kar ke handler Error ?
//   document.addEventListener('DOMContentLoaded', async function() {
//     const postsContainer = document.getElementById('posts');

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         console.log("ok",response)
//         // if (!response.ok) {
//         //     throw new Error(`HTTP error! Status:: ${response.statusText}`);
//         // }
//         const data = await response.json();
//         console.log(data)
//         data.forEach(post => {
//             const postElement = document.createElement('div');
//             postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
//             postsContainer.appendChild(postElement);
//         });
//     }catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//     }
// });
