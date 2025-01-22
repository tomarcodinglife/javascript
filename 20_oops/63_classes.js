
// after classes method we use this type 

class User {
    constructor(username, email, dob){
        this.username = username;
        this.email = email;
        this.dob = dob;
    }
    encryptPassword(){
        return `${this.username}@${this.dob}`
     }

    changeUserName() {
        return`${this.username.toUpperCase()}`
    }
};



let userFirst = new User ("Sujit", "email@domain.com", "03031999")

console.log(userFirst.encryptPassword());
console.log(userFirst.changeUserName());


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

let myNewUser = new newUserFunction ("Ajit", "test@email.com", "04031999")

console.log(myNewUser.encryptPassword());
console.log(myNewUser.upperCaseUser());

