// ChatGPT Se liya hua Syntax ---> JavaScript me math se related operations aur functions ko handle karne ke liye Math object ka use kiya jata hai. Math object built-in object hai jisme kai sare methods aur properties hote hain jo aapko mathematical operations ko efficiently perform karne me madad karte hain. 



// ========================================= Math Properties =================================================//
// ChatGPT Se liya hua Syntax ---> 

// 1. Math.PI: π (pi) ki value jo lagbhag 3.14159 hoti hai.
console.log(Math.PI); // 3.141592653589793


// 2. Math.E: E (Euler's number) ki value jo lagbhag 2.718 hoti hai.
console.log(Math.E); // 2.718281828459045


// 3. Math.LN2: 2 ke natural logarithm ki value.
console.log(Math.LN2); // 0.6931471805599453




// ========================================= Math Methods =================================================//

// ChatGPT Se liya hua Syntax --->  1. Math.abs(x).
// Ye method kisi bhi sankhya ka absolute value (param man) lautati hai.

console.log(Math.abs(-7)); // 7



// ========================================= Math.ceil =================================================//
// ChatGPT Se liya hua Syntax --->  2.Math.ceil
// Ye method kisi bhi sankhya ko uske nikatam uchchtam purnank (nearest higher integer) me round up karti hai.
console.log(Math.ceil(4.2)); // 5



// ========================================= Math.floor =================================================//
// ChatGPT Se liya hua Syntax ---> 3. Math.floor.
//Ye method kisi bhi sankhya ko uske nikatam nyuntam purnank (nearest lower integer) me round down karti hai.

console.log(Math.floor(4.8)); // 4



// ========================================= Math.round =================================================//
// ChatGPT Se liya hua Syntax ---> 4. Math.round.
// Ye method kisi sankhya ko uske nikatam purnank (nearest integer) me round karti hai.

console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4



// ======================================== Math.max(a, b, c, ...) ===============================================//
// ChatGPT Se liya hua Syntax ---> 5. Math.max(a, b, c, ...). 
// Ye method diye gaye sabhi manon me se sabse badi sankhya lautati hai.

console.log(Math.max(1, 3, 2)); // 3



// ======================================== Math..min(a, b, c, ...) ===============================================//
// ChatGPT Se liya hua Syntax ---> 6. Math..min(a, b, c, ...).
// Ye method diye gaye sabhi manon me se sabse chhoti sankhya lautati hai.

console.log(Math.min(1, 3, 2)); // 1



// ============================================== Math.random()===================================================//
// ChatGPT Se liya hua Syntax ---> 7.Math.random().
//Ye method 0 aur 1 ke beech ek random sankhya lautati hai (0 sahit, lekin 1 ko chodkar).

console.log(Math.random()); // udaharan: 0.8020143720517347



// ============================================== Math.sqrt()===================================================//
// ChatGPT Se liya hua Syntax ---> 8. Math.sqrt().
//Ye method kisi sankhya ka square root lautati hai.

console.log(Math.sqrt(16)); // 4



// ============================================== Math.pow()===================================================//
// ChatGPT Se liya hua Syntax ---> 9.  Math.pow().
//Ye method x ki shakti y (x^y) ko lautati hai.

console.log(Math.pow(2, 3)); // 8



// ==============================================  Math.sin()===================================================//
// ChatGPT Se liya hua Syntax ---> 10. Math.sin(x), Math.cos(x), Math.tan(x).
//Ye methods kon x (radians me) ke liye krmsha: sine, cosine, aur tangent value lautati hain.

console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0));           // 1
console.log(Math.tan(Math.PI / 4)); // 1



