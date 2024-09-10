console.log("Promise")
    //Do an async task
    // DB Calls, Cryptography, Network



const promiseOne = new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log("asynchronous task is complete");

    /*
    connect with another promise who create base on this promise like .than/ 
    resolve ()
    */
    resolve() // final exucation
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})

/************************************************************* */

//promise with mutiple work

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task second")
    resolve()
    }, 1000)
}).then (function(){
    console.log("Sujit Please Call Now The Police")
}).then(function(){
    console.log("Police Now at the door")
}).then (function() {
    setTimeout(function(){
        console.log("Arrast the thiep")
    }, 3000)
}).then(function(){
    setTimeout(function(){
        console.log("Now we are peacefull at the home")
    }, 5000)
})

/************************************************************* */
// promise with data pass

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("we provide the user data")
    }, 8000)
    resolve({fullName : "Sujit", email : "test@google.com", roll : 365, marks : 460})
})
promiseThree.then(function(userdata){
    console.log(userdata)
})

/************************************************************* */

//promise with error chaeck true or false
// and data pass with condition in promise

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
    let error = false
        if(error === true) {
            resolve("Please check again because somethine is wrong")
        }if(error=== false) {
            resolve({username:"Sujit", email:"test@google.com", profession : "Software Engineer"})
        }
    }, 10000)
})

promiseFour.then(function(userdata){
    console.log(userdata)
})

/********************************************************** */

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        error=true
        if(!error) {
            resolve({username:"Sujit", email:"test@google.com"})
        }else{
            reject("Something Wrong My Dear")
        }
    }, 11000)
})

promiseFive.then((user) => {
    console.log(user);
    return user.username
}).then((myusername)=>{
    console.log(`hi i am .then ${myusername}`)
}).catch(function(error){
    console.log(`hi i am .catch ${error}`)
}).finally(()=>{
    console.log("Promise Resolved")
})


/********************************************************************* */

const promiseSix = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username:"Sohan", email : "test@google.com"})
        }else{
            reject("Something Wrong")
        }
    }, 12000)
})

promiseSix.then((user)=>{
    return user.username
}).catch((error)=>{
    console.log(error)
})

console.log('***********************************************************************************')
/*************************************************************** */
