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
let p = "2"


console.table([

    {Operator:"==", Name: "Equal to", Example:"n==p", return:n==p},
    {Operator:"===", Name: "Strict equal to", Example:"n===p", return:n===p},
    {Operator:"!=", Name: "Not equal to", Example:"m!=n", return:m!=n},
    {Operator:"!==", Name: "Strict not equal to", Example:"m!==n", return:m!==n},
    {Operator:">", Name: "Greater than", Example:"m>n", return:m>n},
    {Operator:"<", Name: "Less than", Example:"m<n", return:m<n},
    {Operator:">=", Name: "Greater than or equal to", Example:"m>=n", return:m>=n},
    {Operator:"<=", Name: "Less than or equal to", Example:"m<=n", return:m<=n},

])

/*

┌─────────┬──────────┬────────────────────────────┬─────────┬────────┐
│ (index) │ Operator │ Name                       │ Example │ return │
├─────────┼──────────┼────────────────────────────┼─────────┼────────┤
│ 0       │ '=='     │ 'Equal to'                 │ 'n==p'  │ true   │
│ 1       │ '==='    │ 'Strict equal to'          │ 'n===p' │ false  │
│ 2       │ '!='     │ 'Not equal to'             │ 'm!=n'  │ true   │
│ 3       │ '!=='    │ 'Strict not equal to'      │ 'm!==n' │ true   │
│ 4       │ '>'      │ 'Greater than'             │ 'm>n'   │ true   │
│ 5       │ '<'      │ 'Less than'                │ 'm<n'   │ false  │
│ 6       │ '>='     │ 'Greater than or equal to' │ 'm>=n'  │ true   │
│ 7       │ '<='     │ 'Less than or equal to'    │ 'm<=n'  │ false  │
└─────────┴──────────┴────────────────────────────┴─────────┴────────┘

*/

// Logical Operators
console.log("************************Logical Operators*******************")

let BoolA = true
let BoolB = false
let BoolC = true

console.table([

    {operator: "AND (&&)", Example:"BoolA && BoolB", Value:BoolA && BoolB},
    {operator: "OR (||)", Example:"BoolA || BoolB", Value:BoolA || BoolB},
    {operator: "NOT (!)", Example:" (!BoolB)", Value:(!BoolB)},

])

/*

┌─────────┬────────────┬──────────────────┬───────┐
│ (index) │ operator   │ Example          │ Value │
├─────────┼────────────┼──────────────────┼───────┤
│ 0       │ 'AND (&&)' │ 'BoolA && BoolB' │ false │
│ 1       │ 'OR (||)'  │ 'BoolA || BoolB' │ true  │
│ 2       │ 'NOT (!)'  │ ' (!BoolB)'      │ true  │
└─────────┴────────────┴──────────────────┴───────┘

*/

// Ternary Operator (? :)
console.log("************************Ternary Operator*******************")

let age = 22
let AgeCheck = (age >= 18) ? "Adult" : "Minor";
console.log(AgeCheck) // Adult


// Type Operators
console.log("************************Type Operators*******************")

let fname = "Sujit"
console.log(typeof(fname)) // 

class student {
    constructor(studentName, studentAge){
        this.studentName = studentName;
        this.studentAge = studentAge;
    }
};

class employee {
    constructor(employeeName, employeeAge){
        this.employeeName = employeeName;
        this.employeeAge = employeeAge;
    }
}

StudentFirst = new student("Sujit", 22);
StudentSecond = new employee("Amit", 25);

console.log(StudentFirst instanceof student) // true
console.log(StudentSecond instanceof student) // false

// Spread (...) and Rest (...) Operators

let arrayFirst = [5,6,8,2,47,9,5,]
let arraySecond = [...arrayFirst, 9, 5, 8, 6, 5, 6]

console.log(arraySecond) // [5, 6, 8, 2, 47, 9, 5, 9, 5, 8,  6, 5, 6]


function sum(...num){
    return num.reduce((a, b) => a+b, 0)
} 

console.log(sum(1, 2, 3, 4, 5, 6)) // 21

// Nullish Coalescing Operator (??)

let user = null;
let defaultName = user?? "Guest";
let result ="Pass"
let passStatus = result?? "Fail"
console.log(defaultName) // Guest
console.log(passStatus) // Pass