class user {
    constructor(email, password, username){
        this.email = email;
        this.password = password;
        this.username = username
    }   
}

const user01 = new user ("sujit@gmail.com", "123@451", "sujittomar")
console.log(user01)


// ********************************************************************
class admin {
    constructor(email, password, username){
        this.email = email;
        this.password = password;
        this.username = username
    }   

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}


const admin01 = new admin ("sujit@gmail.com", "123@451", "sujittomar")

console.log(admin01.email)
console.log(admin01.username)
console.log(admin01.password)



