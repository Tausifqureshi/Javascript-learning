// ================================================== WeakSet ==================================================== //
// ChatGPT Se liya hua Syntax ---> What is a WeakSet.
// WeakSet JavaScript me ek special type ka Set object hai jo weakly held objects ko store karta hai. WeakSet sirf objects ko hi store kar sakta hai, primitive values ko nahi. WeakSet ka use usually tab kiya jata hai jab aapko kisi object ko temporary set ya collection me rakhna ho bina is baat ki chinta kiye ki un objects ko garbage collection se roka ja raha hai.

// ChatGPT Se liya hua Syntax ---> WeakSet ki Key Features.
// 1. Sirf Objects: WeakSet mein sirf objects ho sakte hain, primitive values jaise numbers ya strings nahi.
// 2. Weak References: WeakSet mein objects ke references weak hote hain, matlab agar kisi object par aur koi references nahi hain, to object garbage collected ho sakta hai.
// 3. Non-Enumerable: WeakSet ke elements ko enumerate nahi kiya ja sakta, iska matlab aap WeakSet ke elements par iterate nahi kar sakte.
// 4. No Size Property: Set ke unlike, WeakSet mein size property ya clear method nahi hoti.

// ============================================ WeakSet ke Methods =============================================== //
// ChatGPT Se liya hua Syntax ---> WeakSet ke Methods.
// 1. add(value): Ek object ko WeakSet mein add karta hai.
// 2. delete(value): Ek object ko WeakSet se remove karta hai.
// 3. has(value): Check karta hai ki ek object WeakSet mein hai ya nahi.

// ChatGPT Se liya hua Syntax ---> Example.
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

