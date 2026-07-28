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

// EXERCISES

const business = {
    name: "Things Incorporated",
    ceo: {
        firstName: "Jim",
        lastName: "Businessman",
        salary: Math.random() * 1000000
    },
    cto: {
        firstName: "Bob",
        lastName: "Techguyman",
        salary: Math.random() * 1000000
    },
    products: {
        couch: {
            price: 100,
            description: "A very nice couch"
        },
        ottoman: {
            price: 50,
            description: "It is an ottoman"
        },
        rug: {
            price: 2000,
            description: "A very nice rug",
            dimension: {
                width: "20ft",
                height: "20ft"
            }
        }
    }
}


// ACCESS INFORMATION

// the name of the business
// the salary for the ceo
// the salary for the cto
// the price for the couch
// the description for the ottoman
// the width and height for the rug

// CHANGE THE INFORMATION

// increase the price of the couch by +100
// change the ottoman description
// give the ottoman a new key of "condition" with a value of "like new"

// BUILD A FUNCTION

// giveCTORaise() 
// - takes argument `newSalary`
// - if `newSalary` is less than the ceo salary, set the cto salary to `newSalary`


function salaryRaise(raiseAmount) {
    
    const newSalary = raiseAmount + business.cto.salary

    if (business.ceo.salary < newSalary) {
        return "You gotta give the boss some money"
    } else {
        business.cto.salary = newSalary
        return `Good Work this year, here is a raise!  ${newSalary}`
    }
}

let newRaise = Math.round( Math.random() * 10000 )

salaryRaise( newRaise )