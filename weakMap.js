// ================================================== WeakMap ==================================================== //
// ChatGPT Se liya hua Syntax ---> JavaScript mein WeakMap ek special type ka collection hai jo key-value pairs ko store karta hai. Yeh Map se similar hai, lekin kuch important differences ke saath. Chaliye, WeakMap ke features aur use cases ko detail mein samajhte hain.

// ChatGPT Se liya hua Syntax ---> WeakMap Kya Hai.
// Key-Value Storage: WeakMap key-value pairs ko store karta hai, jahan keys objects hote hain aur values kisi bhi data type ki ho sakti hain.

// Weak References: WeakMap mein keys weakly referenced hoti hain. Iska matlab hai ki agar key object ke references kahin aur nahi hain, toh garbage collector us object ko remove kar sakta hai bina WeakMap ko affect kiye.

// ============================================ WeakMap Ke Features ============================================== //

// ChatGPT Se liya hua Syntax ---> WeakSet ki Key Features.
// 1.Weak References: WeakMap mein stored keys ka weak reference hota hai, iska matlab garbage collector ke liye objects ki lifetime ke sath linked nahi hota. Jab object ka reference khatam hota hai, toh woh automatically garbage collect ho jata hai.

// 2. Non-enumerable: WeakMap ka content enumerate nahi kiya ja sakta. ska matlab hai ki Aap for-of loop ya forEach method ka use karke WeakMap ko iterate nahi kar sakte.

// 3. Keys Must Be Objects: WeakMap ki keys sirf objects honi chahiye. Primitive types (jaise number, string) as keys use nahi kiye ja sakte.

// ============================================ WeakSet ke Methods =============================================== //

// ChatGPT Se liya hua Syntax ---> WeakMap ke Methods.
// 1. set(key, value): WeakMap mein ek key-value pair set karta hai.
// 2. get(key): Agar key exist karti hai, toh uski value return karta hai. Agar key nahi hai, toh undefined return karta hai.
// 3. has(key): Check karta hai ki key WeakMap mein hai ya nahi. Return value true ya false hoti hai.
// 4. delete(key): Agar key exist karti hai, toh us key-value pair ko delete karta hai. Return value true ya false hoti hai depending on success.


// ChatGPT Se liya hua Syntax ---> Example.
// Create a new WeakMap
let weakMap = new WeakMap();

// Create some objects to use as keys
let obj1 = {};
let obj2 = {};

// Set values in the WeakMap
weakMap.set(obj1, "Value for obj1");
weakMap.set(obj2, "Value for obj2");

// Get values from the WeakMap
console.log(weakMap.get(obj1)); // Output: "Value for obj1"
console.log(weakMap.get(obj2)); // Output: "Value for obj2"

// Check if a key exists
console.log(weakMap.has(obj1)); // Output: true
console.log(weakMap.has(obj2)); // Output: true

// Delete a key-value pair
weakMap.delete(obj1);
console.log(weakMap.has(obj1)); // Output: false

// Garbage collection
// If no other references to obj1 exist, it will be garbage collected and removed from WeakMap
