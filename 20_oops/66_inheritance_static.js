console.log("Hi")

// without static


class user {
    constructor(username){
        this.username = username
    }
    
    logMe() {
        console.log(`username ${this.username}`)
    }

    createid(id) {
        this.id = id
        return `123`
    }
}

const Sujit = new user("sujittomar");

console.log(Sujit.createid());

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email= email
    }
}

const sujit = new Teacher ("SujitTomar", "test@email.com")
console.log(sujit) // Teacher { username: 'SujitTomar', email: 'test@email.com' }
sujit.logMe() // username SujitTomar
console.log(sujit.createid()); // 123



// with static

class studentuser {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    };

    static createmyid(id){
        this.id = id
        return `12315`
    }

}

const SujitKumarSingh = new studentuser("sujit", "sks@email.com", "Pass@123")

console.log(SujitKumarSingh)

/**

studentuser {
  username: 'sujit',
  email: 'sks@email.com',
  password: 'Pass@123'
}

 */

console.log(SujitKumarSingh.createmyid()) // not working because this is statics