let score = "abc123";
let socreNull = null;
let scoreUndefined = undefined;
let scoreBoolean = true;
let scoreString = "Sujit"

/*
console.log(typeof(score));
console.log (typeof score);
*/

let valueInNumber = Number(score);
let valueSocreNull = Number(socreNull);
let valueScoreUndefined = Number(scoreUndefined);
let valueScoreBoolean = Number(scoreBoolean);
let valueScoreString = Number(scoreString);


// console.log(typeof (valueInNumber));
// console.log(valueInNumber)

console.table([typeof (valueInNumber), typeof (valueSocreNull), typeof (valueScoreUndefined), typeof(valueScoreBoolean), typeof(valueScoreString)])
console.table([valueInNumber, valueSocreNull, valueScoreUndefined, valueScoreBoolean, valueScoreString])


//01
let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean (isLoggedIn)
// console.log(booleanIsLoggedIn)

//02
let isLoggedInOne = 1;
let booleanIsLoggedInOne = Boolean (isLoggedInOne)
// console.log(booleanIsLoggedInOne)

//3
let isLoggedInEmpty = undefined  //null, empty 
let booleanIsLoggedInEmpty = Boolean (isLoggedInEmpty)
// console.log(booleanIsLoggedInEmpty)

//4
let isLoggedInString = "Sujit"
let booleanIsLoggedInString = Boolean(isLoggedInString)
// console.log(booleanIsLoggedInString) 

console.table([booleanIsLoggedIn, booleanIsLoggedInOne, booleanIsLoggedInEmpty, booleanIsLoggedInString])

// number convert in string
let myNumber = 1
let numberInString = Number (myNumber)
console.table([numberInString, typeof(numberInString)])

/* ***************************************Arithmetic Operators****************************************/
let numberA = 6;
let numberB = 2;

let addition = numberA+numberB //6+2
let subtraction = numberA-numberB // 6-2
let multiplication = numberA*numberB // 6 X 2
let exponentiation = numberA**numberB //6X6 (6 to the power 2)
let division = numberA/numberB // 6/2
let modulus = numberA%numberB // 6/2 after remender

/*
// console.log (addition)
// console.log (subtraction)
// console.log (multiplication)
// console.log (exponentiation)
// console.log (division)
// console.log (modulus)
*/

console.table([addition, subtraction, multiplication, exponentiation, division, modulus])

let str1 = "Sujit"
let str2 = "Tomar"
let str3 = str1+str2
console.log(str3)

console.log(true)
console.log(+true)

console.log ("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log (1 + 2 + "3")



console.log(+"") 
console.log(-"")

console.log("------------------------Here----------------------")

let myvalue = 101
// ++myvalue
console.log(++myvalue)

let gamevalue = 500
// gamevalue++
console.log(gamevalue++)






