// OBJECTS //

// lowerCamelCase: numberOfItemsEaten
// UpperCamelCase: NumberOfItemsEaten
// snake_case: number_of_items_eaten
// kebab-case: number-of-items-eaten

// objects are a data structure which means that they organize and contain data

const person = {
    firstName: "Chett",
    lastName: "Tiller",
    age: 21,
    address: "Bahamas",
    "go for walk": function() { console.log("Chett is going for a walk") },
    favoriteFood: {
        name: "Cherry Pie",
        reason: "It's so tasty",
        numberOfItemsEaten: 700,
        supplier: {
            name: "Corner Bakery",
            address: "The corner of some street",
            owner: {
                firstName: "Pierre",
                lastName: "French Guy",
                address: "Sleeps in his bakery"
            }
        }
    }
}

// key: value

// the order for the key: value pairs doesn't matter

// dot notation
person.age
person.address

// changing values
person.age += 1
person.address = "North Pole"

// adding new key/value pairs
person.password = "password123"

// delete a key/value pair
delete person.password


// bracket notation
person["age"] // person.age
person["address"] // person.address

person["age"] = 23


const statePopulations = {
    california: 39355309,
    texas: 31709821,
    florida: 23462518,
    newYork: 20002427,
    pennsylvia: 13059432
}

// use bracket notation to dynamically access a specific key/value pair
function populationOf(state) {
    return statePopulations[state]
}

let car = {
    make: "Toyota",
    model: "Corolla"
}

const hotColdInfo = {
    x: 120,
    y: 300,
    cursorX: 500,
    cursorY: 400,
    scores: {
        firstAttempt: 0,
        secondAttempt: 0
    }
}

const pikachu = {
    name: "Pikachu"
}

const raichu = {
    name: "Raichu"
}

const starterPokemon = {
    nickname: "Zappy",
    hp: 10,
    pokemonSpecies: pikachu
}

person.favoriteFood.supplier.owner.firstName
person["favoriteFood"]["supplier"]["owner"]["firstName"]


// GUESS THE NUMBER USING OBJECTS //

const randomNumberInfo = {
    randomNum: Math.round( Math.random() * 100 ),
    lastGuess: null,
    previousGuesses: {}
}

function guessTheNumber(numberGuess) {

    // if we guess the number we celebrate
    if (numberGuess === randomNumberInfo.randomNum) {
        return "CELEBRATE BECAUSE YOU GOT IT!!!"

    // otherwise...
    } else {
        // we figure out how far off our current guess is
        const currentDistance = Math.abs(randomNumberInfo.randomNum - numberGuess)
        // we figure out how far off our previous guess was
        const previousDistance = Math.abs(randomNumberInfo.randomNum - randomNumberInfo.lastGuess)

        // we figure out if our current guess was further than the previous guess
        if (currentDistance > previousDistance) { // if we are further away (the distance is greater)
            // update the last guess and return
            randomNumberInfo.lastGuess = numberGuess
            return "...colder"
            
        } else {
            // update the last guess and return
            randomNumberInfo.lastGuess = numberGuess
            return "warmer!"
        }
    }

}