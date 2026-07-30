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

// RETURN AT 12:20 EST
// RETURN AT 12:20 EST
// RETURN AT 12:20 EST
// RETURN AT 12:20 EST
// RETURN AT 12:20 EST
// RETURN AT 12:20 EST
// RETURN AT 12:20 EST
// RETURN AT 12:20 EST
// RETURN AT 12:20 EST
// RETURN AT 12:20 EST
// RETURN AT 12:20 EST
// RETURN AT 12:20 EST
// RETURN AT 12:20 EST
// RETURN AT 12:20 EST
// RETURN AT 12:20 EST