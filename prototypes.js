//prototype ---> Prototype ka use ham consturctor ya jaavscript ki class me use kar kar te hai ?  prototype ka use kar ke Constructor me propertry and method add kar sakte hai ? prototype ka use kar ke onlye object me hi property and method change add kar sakte hai ? 

// prototype-inheritance ---> is matlab hota hai hamne 2 constructor function banaye hai ek constructor function me hamne jo bhi property and method defind kiye hai o dusre wale constructor function ko us ki property and method us kar re manms hamne ek Peron ka constructor banye or dusra Preson 2  constructor function banye but ham code repit na hot Preson me jo bhi property and method hai o Preson2 use kar re is ko bolte hai Prototype-Inheritance is ko use karne ke liye ham tab hi __proto__ ka use kar te hai ? 


// __proto__  ----> is use hota hai ek object se other object ki property and method ko link kar ke use karne ke liye ?


let blankObj = {}; // is tara se object banae se jab ham console open karte hai tab hame jo javascript ka har ek ke sath object-protype hai us me jitni bhi property hai dirct show hogi ?

// console.log(blankObj);


function Person(fName, lName) {
        this.firstName = fName,
        this.lastNmae = lName

        // this.fullName = function () { 
        // return `${this.firstName} ${this.lastNmae}`;

        // } // but is me ek problem hai jo hamne fullName ka method banaye hai o bhi dono me copy pate ho gaya hai is progrmming me bolte hai dry dont repit your code aise code repit nhi hona us se memory me jaga leta hai is ke suletion hai jab bhi ham function banye ke us ko object ka ander nhi rahk ke prototype me rahkte means constructor ke ander ?
}

Person.prototype.madein = 'india'; //proptotype me property bhim add kar sakte hai meams constructor ke ander ?


Person.prototype.fullName = function(){ //is bolte hai prototype me method rahkna meams constructor ke ander aye ga ye method ?  is se dry nhi hoga code dry dont repit your code aise code repit nhi hona ?
    
return `${this.firstName} ${this.lastNmae} ${this.madein}` //add ki property return bhi kar re hai madein ko ?
}



let autherName = new Person('Tausif','Qureshi'); // Constructor object banane se jo javascript ka har ek ke sath object-protype hai us me jitni bhi property hai dirct show nhi hoti hai ? jab bhi ham constructor function se jab bhi obejct banate hai tu constructor function apne naam ka hi first ek prototype bana leta hai us ke baad jo prototype show hota hai jo javascript ka inbuilt hai har ek ke sath us ki property constructor wale prototype ke baad show hoti hai ? is ko bolte hai prototype chaining constructor function ka prototype javascript ke inbuilt object wale prototype se conect hota hai ?

console.log(autherName);

// console.log(autherName.fullName()); //kisi bhi object ke sath call kar sakte ye method ? ye method ab object me nhi ara hai ye constuctor ke ander ara hai ? jo fullName ka method ander defind hai us ko commit open kar ke console kar re ge tu o method constructor me nhi balki object me aye ka jaisa fisrtname,lastName are hai ? add ki hoho property bhi use kar sakte hai madein wali ?


// let autherName1 = new Person('Hayderabaad','kodad'); // constructor function me jitne bhi property and method defind kiya te o authername and authername 1 dono object me copy huye jitne bhi object defind kar re ge un sub me copy ho jaye ge this.lname ye sub and fullName ka method bhi ? 


// console.log(autherName1)
// console.log(autherName1.fullName()); //kisi bhi object ke sath call kar sakte ye method ?




















































































































































































































