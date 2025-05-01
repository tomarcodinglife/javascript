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
    if(username === username.toLowerCase){
        return(`${this.username.toUpperCase()}`)
    }else if(username === username.toUpperCase){
        return(`${this.username.toLowerCase()}`)
    }
}

console.log(newUser.userNameChange())