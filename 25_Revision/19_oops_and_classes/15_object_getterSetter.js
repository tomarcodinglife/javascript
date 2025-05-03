const user = {
    _email : 'SUJITTOMAR@GOOGLE.COM',
    _password : 'pass@123',

    get email(){
        return this._email.toLowerCase()
    },

    set email (value){
        user._password = value
    }
}


let user1 = Object.create(user)
console.log(user1.email); // sujittomar@google.com

