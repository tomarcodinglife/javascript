console.log("Hi")

class user {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }
}

class Teacher extends user{
    constructor(username, email, password) {
        super(username)  
        this.email = email;
        this.password = password
    }

    addCourse (){
        console.log(`New Course Added by ${this.username}`)
    }
}

const Amit = new Teacher("Amit", "amit@123", "password@123")

Amit.addCourse() // New Course Added by Amit
const Rohit = new user("rohit123")

// Rohit.addCourse() // false
Rohit.logMe() // true

console.log(Amit===Rohit) // false

console.log(Amit instanceof user) // true
console.log(Amit instanceof Teacher) // true






