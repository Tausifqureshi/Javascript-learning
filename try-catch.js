// ChatGPT Se liya hua Syntax --->  JavaScript me try-catch block ka upyog errors ko handle karne ke liye kiya jata hai. Yeh block aapko allow karta hai ki aap apne code me errors ko detect kar sake aur unhe graceful tarike se handle kar sake, jisse ki aapka program crash na ho.

// ChatGPT Se liya hua Syntax ---> Try Block: Ye block wo code contain karta hai jisme error expect ho sakta hai. Jab bhi aap koi risky operation perform karte hain (jaise ki file read, network request, ya complex calculations), aap ise try block me daal sakte hain.

// ChatGPT Se liya hua Syntax ---> Catch Block: Agar try block me koi error aata hai, to catch block execute hota hai. Is block me aap error ko catch kar sakte hain, aur usko handle ya report kar sakte hain. Error object catch block ke parameter me available hota hai, jisse aap uske details access kar sakte hain (jaise ki error message).

// ChatGPT Se liya hua Syntax ---> inally Block (Optional).
// Aap try-catch ke sath finally block bhi use kar sakte hain. Ye block hamesha execute hota hai, chahe try block me error aaye ya na aaye. Ye cleanup operations ke liye useful hota hai, jaise ki resource release.


try {
    console.log('Inside try block');
    // Simulating an error
    throw new Error('Something went wrong');
} catch (error) {
    console.error('Caught an error:', error.message);
} finally {
    console.log('Finally block executed');
}
