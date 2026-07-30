// REVIEW //

// REVIEW TOPICS //
// - how would we use these tools in a program?
// - generally all of it


// VARIABLES //

// a variable contains or points to data

// declare a variable
const someVariable = "I AM A VARIABLE"

// reference that variable
console.log( someVariable )

// how we declare a variable determines whether we can change or not change it

// CONSTANT
const someConstant = "I AM A CONSTANT"
// you cannot change a constant after it's been declared
// someConstant = "whatever" // this will create an error

// LET
let someLet = "I am changeable"
someLet = "I HAVE BEEN CHANGED BC SOMEONE CHANGED ME"

// VAR - DONT USE THIS
var someVar = "I am var"
// don't use var - it's old and deprecated


// DATA TYPES //

// 1. strings
"I am a string" // text


// 2. numbers
10 // both integers and floats
10.5


// 3. booleans
true // only two values
false


// 4. objects
const someObject = {
    key: "value",
    name: "Chett",
    age: 21
} // data structure - contains other data in key/value pairs


// 5. arrays
const someArray = [1,2,3,4,5]
// data structure - contains data in an ordered list



// FUNCTION //

// a reusable piece of code that completes a specific task

function someFunction() {
    console.log("I AM DOING STUFF")
}

// parameters are stand-ins for real arguments we'll decide on later
function takesInput(parameterOne, parameterTwo, parameterThree) {
    console.log(parameterOne)
    console.log(parameterTwo)
    console.log(parameterThree)
}

// a fn can give output using the `return` keyword
function givesOutput() {
    return "I am the output"
}

let result = givesOutput() // result will be "I am the output"


// madLibs Function
// - accepts a verb, noun, and adjective
// - returns the string "Be careful not to {verb} under the {noun} or else you will anger the {adjective} man who lives there."

// HINT: string interpolation is `Hello ${someVariable}`

function madLibs(verb, noun, adjective) {
    // for string interpolation we NEED to use the backtics
    return `Be careful not to ${verb} under the ${noun} or else you will anger the ${adjective} man who lives there.`
}

// averageOfThree Function
// - accepts three number arguments
// - returns the average of the three numbers

// average = (total of all three number) / 3

function averageOfThree(num1, num2, num3) {
    const total = num1 + num2 + num3
    const average = total / 3
    return average
}


// SCOPE

const outside = "I AM OUTSIDE"

// define the fn
function functionBox() {
    console.log( outside )
    const inside = "I AM INSIDE"
    console.log("FROM INSIDE FUNCTION:", inside)
    // to get a variable outside the fn we need to return it and save it
    return inside
}

// console.log(inside) // we cannot access inner functions directly 

if (false) {
    console.log( "FROM IF:", outside )
}


// What gets logged for each function?

const scopeVariable = "YO WHATS UP IM NOT IN A FUNCTION"

// scopeOne - "I AM INSIDE SCOPE ONE"
function scopeOne() {
    const scopeVariable = "I AM INSIDE SCOPE ONE"
    console.log(scopeVariable)
}

// scopeTwo - "HEY FAM IM INSIDE SCOPE TWO"
function scopeTwo() {
    const scopeVariable = "HEY FAM IM INSIDE SCOPE TWO"
    console.log(scopeVariable)
}

// scopeThree - "YO WHATS UP IM NOT IN A FUNCTION"
function scopeThree() {
    console.log(scopeVariable)
}



function depotFn() {
    // we can access product inside inner functions
    const product = "Turbo Man"
    
    function storeFn() {
        console.log( product )
    }

    storeFn()
}


// EXERCISES


// addition()
// - accepts two arguments - num1, num2
// - returns the two numbers added together

                // arguments
function addition(num1, num2) {
    return num1 + num2
}


// subtraction()
// - accept two arguments - num1, num2
// - returns num1 subtracted by num2

function subtraction(num1, num2) {
    return num1 - num2
}


// calculate()
// - accepts three arguments - num1, num2, operation
// - if operation is "+" add the two numbers and return them
// - if operation is "-" subtract num2 from num1 and return
// - otherwise just return null

                // three parameters/arguments
