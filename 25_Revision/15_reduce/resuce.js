let array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newArray7 = array7.reduce((accumulator, currentValue) => {
    console.log(`accumulator ${accumulator}, currentValue ${currentValue}`)
    return accumulator + currentValue}, 0) //  0 is initial value of accumulator
    
console.log(newArray7) // 55

console.log(array7.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) // 50