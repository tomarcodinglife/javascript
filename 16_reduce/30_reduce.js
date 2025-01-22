// reduce

let array = [1, 2, 3, 4, 5]
let accu

//*************************************************************************************

let totalMyArray = array.reduce( function(accumulator, current) {
    return accumulator + current
}, 0)
console.log(totalMyArray) // 15

//*************************************************************************************

let totalMyNewArray = array.reduce( function(accumulator, current) {
    console.log(`my accumulato is ${accumulator}, and current value is ${current}`)
                    /* return 
                    my accumulato is 3, and current value is 1
                    my accumulato is 4, and current value is 2
                    my accumulato is 6, and current value is 3
                    my accumulato is 9, and current value is 4
                    my accumulato is 13, and current value is 5
                    */
    return accumulator + current
}, 3)
console.log(totalMyNewArray) // 18

//*************************************************************************************
// with arrow function
let totalArray = array.reduce((previous, current) => previous + current)
console.log (totalArray) // 15