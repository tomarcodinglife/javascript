
fetch('https://jsonplaceholder.typicode.com/users')
.then((responce)=>{
    return responce.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})