// For Loop

//Structure
/*  
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/

//*************************************************************************************

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element)
}



for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element)
}

//*************************************************************************************


for (let i = 2; i <= 10; i++) {
    for (let j = 2; j <= 10; j++) {
    console.log(i + "*" + j + "=" + i*j)
    }
}

//*************************************************************************************



for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        if(i<=5 && i !== 1) {
            console.log(i + "*" + j + "=" + i*j)
        }
    }
}



let myArray = ["Ajit", "Sumit", "Rahul", "Shubham", "Shohail"]

for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index])
}

//*************************************************************************************


for (let k = 1; k<=10; k++) {
    if(k==5) {
        console.log("deceted")
    }
    console.log(k)
}

//*************************************************************************************
//break


for (let index = 1; index < 20; index++) {
    if(index == 5 ){
        console.log("detected 5")
        break
    }
    console.log(`value of i is ${index}`)
}

//*************************************************************************************
//continue

console.log("****************************** From  *********************************");

for (let index = 1; index <= 20; index++) {
    if(index == 5 ){
        console.log("detected 5")
        continue
    }
    console.log(`value of i is ${index}`)
}
