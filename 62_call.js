console.log("hi")

function userName (username) {
    this.username = username
}

function createUser (username, email, password) {
    username.call(this, username)
    this.email = email
    this.password = password
}

let userFirst = new createUser("Sujit", "sujit@google.com", "password@test.com")

console.log(userFirst)