// before classes we use this type 

function newUserFunction (username, email, dob){
    this.username = username;
    this.email = email;
    this.dob = dob;
}

newUserFunction.prototype.encryptPassword = function(){
    return `${this.username}@${this.dob}`
}

newUserFunction.prototype.upperCaseUser = function(){
    return `${this.username.toUpperCase()}`
}

let myNewUser = new newUserFunction ("sujit", "test@email.com", "03031999")

console.log(myNewUser.encryptPassword())
console.log(myNewUser.upperCaseUser())