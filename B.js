// 

let useFullmethod ={  //simple object create
  sayHay:function(){
   console.log("Say Hey call")
  }

}

// useFullmethod.sayHay()


class User{ //class decler
  constructor(n){
    this.name = n ;
  }
}

Object.assign(User.prototype, useFullmethod)
let user = new User("Tausif")
console.log(user)
user.sayHay()












