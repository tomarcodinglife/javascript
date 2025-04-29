console.log("Hi i am js and today learning promise")


// Promise Create
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Hi i am Promise First")
        resolve()
    }, 2000)
})

// promice counsume 
promiseOne.then(function(){
    console.log("Promise Consumed");
})

// ---------------------------------------------------------------------

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 2000)
}).then(function(){
    console.log("Async 2 resolved")
})

// ---------------------------------------------------------------------

let promiseThree = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({username  : "Sujit Tomar", mail : "sujit@google.com"})
        }, 1000)
})

promiseThree.then(function(username){
    console.log(username)
})

// ---------------------------------------------------------------------

let promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "sujitTomar", password : "abc@123"})
        }else{
            reject("error")
        }
    }, 3000)
})

promiseFour.then((userDetails)=>{
    console.log(userDetails.username);
    return userDetails.username
}).then((user)=>{
    console.log(user) // true case exit
}).catch((err)=>{
    console.log(err) // false case exit
}).finally(()=>{
    console.log("Promise Resolve or Reject Compleated"); // 
})


// ---------------------------------------------------------------------

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "javascript", password : "abc123"})
        }else{
            reject ("Error Javascript")
        }
    }, 3000)
});

// async function promiseFiveConsume(){
//     const response = await promiseFive
//     console.log(response)

// }

// promiseFiveConsume()

async function promiseFiveConsume(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

promiseFiveConsume()

// ---------------------------------------------------------------------

async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (e) {
        console.log("error :", e);
    }
}

getAllUser()

// ---------------------------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((e) => {
    console.log("error: ", e);
})