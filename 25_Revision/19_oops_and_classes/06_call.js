// this context set manually

function setUsername (username){
    this.username = username
    console.log("Set User Name function call")
};

function createUser (username, email, password){
    setUsername(username)
    this.email = email
    this.password = password
}

// username not print in this case
let sujitTomar = new createUser("sujittomar", "sks@google.com", "abc125@")
console.log(sujitTomar) 

/* 
Set User Name function call
createUser { email: 'sks@google.com', password: 'abc125@' } 
*/

function createAdmin(username, email, password){
    setUsername.call(this, username) 

    /*
    i want to set own this to setUsername because when it exit then this is null but i want to hold value in my this 
    */
   
    this.email = email
    this.password = password
}

let tomar = new createAdmin ("tomar", "tomar@google.com", "452@ghsd")
console.log(tomar)


