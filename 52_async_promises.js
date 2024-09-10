console.log("Hi")
// With Error false
const myPromises = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username:"Sujit", email:"sujit@google.com"})
        }else{
            reject("Something Wrong")
        }
    }, 1000)
});

async function myFunction(){
    const myResponse = await myPromises 
    console.log(myResponse)
}

myFunction()



/*********************************************** */
//With error true


const promiseFirst = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error=true
        if(!error) {
            resolve({username:"Rohit", email:"rohit@test.com"})
        }else{
            reject("Something Wrong Please Check Again")
        }
    }, 2000)
})

async function functionFirst () {
    const responseFirst = await promiseFirst
    console.log(responseFirst)
}

functionFirst()
