// callBack hell
function getData(myData, myFun){
    setTimeout(()=>{
        console.log(myData)
    if(myFun){
        myFun()
    }
    }, 1000)
}

getData(1, ()=>{
    console.log("get data 2");
    getData(2, ()=>{
        console.log("get data 3");
        getData(3, ()=>{
            console.log("get data 4");
            getData(4, ()=>{
                console.log("get data 5");
                getData(5)
            })
        })
    })
})

// if i run 