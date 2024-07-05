// ChatGPT Se liya hua Syntax --->

// =========================================== Regular Expressions =============================================== //
// ChatGPT Se liya hua Syntax ---> Regular Expressions (RegEx) JavaScript me ek powerful tool hai pattern matching, searching aur text manipulation ke liye. Ye extensively use hote hain text processing aur validation ke liye.

// 1. Flags
// Regular expressions ke sath kuch flags bhi hote hain jo unke behavior ko modify karte hain:
// g: Global search (saare matches dhundta hai, pehle match pe nahi rukta).
// i: Case-insensitive search (bade aur chhote case ka fark nahi karta).
// m: Multi-line search (input ko multiple lines ke roop mein treat karta hai).


// 2. Metacharacters: Special characters jo patterns ko define karte hain:
// . : Koi bhi single character ko match karta hai.
// \d : Koi bhi digit (0-9) ko match karta hai.
// \w : Koi bhi word character (alphanumeric aur underscore) ko match karta hai.
// \s : Koi bhi whitespace character (space, tab, newline) ko match karta hai.
// \D, \W, \S : \d, \w, aur \s ke opposites ko match karte hain.
// ^ : String ki shuruaat ko match karta hai.
// $ : String ke end ko match karta hai.


// 3. Quantifiers
// Quantifiers specify karte hain ki ek character ya group kitni baar appear ho sakta hai.
// *: 0 ya adhik baar.
// +: 1 ya adhik baar.
// ?: 0 ya 1 baar.
// {n}: Exact n baar.
// {n,}: Kam se kam n baar.
// {n,m}: Kam se kam n aur adhik se adhik m baar.


// 4. Character Classes: Characters ke sets ko define karte hain.
// [abc] : 'a', 'b', ya 'c' characters me se koi ek.
// [^abc] : 'a', 'b', ya 'c' characters ko chhod kar koi ek character.
// [a-z] : 'a' se 'z' tak koi bhi character (lowercase letters).



// 5. Anchors
// Anchors specify karte hain ki match string ke kis part mein hona chahiye:
// ^: String ke beginning se match
// $: String ke end se match
// \b: Word boundary (shabd ke aage ya peechhe)
// \B: Non-word boundary



// 6. Grouping and Capturing
// Parentheses () se aap groups bana sakte hain aur unhe capture kar sakte hain.
// (abc): 'abc' ko ek group mein capture karta hai
// (?:abc): Non-capturing group (grouping bina capturing ke liye)


// 7. Alternation
// Pipe symbol | se alternation ka use kar sakte hain, jo multiple patterns ko match karta hai:


// 8. Escaping Special Characters
// Kuch characters special hote hain aur agar aapko unhe as is match karna ho toh unhe escape karna padta hai (backslash \ ka use karke):


//  Methods
// JavaScript mein regular expressions ke kuch useful methods hain

// 1. test(): Check karta hai ki pattern match hota hai ya nahi (boolean return karta hai).
let regex1 = /hello/;
console.log(regex1.test("hello world")); // true


// 2. exec(): Match ko dhundhta hai aur match result return karta hai (ya null agar match na ho).
let regex2 = /hello/;
console.log(regex2.exec("hello world")); // ["hello", index: 0, input: "hello world", groups: undefined]



// 3. match(): Ye method ek string par call kiya jata hai aur matching results ka array return karta hai.
let str3 = "hello world";
console.log(str3.match(/hello/)); // ["hello", index: 0, input: "hello world", groups: undefined]

// 4. replace(): Ye method ek string par call kiya jata hai aur matched substrings ko replace karta hai.
let str = 'hello world';
let result1 = str.replace(/hello/, 'hi'); // "hi world"


// 5. search(): Ye method ek string par call kiya jata hai aur first match ke index ko return karta hai.
let str5 = 'hello world';
let result2 = str5.search(/world/); // 6


// 6. split(): Ye method ek string ko regular expression pattern ke anusar split karta hai.
let str6 = 'apple, banana, cherry';
let result = str6.split(/, /); // ["apple", "banana", "cherry"]





let myName = "\nTausif \nQuraishi"; //coding me new line me jane ke liye aisa use karte hai.
console.log(myName)































































































