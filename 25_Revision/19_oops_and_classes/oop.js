const user = {
    username : "iamsujittomar",
    "logedIn" : true,
    email : "email@gmail.com",

    getUserDetails : function(){
        console.log(`username : ${this.username}, email : ${this.email}`);
        console.log(this)
    }
}

console.log(user["logedIn"]);
console.log(user.getUserDetails());

// const myPromise = new Promise()
// const myDate = new Date()

function myUser (username, email, loginStatus){
    this.username = username
    this.email = email
    this.loginStatus = loginStatus

    return this // this is not required but if you write than code looking understable
}

let userFirst = new myUser("Sujit", "abc@gmail.com", true)
let userSecond = new myUser("Tomar", "abc@gmail.com", false)

console.log(userFirst);
console.log(userSecond);






