class User {
    constructor(username){
        this.username = username
        this.id = null
    }

    logMe (){
        return(`userame ${this.username}`);
        
    }
    // static means its function not for everyone
    static createID(){
        let id = `123`
        return id 
    }
}

let user1 = new User("iamsujittomar");
console.log(user1.logMe());

// console.log(user1.createID())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

let teacher1 = new Teacher ("sujittomar", "sks@gmail.com")
console.log(teacher1.logMe());
