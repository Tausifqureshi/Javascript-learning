// ChatGPT Se liya hua Syntax --->  JavaScript mein Stack aur Heap.

// JavaScript mein, memory management ek mahatvapurna kaaran hai jo code ki performance aur efficiency ko prabhavit karta hai. Isme do pramukh kshetra shamil hain: stack aur heap. Inka sahi tarike se upyog karke, aap apne code ko behtar bana sakte hain aur memory leaks se bach sakte hain.

// ================================================ Stack Memory ===============================================//
// ChatGPT Se liya hua Syntax ---> Stack Kya Hai.

// Stack ek LIFO (Last In, First Out) data structure hai jo function calls, variables, aur bindings ko store karta hai. Jaise jaise aap function ko call karte hain, unke liye stack mein ek naya frame banaya jata hai. Is frame mein function ke liye zaruri sabhi data shamil hota hai, jaise ki local variables aur arguments. Jab function return hota hai, to uska frame stack se hataya jaata hai.

// Primitive values: Numbers, strings, booleans, aur undefined jaise primitive values ko stack mein store kiya jata hai.

// Function calls: Jab aap koi function call karte hain, to stack mein ek naya frame banaya jata hai. Is frame mein function ke liye zaruri sabhi data shamil hota hai, jaise ki local variables aur arguments.

// Variable bindings: Jab aap koi variable declare karte hain, to stack mein uska ek binding banaya jata hai. Is binding mein variable ka naam aur uska value shamil hota hai.

// Stack ka size fixed hota hai aur yah memory mein ek nishchit sthan par sthit hota hai. Agar stack overflow ho jata hai, to ek error aaega jise "stack overflow" kaha jata hai. Stack ka istemal memory management ke liye kiya jaata hai.



// Examples.
let myName = "Tausif"; 
console.log(myName);

let newName = myName;
console.log(newName);

newName = "Qureshi"; // Stack me jo bhi varible hote hai o copy hote hai only sirf newName wale me hi chnage hoga .
console.log(newName);



// ================================================ Heap Memory ===============================================//
// ChatGPT Se liya hua Syntax ---> Heap Kya Hai.

// Heap ek dynamic memory pool hai jo objects ko store karta hai. Objects mutable data structures hain jo properties aur methods ke sath hote hain. Heap mein objects ko manually allocate aur deallocate kiya ja sakta hai.

// Objects: Arrays, functions, aur objects jaise complex data structures ko heap mein store kiya jata hai.

// Large data structures: Agar koi data structure bahut bada hai aur stack mein fit nahin ho sakta hai, to usse heap mein allocate kiya ja sakta hai.

// Dynamically allocated data: Agar aapko runtime mein memory allocate karne ki avashyakta hai, to aap heap ka upyog kar sakte hain.

// Heap ka size dynamic hai aur yah memory mein kisi bhi sthan par sthit ho sakta hai. Heap mein memory leaks ho sakte hain agar objects ko sahi tarike se deallocate nahin kiya jata hai. Heap ka istemal memory management ke liye kiya jaata hai. 


// Examples.


let myUser ={
    firstName : "Qureshi",
    email : "qureshi321@gmail.com",

}


let secondUser = myUser;
console.log(secondUser.email);

secondUser.email = "Tausif123@gmail.com"; //Heap me jo store hote hai object function. secondUer me change tu myUser me bhi change hoga q ke ye reference type data hai.

console.log(secondUser.email);

console.log(myUser.email); //Heap me jo store hote hai object function. secondUer me change tu myUser me bhi change hoga q ke ye reference type data hai.



































































































