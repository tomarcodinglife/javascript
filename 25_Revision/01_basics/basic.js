
// Variable

let numA = 2
let numB = 3

console.log(numA + numB); // 5


// Data Type

let myname = "Sujit"; //
let roll = 356; //
let pass = true //
let mysym = Symbol(3525) //
let email = null //
let networth = 45545454545n // 

console.table([
    {value:myname, variable: "myname", type : typeof(myname)}, 
    {value:roll, variable: "roll", type : typeof(roll)}, 
    {value:pass, variable: "pass", type :typeof(pass)}, 
    {value:mysym, variable: "mysym", type :typeof(mysym)}, 
    {value:email, variable: "email", type :typeof(email)}, 
    {value:networth, variable: "networth", type :typeof(networth)}
]);

/* 
┌─────────┬──────────────┬────────────┬───────────┐
│ (index) │ value        │ variable   │ type      │
├─────────┼──────────────┼────────────┼───────────┤
│ 0       │ 'Sujit'      │ 'myname'   │ 'string'  │
│ 1       │ 356          │ 'roll'     │ 'number'  │
│ 2       │ true         │ 'pass'     │ 'boolean' │
│ 3       │ Symbol(3525) │ 'mysym'    │ 'symbol'  │
│ 4       │ null         │ 'email'    │ 'object'  │
│ 5       │ 45545454545n │ 'networth' │ 'bigint'  │
└─────────┴──────────────┴────────────┴───────────┘

*/ 
