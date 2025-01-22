const myPromise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        error = false
        if(!error){
            console.log({userName : "Sujit", Password : "Demo@123"})
        }else(
            reject("Please Check Again Because Something Wrong")
        )
        
    }, 1000)
})

async function myFunction(){
    try {
        const response = await myPromise
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

myFunction()

/************************************************************************* */
