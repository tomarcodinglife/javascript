let myArray = [1, 2, 3, 4, 5];
console.log(myArray[2]) // 3

let myHero = ["Shaktiman", "Naagraj", "Spider"]
console.log(myHero[2]) // Spider 

let arr = [1, 2, 3]
arr.push(4)
console.log(arr) // [ 1, 2, 3, 4 ]
arr.pop() 
console.log(arr) // [ 1, 2, 3 ]

let arrayA = [5, 6, 8, 8]
arrayA.unshift(2)
console.log(arrayA) // [ 2, 5, 6, 8, 8 ]
arrayA.shift()
console.log(arrayA) // [ 5, 6, 8, 8 ]
arrayA.shift()
console.log(arrayA) // [ 6, 8, 8 ]

let newArry = [5, 8, 9, 60]
console.log(newArry.includes(9)) // true

let arrayB = [8, 5, 9, 5, 6, 2]
console.log(arrayB) //    [ 8, 5, 9, 5, 6, 2 ]
console.log(arrayB.join())  //  8,5,9,5,6,2

let arrayc = ["Sujit", "Amit", "Rohit", "Sumit", "Shekhar", "Sohail", "Samir", "Ranjan", "Niraj"]
console.log(arrayc) // 
console.log("Slice", arrayc.slice(1, 3)) // Slice [ 'Amit', 'Rohit' ]
console.log(arrayc) // ['Sujit', 'Amit', 'Rohit', 'Sumit','Shekhar', 'Sohail','Samir', 'Ranjan','Niraj']
console.group("Splice",arrayc.splice(1, 3)) //  Splice [ 'Amit', 'Rohit', 'Sumit' ]
console.log(arrayc) //   [ 'Sujit', 'Shekhar', 'Sohail', 'Samir', 'Ranjan', 'Niraj' ]


let marvelHero = ["thor", "Ironman", "spiderman"]
let dc_hero= ["superman", "Flash", "batman"]
marvelHero.push(dc_hero)
console.log(marvelHero) //   [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'Flash', 'batman' ] ]

let fruitBasket01 = ["Apple", "Banana", "Orange"]
let fruitBasket02 = ["Mango", "Pineapple", "Greps"]
let fruitBasket = fruitBasket01.concat(fruitBasket02)
console.log(fruitBasket) //   [ 'Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Greps' ]
let spreadFruitsBasket = [...fruitBasket01, ...fruitBasket02]
console.log(spreadFruitsBasket) //   [ 'Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Greps']

let myanotherArray = [5, 5, , 6, [8, 9, 8, 6, [8, 9, [8, 9, 6]], 5, 6, 5]]
let myanotherArrayfinal = myanotherArray.flat(Infinity) 
console.log(myanotherArrayfinal) // [5, 5, 6, 8, 9, 8, 6, 8, 9, 8, 9, 6, 5, 6, 5 ]

let myName = "Sujit"
console.log(Array.isArray(myName)) // false
console.log(Array.from(myName)) //    [ 'S', 'u', 'j', 'i', 't' ]
console.log(Array.from({mname : "Sujit"})) //    []

let score1  = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //   [ 100, 200, 300 ]

