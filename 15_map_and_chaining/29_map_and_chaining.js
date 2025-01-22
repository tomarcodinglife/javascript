// Map

const number = [ 1, 8, 2, 5, 6, 5, 6, 5, 5, 6, 3, 5]

const mynewvalue = number.map((num) => {
    return num + 10
})

console.log(mynewvalue) // [11, 18, 12, 15, 16, 15, 16, 15, 15, 16, 13, 15]

const price = [252, 85, 865, 900, 155, 351, 451, 210, 851]

// multiple value calculate with map method and fileter

let discount = 10 // discount in price array
let increasePrice = 20 // increase price in price array

const finalPrice = ( price
            .map( (num) => {return num + discount})
            .map( (num) => {return num + increasePrice})
)

console.log(finalPrice) // [282, 115, 895, 930, 185, 381, 481, 240, 881]

let cartItemPrice = [ 500, 400, 200, 600, 800]

const cartFinalPrice = (cartItemPrice
    .map( (num) => {return num + increasePrice} )
    .filter( (num) => num >= 500 )
) 

console.log (cartFinalPrice) // [ 520, 620, 820 ]