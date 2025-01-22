console.log("Hi")

/* without set or without get code not work getter setter method so when you create this method than get and set both value create. */

class user {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get password() {
        return `${this._password.toUpperCase()}`
    }
    set password(value){
       this._password= `${value}@Sujit`
    }

    get email () {
        return `${this._email.toUpperCase()}`
    }
    set email(value) {
        this._email = `email is ${value} but please dont use for another work`
    }
}

const sujit = new user ("Sujit@email.com", "121")
console.log(sujit.password); // 121@SUJIT
console.log(sujit.email); // EMAIL IS SUJIT@EMAIL.COM BUT PLEASE DONT USE FOR ANOTHER WORK