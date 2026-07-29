// LOOPS //

const colors = [
    "red",      // 0
    "orange",   // 1
    "yellow",   // 2
    "green",    // 3
    "blue",     // 4
    "indigo",   // 5
    "violet",   // 6
]

// iteration / looping:
// we do something for each item in an array 
// usually starting with the first item and ending with the last item


// WHILE LOOP

// the index tracks which item in the array we're accessing at the moment
// let index = 0

// // while loop will go until index is not less than colors.length
// while (index < colors.length) {
//     console.warn( colors[index] )
//     // if we forget to increase index the loop will go FOREVER
//     index += 1
// }

// example inside a fn
function printAnimals() {
    let index = 0
    
    while (index < animals.length) {
        console.log( animals[index] )
        index += 1
    }
}


// // FOR LOOP
// //      index          end condition       increment
// for (let index = 0; index < colors.length; index += 1) {
//     console.log( colors[index] )
// }

// // FOR LOOP BACKWARDS
// const lastIndex = colors.length - 1
// //      index                end condition   increment
// for ( let index = lastIndex; index >= 0; index -= 1 ) {
//     console.error( colors[index] )
// }

// you can nest for loops
// for () {
//     for () {
//         for () {

//         }
//     }
// }


// LOOPING TO ADD TO A VARIABLE

const prices = [
    1.99,
    10.99,
    7.99,
    5.99
]

let total = 0

for (let index = 0; index < prices.length; index++) {
    const discountedPrice = prices[index] * 0.9
    total += discountedPrice
}

total = total.toFixed(2)


// LOOPING TO FIND AN ITEM

const schoolRoster = [
    { name: "Chett", gpa: 2.0 },    // 0
    { name: "Bob", gpa: 4.1 },      // 1
    { name: "Jim", gpa: 1.9 },      // 2
    { name: "Joe", gpa: 1.2 },      // 2
    { name: "John", gpa: 1.4 },      // 2
    { name: "Jerry", gpa: 1.9 },      // 2
    { name: "Jon Doe", gpa: 3.9 },      // 2
    { name: "Jolly", gpa: 1.1 },      // 2
    { name: "Jorge", gpa: 3.9 },      // 2
    { name: "Jeremiah", gpa: 2.9 },      // 2
    { name: "Janice", gpa: 1.0 },      // 2
    { name: "Jinkens", gpa: 4.9 },      // 2
    { name: "Jack", gpa: 4.2 },      // 2
    { name: "Jalen", gpa: 1.9 },      // 2
    { name: "Jeff", gpa: 3.9 },      // 2
]

const improvementStudents = []

for (let index = 0; index < schoolRoster.length; index++) {
    const student = schoolRoster[index]

    if (student.gpa < 2) {
        improvementStudents.push(student)
    }
}


// LOOPING IN A FN
function findHonorRoll(roster) {

    const honorRoll = []

    for (let i = 0; i < roster.length; i++) {
        const student = roster[i]

        if (student.gpa >= 3.7) {
            honorRoll.push(student)
        }
    }

    return honorRoll
}


// EXERCISES

const groceryItems = [
    { name: "Cheese", price: 3.99 },        //0
    { name: "Milk", price: 7.99 },          //1
    { name: "Gallon of Gas", price: 4.99 }, //2
    { name: "Gallon of Gas", price: 4.99 }, //3
    { name: "Gallon of Gas", price: 4.99 }, //4
    { name: "Tomato", price: 3.49 },        //5
    { name: "Pasta", price: 2.99 },         //6
]

let groceryTotal = 0

// Build a for loop which totals all the prices in the groceryItems together using groceryTotal

// for (let index = 0; index < groceryItems.length; index++) {
//     // get the item based on index
//     const item = groceryItems[index]
//     // get the price from the item
//     const itemPrice = item.price
//     // add price to total
//     groceryTotal += itemPrice

//     // combined into one line:
//     // groceryTotal += groceryItems[index].price
// }

// BONUS: See if you can remove or ignore anything with a name of "Gallon of Gas"

for (let index = 0; index < groceryItems.length; index++) {
    const item = groceryItems[index]
    // if item's name is NOT gallon of gas we proceed
    if (item.name !== "Gallon of Gas") {
        const itemPrice = item.price
        groceryTotal += itemPrice
    }
}

const countries = [
    "United States of America", // 0
    "Dominican Republic",       // 1
    "Chad",                     // 2
    "Brazil",                   // 3
    "Norway",                   // 4
    "England",                  // 5
    "Wyoming",                  // 6
]

// Use a for loop to identify countries that have names larger than 8 characters

// new array for our big countries
const bigCountries = []

for (let index = 0; index < countries.length; index++) {
    // get the country for this index
    const country = countries[index]
    // see if country has 8 or more characters
    if ( country.length >= 8 ) {
        // add it to bigCountries array
        bigCountries.push( country )
    }
}


// PUT IT IN A FUNCTION

            // we can give this any array
            // threshold is how big an item is before we add it
function findBigNames(array, threshold) {
    const bigNames = []
    // fill bigNames with the array items that meet this threshold
    for (let index = 0; index < array.length; index++) {
        const item = array[index]
        // if item length meets the threshold add it to bigNames
        if (item.length >= threshold) {
            bigNames.push( item )
        }
    }
    // return bigNames so the user can see or do stuff with it
    return bigNames
}

// triggering a fn from a different file
doStuff()