class User {
    constructor(username, email, password, type){
        this.username = username;
        this.email = email;
        this.password = password;
        this.type = type
    }
    loginMessage(){
        console.log(`Hi ${this.username} you are logedin`)
    }
}

class student extends User {
    constructor(){

    }
}

