// ES6 Classes

class User {
    constructor (username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return (`${this.password}`)
    }
    upperCaseUserName(){
        return(`${this.username.toUpperCase()}`)
    }
    lowerCaseUserName(){
        return(`${this.username.toLowerCase()}`)
    }
}

let user1 = new User("SujitTomar", "abc@gmail.com", "123@xyz")

console.log(user1.encryptPassword())
console.log(user1.lowerCaseUserName())
console.log(user1.upperCaseUserName())

// behind the scene in classes

function newUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

newUser.prototype.securePassword =function(){
    return(`${this.password}`)
}
newUser.prototype.userNameChange = function(){
    if(this.username === this.username.toLowerCase()){
        return(`${this.username.toUpperCase()}`)
    }else if(this.username === this.username.toUpperCase()){
        return(`${this.username.toLowerCase()}`)
    }else{
        return(`username is mixed to upper and lower case`)
    }
}

let userx = new newUser("SujitTomar", "abc@gmail.com", "123@pass")
console.log(userx)
console.log(userx.userNameChange());
