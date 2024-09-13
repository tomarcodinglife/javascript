console.log("Hi")

let userFirst = {
    username : "Sujit",
    email : "sujit@google.com",
    password: "password@123",
    isLoggedIn : true,
    // user : function() {
    //     console.log(`user details is ${this.username, this.email, this.password, this.isLoggedIn}`)
    // }
}

Object.prototype.userdetails = function(){
    console.log(`my created prototype method for object`)
}

userFirst.userdetails() // my created prototype method for object 

let myArray = [
   {username : "Sujit",
    email : "sujit@google.com",
    password: "password@123",
    isLoggedIn : true,}, 
]

myArray.userdetails() // my created prototype method for object


