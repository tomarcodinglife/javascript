// Map


const str = new Map()
str.set("IN", "India")
str.set("USA", "United State of America")
str.set("FR", "France")
str.set("SRI", "Srilanka")
str.set("PAK", "Pakistan")

console.log(str)


for (const key of str) {
    console.log(key)
}

/* return 
[ 'IN', 'India' ]
[ 'USA', 'United State of America' ]
[ 'FR', 'France' ]
[ 'SRI', 'Srilanka' ]
[ 'PAK', 'Pakistan' ]
*/

//*************************************************************************************

for (const [key, value] of str) {
    console.log(key)
}

/* return
IN
USA
FR
SRI
PAK
*/

//*************************************************************************************

for (const [key, value] of str) {
    console.log(value)
}

/*
India
United State of America
France
Srilanka
Pakistan
*/

//*************************************************************************************

for (const [key, value] of str) {
    console.log(key, "=", value)
}

/*
IN = India
USA = United State of America
FR = France
SRI = Srilanka
PAK = Pakistan
*/

//*************************************************************************************
