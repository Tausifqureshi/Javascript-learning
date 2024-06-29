// ChatGPT Se liya hua Syntax ---> hoisting  
























//  javascript me class bhi Hosting Support nhi leta hai ?
// let emoloyes2 = new Employes ('2','Qureshi');  // 
// emoloyes2.details(); //emoloyes2 ko first value dena? bad me  Employes class initialization karna is se bolte hai hosting ? class bhi Hosting Support nhi leta hai

class Employes{ //Cretae Class //This Chaptert learnVarn
    constructor(id,name){  //Create Object constructor use kar ke?
        this.id = id,
        this.name = name
    }
   details(){   //Sort Method Means object ke ander function creating ?
    // document.writeln(`${this.id} ${this.name}`)
    // console.log(`${this.id} ${this.name}`)
    return (`${this.id} ${this.name}`)
   }
}

let emoloyes1 = new Employes ('1','Tausif');  // new keyword se constructor object ke argumnet hai means value ?
let emoloyes2 = new Employes ('2','qureshi');  // new keyword se constructor object ke argumnet hai means value ?
 let store = emoloyes2.details();
 console.log(store)



