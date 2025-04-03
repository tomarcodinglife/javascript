
function myname(){
    console.log("Sujit Tomar")
}

myname() // Sujit Tomar

function addnum (num1, ...num){
    if(num1 == null || num.length === 0){
        console.log("Please Enter Value")
        return 
    }

    let sum = num1 + num.reduce((pre, cur) => pre + cur, 0);
    console.log(sum)
    return sum
}

addnum(5, 2, 3) // 10
addnum() // 



