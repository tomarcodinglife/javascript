let numval = "5"
let strval = "Sujit"
let nlval = null
let udval = undefined
let bolval = true

let connumval = Number(numval)
let constrval = Number(strval)
let connlval = Number(nlval)
let conudval = Number(udval)
let conbolval = Number(bolval)

console.table([
    {variable: conbolval, type:typeof(conbolval)},
    {variable: constrval, type:typeof(constrval)},
    {variable: connlval, type:typeof(connlval)},
    {variable: conudval, type:typeof(conudval)},
    {variable: conbolval, type:typeof(conbolval)},
])

/*

┌─────────┬──────────┬──────────┐
│ (index) │ variable │ type     │
├─────────┼──────────┼──────────┤
│ 0       │ 1        │ 'number' │
│ 1       │ NaN      │ 'number' │
│ 2       │ 0        │ 'number' │
│ 3       │ NaN      │ 'number' │
│ 4       │ 1        │ 'number' │
└─────────┴──────────┴──────────┘

*/

let connumvalbool = Boolean(numval)
let constrvalbool = Boolean(strval)
let connlvalbool = Boolean(nlval)
let conudvalbool = Boolean(udval)
let conbolvalbool = Boolean(bolval)

console.table([
    {variable: conbolvalbool, type:typeof(conbolvalbool)},
    {variable: constrvalbool, type:typeof(constrvalbool)},
    {variable: connlvalbool, type:typeof(connlvalbool)},
    {variable: conudvalbool, type:typeof(conudvalbool)},
    {variable: conbolvalbool, type:typeof(conbolvalbool)},
])


/* 

┌─────────┬──────────┬───────────┐
│ (index) │ variable │ type      │
├─────────┼──────────┼───────────┤
│ 0       │ true     │ 'boolean' │
│ 1       │ true     │ 'boolean' │
│ 2       │ false    │ 'boolean' │
│ 3       │ false    │ 'boolean' │
│ 4       │ true     │ 'boolean' │
└─────────┴──────────┴───────────┘

*/