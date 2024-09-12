
let multiplefunction = function multiplication (num1, num2) {
    // console.log(num1*num2)
    return num1 * num2
};

console.log(multiplefunction(5,50)) // 250
console.log(multiplefunction(2,3)) //6

// now we can check that function work on object method. 

console.log("****************************************************************************");

let multiplefunctionOne = function multiplicationOne (num1) {
    // console.log(num1*num2)
    return num1*5
};

multiplefunctionOne.power = 2 // this line we use only object but i check in object for working or not?

console.log(multiplefunctionOne(5)) // 25
console.log(multiplefunctionOne.power) // 2 (so its really work it means object method work in function)
console.log(multiplefunctionOne.prototype) // {}
