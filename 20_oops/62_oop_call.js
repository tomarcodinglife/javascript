console.log("hi")

/***********************************Example First **********************************/

function newUserName1 (username) {
    this.username = username 
    console.log("called")
};

function newUserName2 (username, email, password) {
    newUserName1.call(this, username)
    this.email = email
    this.password = password
}

let userFirst = new newUserName2("Sujit", "sujit@google.com", "password@test.com")

console.log(userFirst)


/***********************************Example Second **********************************/

console.log("*******************from here**********************")

let firstUser = {
    myName : "Sujit",
    email : "mymail@abc.com",
    password: "user@password",
    printobj : function(){
        console.log(this)
    }
}

firstUser.printobj(); // {myName: 'Sujit', email: 'mymail@abc.com', password: 'user@password', printobj: [Function: printobj]}

let secondUser = {
    myName : "Rohit",
    email : "mail@uk.com",
    password: "password@123",
}
firstUser.printobj.call(secondUser) // { myName: 'Rohit', email: 'mail@uk.com', password: 'password@123' }



