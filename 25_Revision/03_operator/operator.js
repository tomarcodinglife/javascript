    // Arithmetic Operators
    console.log("************************Arithmetic Operators*******************")
    let a = 8;
    let b = 5;

    let Addition = a+b
    let Subtraction = a-b
    let Multiplication = a*b
    let Division = a/b
    let Modulus = a%b
    let Exponentiation = a**b
    let Increment = a++
    let Decrement = b--

    console.table([
        {name:"Addition", operator:"+", value:Addition},
        {name:"Subtraction", operator:"-", value:Subtraction},
        {name:"Multiplication", operator:"*", value:Multiplication},
        {name:"Division", operator:"/", value:Division},
        {name:"Modulus", operator:"%", value:Modulus},
        {name:"Exponentiation", operator:"**", value:Exponentiation},
        {name:"Increment", operator:"++", value:Increment},
        {name:"Decrement", operator:"--", value:Decrement},
    ])

/*

┌─────────┬──────────────────┬──────────┬───────┐
│ (index) │ name             │ operator │ value │
├─────────┼──────────────────┼──────────┼───────┤
│ 0       │ 'Addition'       │ '+'      │ 13    │
│ 1       │ 'Subtraction'    │ '-'      │ 3     │
│ 2       │ 'Multiplication' │ '*'      │ 40    │
│ 3       │ 'Division'       │ '/'      │ 1.6   │
│ 4       │ 'Modulus'        │ '%'      │ 3     │
│ 5       │ 'Exponentiation' │ '**'     │ 32768 │
│ 6       │ 'Increment'      │ '++'     │ 8     │
│ 7       │ 'Decrement'      │ '--'     │ 5     │
└─────────┴──────────────────┴──────────┴───────┘

*/

// Assignment Operators
console.log("************************Assignment Operators*******************")

let x = 8
let y = 5

console.table([

    {operator:"=", name:"Assign", Example:"x = 8", value: x}, 
    {operator:"+=", name:"Add and assign", Example:"x += y", value: x+=y}, 
    {operator:"-=", name:"Subtract and assign", Example:"x -= y", value: x-=y}, 
    {operator:"*=", name:"Multiply and assign", Example:"x *= y", value: x*=y}, 
    {operator:"/=", name:"Divide and assign", Example:"x /= y", value: x /= y}, 
    {operator:"**=", name:"Modulus and assign", Example:"x **= 8", value: x **= 8}, 

])

/*

┌─────────┬──────────┬───────────────────────┬───────────┬──────────┐
│ (index) │ operator │ name                  │ Example   │ value    │
├─────────┼──────────┼───────────────────────┼───────────┼──────────┤
│ 0       │ '='      │ 'Assign'              │ 'x = 8'   │ 8        │
│ 1       │ '+='     │ 'Add and assign'      │ 'x += y'  │ 13       │
│ 2       │ '-='     │ 'Subtract and assign' │ 'x -= y'  │ 8        │
│ 3       │ '*='     │ 'Multiply and assign' │ 'x *= y'  │ 40       │
│ 4       │ '/='     │ 'Divide and assign'   │ 'x /= y'  │ 8        │
│ 5       │ '**='    │ 'Modulus and assign'  │ 'x **= 8' │ 16777216 │
└─────────┴──────────┴───────────────────────┴───────────┴──────────┘

*/

// Comparison Operators
console.log("************************Comparison Operators*******************")

let m = 5
let n = 2
let o = 6
let p = 2


