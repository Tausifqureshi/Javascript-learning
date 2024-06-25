// ChatGPT Se liya hua Syntax ---> Lexical Scoping.
// Lexical Scoping ko static scoping bhi kaha jata hai. Iska matlab hai ki ek variable ki scope (yaani kaha se access ho sakta hai) us code ki structure ke basis pe define hoti hai jahan pe wo likha gaya hai, na ki runtime pe.


function outerFunction() {
    var outerVariable = 'I am outside!';
    
    function innerFunction() {
        console.log(outerVariable); // Lexical scoping se ye value access kar ra hai. lexical scope matlab ye innerFunction jis ke ander defiend hua hai o us ka parent hoga is ka parent outerFunction hua. is liye ye innerFunction apne parent outerFunction ki variable ko access kar sakta hai is ko bolte hai LexicalScoping.
    }
    
    innerFunction();
}

outerFunction(); // Output: I am outside!



// ================================================= Scope Chain ================================================ //
//  ChatGPT Se liya hua Syntax ---> Scope Chain.
// Scope Chain tab banti hai jab multiple scopes ek dusre ke andar nested hote hain. Jab JavaScript ko koi variable ko access karna hota hai, toh wo current scope se start karta hai aur chain ke through parent scopes ko traverse karta hai jab tak wo variable ko na mil jaye.

let globalVariable = 'I am global!';

function outerFunction() {
    let outerVariable = 'I am outside!';
    
    function innerFunction() { //Scope chanin matlab hota hai function ke ander nestet function tu o scope chain banti hai.
        
        let innerVariable = 'I am inside!';
        console.log(globalVariable);  // Accesses global scope
        console.log(outerVariable);   // Accesses outer function scope
        console.log(innerVariable);   // Accesses inner function scope
    }
    
    innerFunction();
}

outerFunction();








































































































































