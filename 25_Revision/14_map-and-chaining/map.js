// maps loop
let myMap = new Map()
myMap.set("name", "Sujit")
myMap.set("age", 25)
myMap.set("city", "Delhi")
myMap.set("hobbies", ["reading", "traveling", "sports"])
myMap.set("address", { city: "Delhi", state: "Delhi" })
myMap.set("isMarried", false)
myMap.set("isSingle", true)
myMap.set("isDivorced", false)
myMap.set("isEngaged", false)


for (let [key, value] of myMap) {
    if (Array.isArray(value)) {
        console.log(`${key} - ${value.join(", ")}`)
    } else if (typeof value === "object") {
        for (let [key1, value1] of Object.entries(value)) {
            console.log(`${key} - ${key1} - ${value1}`)
        }
    } else {
        console.log(`${key} - ${value}`)
    }
}

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let myNewArray = newArray.map(function (element) {
    return element + 10
})

console.log(myNewArray) // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArr1 = arr1
                .map((element) => (element + 10))
                .map((element) => (element + 5))
                .filter((element) => (element > 20))
console.log(newArr1) // [ 21, 22, 23, 24, 25 ]