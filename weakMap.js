// ================================================== WeakMap ==================================================== //
// ChatGPT Se liya hua Syntax ---> What is a WeakSet.
// A WeakSet is a collection of objects where each object can only be added once. Unlike Set, WeakSet does not prevent its elements (objects) from being garbage-collected if there are no other references to them. This makes WeakSet useful for scenarios where you want to store a collection of objects without preventing their garbage collection.


// ChatGPT Se liya hua Syntax ---> WeakSet ki Key Features.
// 1. Sirf Objects: WeakSet mein sirf objects ho sakte hain, primitive values jaise numbers ya strings nahi.
// 2. Weak References: WeakSet mein objects ke references weak hote hain, matlab agar kisi object par aur koi references nahi hain, to object garbage collected ho sakta hai.
// 3. Non-Enumerable: WeakSet ke elements ko enumerate nahi kiya ja sakta, iska matlab aap WeakSet ke elements par iterate nahi kar sakte.
// 4. No Size Property: Set ke unlike, WeakSet mein size property ya clear method nahi hoti.


// ChatGPT Se liya hua Syntax ---> WeakSet ke Methods
// 1. add(value): Ek object ko WeakSet mein add karta hai.
// 2. delete(value): Ek object ko WeakSet se remove karta hai.
// 3. has(value): Check karta hai ki ek object WeakSet mein hai ya nahi.


// ChatGPT Se liya hua Syntax ---> WeakMap Ke Kuch Important Points.
//No Iteration: WeakMap iterable nahi hoti. Aap for-of loop ya forEach method ka use karke WeakMap ko iterate nahi kar sakte.

//Weak References: WeakMap ki keys weakly referenced hoti hain. Agar key object ka koi aur reference nahi hota to woh garbage collected ho jata hai, aur corresponding entry WeakMap se automatically remove ho jati hai.




// WeakSet banana
let weakset = new WeakSet();

let obj1 = { name: "Tausif" };
let obj2 = { name: "JavaScript" };

// Objects ko WeakSet mein add karna
weakset.add(obj1);
weakset.add(obj2);

console.log(weakset.has(obj1)); // true
console.log(weakset.has(obj2)); // true

// Ek object ko WeakSet se remove karna
weakset.delete(obj2);

console.log(weakset.has(obj2)); // false

// Garbage collection ka example
let obj3 = { name: "Garbage" };
weakset.add(obj3);

console.log(weakset.has(obj3)); // true

// obj3 ke aur koi references nahi hain, ye garbage collected ho sakta hai
obj3 = null;

// Kuch samay baad, obj3 ko JS engine garbage collect kar sakta hai
console.log(weakset.has(obj3)); // false (ya true, depend karta hai ki GC run hua ya nahi)










