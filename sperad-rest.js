// ChatGPT Se liya hua Syntax ---> JavaScript mein Spread Operator (…).
// Spread operator, jise ellipsis operator bhi kaha jata hai, ek aisa JavaScript tool hai jo iterable objects (jaise arrays aur objects) ko expand karne mein madad karta hai. Yah hamen arrays ko combine karne, functions ko arguments pass karne, aur objects ko copy karne mein aasan banata hai.

// ChatGPT Se liya hua Syntax ---> Yeh kya karta hai.
// iterableObject ko expand karta hai aur uske elements ko newArray mein dalta hai.

// Agar iterableObject ek array hai, toh newArray mein uske sabhi elements honge.

// Agar iterableObject ek object hai, toh newArray mein uske sabhi properties honge.

// Array Copying:.
let ar = [1,2,3,4,];
console.log(ar)
let arr2 = [...ar];
console.log("arry sperad oparetor",arr2)


// 1. Arrays ko Combine karna.
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combinedNumbers = [...numbers1, ...numbers2];
console.log(combinedNumbers); // Output: [1, 2, 3, 4, 5, 6]


// 2. Functions ko Arguments Pass karna.
function addNumbers(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [1, 2, 3];
  const sum = addNumbers(...numbers);
  console.log(sum); // Output: 6

  

// 3. Objects ko Copy karna.
const originalObject = {
    name: "John",
    age: 30,
    city: "Delhi"
  };
  
  const copiedObject = { ...originalObject };
  console.log(copiedObject); // Output: { name: "John", age: 30, city: "Delhi" }

  
// 4. Array Destructuring.
const number = [1, 2, 3, 4, 5];
const [first, second, ...rest] = number;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]


// 5. Objects Destructuring.
const person = {
    name: "Alice",
    age: 25,
    address: {
      city: "Mumbai",
      country: "India"
    }
  };
  
  const { name, age, address: { city, country } } = person;
  console.log(name); // Output: Alice
  console.log(age); // Output: 25
  console.log(city); // Output: Mumbai
  console.log(country); // Output: India
  

// 6. Spread Operator for Strings.
  const str = 'hello';
  const letters = [...str]; // ['h', 'e', 'l', 'l
 console.log(letters);

// 7. Object Merging.
const obj1 = { foo: 'bar' };
const obj2 = { baz: 'qux' };
const mergedObj = { ...obj1, ...obj2 }; // { foo: 'bar', baz: 'qux' }
console.log(mergedObj);


//8. . Adding Elements.
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
console.log(newArr);


// =============================================== Rest Oparetor =================================================//
// ChatGPT Se liya hua Syntax ---> Rest Operator kya hai?
// Rest operator, JavaScript me ek naya syntax hai jo functions ko indefinite number of arguments accept karne ki facility deta hai. Yah ES2015 (ES6) me introduce kiya gaya tha. Rest operator ko ... (three dots) ke symbol se represent kiya jata hai. Rest operator ek JavaScript feature hai jo aapko arrays ya function parameters ke sath flexible tarike se kaam karne ki anumati deta hai.

// 1 simple exmple.
function addNumbers(...numbers) {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum;
  }
  console.log(addNumbers(1, 2, 3, 4, 5)); // Output: 15



// 2 Rest Operator in Arrays:
// Rest operator ka upyog arrays me multiple values ko ek single array me collect karne ke liye kiya jata hai. Jab aap kisi function ko call karte hain aur usme arguments ko pass karte hain, toh rest operator ... ke saath use kiya ja sakta hai, jo baaki ke arguments ko ek array me collect karta hai.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  

// 3 Rest Operator in Function Parameters:
// Function definition me bhi rest operator ka upyog kiya ja sakta hai. Jab aap function parameters me rest operator ka upyog karte hain, toh ye function ke liye flexibility provide karta hai, kyunki isse aap kisi bhi sankhya ke arguments ko handle kar sakte hain.
function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
  }
  
  console.log(multiply(2, 1, 2, 3, 4)); // Output: [2, 4, 6, 8]
  
 
  



