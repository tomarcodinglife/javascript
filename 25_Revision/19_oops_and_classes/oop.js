const user = {
    username : "iamsujittomar",
    "logedIn" : true,
    email : "email@gmail.com",

    getUserDetails : function(){
        console.log(`username : ${this.username}, email : ${this.email}`);
    }
}

console.log(user["logedIn"]);
console.log(user.getUserDetails());

const myPromise = new Promise()
const myDate = new Date()
