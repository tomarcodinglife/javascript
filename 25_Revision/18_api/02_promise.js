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


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 2000)
}).then(function(){
    console.log("Async 2 resolved")
})


new Promise(function(resolve, reject){
    
})