// inheritance

let carBasic = {
    start : true,
    break : true,
    seat : true,
}

let carDieselFuel = {
    fuel : "Diesel"
}

let carPetrolFuel = {
    fuel : "Petrol"
}

let carInsurence = {
    insurence : true
}

// Now i want to carBasic Method and Fuel type method in below car because car have need for this so
// it is old syntax __proto__
let mercedesCar = {
    color : "Black",
    airBag : "4",

    __proto__ : carBasic,
    __proto__: carDieselFuel
}

let rangeRover = {
    color : "white",
    airBag : "4"
}

rangeRover.__proto__ = carBasic
rangeRover.__proto__ = carPetrolFuel

// modern syntax
Object.setPrototypeOf(rangeRover, carInsurence)
Object.setPrototypeOf(mercedesCar, carInsurence)


