// hoisting  --> mans function hosting support karata hai us se first upper call karo ya niche o support karta hai only function declaretion function Expreeson nhi supporet karta hai ? but ham  variable create kar ke us ke upper consloe karte hai tu variable bhi hosting support nhi karta hai? javascript me class bhi Hosting Support nhi leta hai ?

// hello();

// function hello(){
//     console.log("hello world");
// }
// console.log(hello);
// const hello = "hello world";
// console.log(hello);





//  javascript me class bhi Hosting Support nhi leta hai ?

// let emoloyes2 = new Employes ('2','Qureshi');  // 
// emoloyes2.details(); //emoloyes2 ko first value dena? bad me  Employes class initialization karna is se bolte hai hosting ? class bhi Hosting Support nhi leta hai


class Employes{ //Cretae Class
    constructor(id,name){  //Create Object constructor use kar ke?
        this.id = id,
        this.name = name
    }
   details(){   //Sort Method Means object ke ander function creating ?
    document.writeln(`${this.id} ${this.name}`)
    console.log(`${this.id} ${this.name}`)
   }
}

let emoloyes1 = new Employes ('1','Tausif');  // new keyword se constructor object ke argumnet hai means value ?
emoloyes1.details();