function calculate(num1, num2, operation) {
    // if operation is "+"
    if (operation === "+") {
        return num1 + num2
    // if operation is "-"
    } else if (operation === "-") {
        return num1 - num2
    // otherwise
    } else {
        return null
    }
}


// CONDITIONALS //

if (true) {
    "do something here"
}


let counter = 3

if (counter > 2) {
    "do something if true"
} else {
    "do something else if false"
}


if (counter > 5) {
    "we have more than enough"
} else if (counter > 2) {
    "we might need more"
} else if (counter <= 2) {
    "we'll definitely need more"
} else {
    "what were we doing again?"
}


3 > 2 // true
3 > 3 // false
3 >= 3 // true

3 === 3 // true
3 === "3" // false
3 == "3" // true

3 !== 3 // false
3 !== 4 // true

"a" < "b" // true
"b" < "a" // false

!true // false
!false // true


// TRUTHINESS
// does it exist?

Boolean(12) // true
Boolean(0) // false

Boolean("hello") // true
Boolean("") // false

Boolean(undefined) // false
Boolean(null) // false
Boolean(NaN) // false

Boolean( [] ) // true (even though it's empty!)
Boolean( {} ) // true (even though it's empty!)

counter = 0

if (counter) {
    "COUNTING DOWN"
} else {
    "HAPPY NEW YEAR!"
}


// ARRAYS

// data structure - piece of data that contains other data

const daysArray = [
    "monday",   // 0
    "tuesday",  // 1
    "wednesday",// 2
    "thursday", // 3
    "fryday",   // 4
    "saturday", // 5
    "sunday"    // 6
]

daysArray[0] // "monday"
daysArray[3] // "thursday"

daysArray.length // 7

// setting data in an array
daysArray[4] = "friday"

// adding data at the end of the array
daysArray.push("nicsday")

// removing data from the end of the array
daysArray.pop()

// adding data at the beginning of the array
daysArray.unshift("jimsday")

// removing data at the beginning of the array
daysArray.shift()

// removing data at a specific index (3 a.k.a. "thursday")
daysArray.splice(3, 1) // deletes thursday


// FOR LOOPS

for (let index = 0; index < daysArray.length; index++) {
    const currentDay = daysArray[index]

    if (index > 0) {
        console.log( `Happy ${currentDay}` )
    } else {
        console.log( `Ugh I hate ${currentDay}` )
    }
}

// let index = 0                -- sets a changeable index - starts at 0
// index < daysArray.length     -- end condition for the loop
// index++                      -- increments the index between each loop


const wingFlavors = [ "lemon pepper", "buffalo", "bbq", "chipotle", "Louisiana rub", "garlic" ]

for (let i = 0; i < wingFlavors.length; i++) {
    const currentFlavor = wingFlavors[i]

    const price = "$" + currentFlavor.length

    console.log(price, currentFlavor)
}


// EXERCISES -- UNTIL 4:25 EST

// 1 --- ADD GROCERIES ------------

const groceryPrices = [9.99, 5.88, 32.99, 10.01, 17.11]

let groceryTotal = 0

// for each grocery price in groceryPrices, use a for loop to add that to groceryTotal
// BONUS: Add a 10% discount AND a 6% tax as you add the item to the groceryTotal

for (let index = 0; index < groceryPrices.length; index++) {
    const groceryItem = groceryPrices[index]
    const tax = groceryItem * 0.06
    const discount = groceryItem * 0.10
    groceryTotal += groceryItem - discount + tax
}


// 2 --- FILTER LOOP   ------------

const cars = [
    "Honda Civic", 
    "Toyota Camry", 
    "Jeep Cherokee", 
    "Ford Pinto", 
    "Toyota Corolla"
]

// for each item log out the item IF it does NOT include Toyota inside of it
// BONUS: add them to a new array instead called `notToyotaCars`
// BONUS: put this in a function with a parameter `filterWord` and instead of filtering out `Toyota`, filter out anything with the `filterWord`