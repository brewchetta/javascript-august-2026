// FUNCTIONS //

// a wrapping for a variable that can set lines of instruction to make a variable respond

// wrapper --> constains a specific set of instructions -> has its own scope

// functions can contain variables and manipulate

// functions are sets of instructions

// functions exist to DO STUFF

// functions can be called or triggered multiple times --> D.R.Y. - DONT REPEAT YOURSELF

// functions can take in an input --> parameters/arguments

// functions can have outputs --> alert/console.log/return

// HOW TO DEFINE A FUNCTION

function someName() {
    // the function block
    // inside the fn we put instructions for how the function operates
    let result = 1 + 1
    result += 2
    console.log(result)
}


// example of a fn using an external variable
let counter = 0;

function increaseCounter() {
    counter += 1
}


// parameters like num1, num2 allow the fn to take in data
// return will give back data
function subtract( num1, num2 ) {
    return num1 - num2
}

function arithmetic(num1, num2, operation) {
    if (operation === '+') {
        return num1 + num2
    }
}

// console.log will print to the console but does not actually give the program back data
function consoleLogStuff() {
    console.log("hello", "world")
    console.log("goodnight", "world")
}

// ARROW FN //

                            // with one line this has implicit return
const myArrowFunction = () => "I AM AN ARROW FN"

// ANONYMOUS FN //

// anonymous functions are fns without names
// function() {}
// () => {}

// ---EXERCISES UNTIL 2:43 EST--- //

// 1. Create a fn fullName() 
// - which accepts two arguments: firstName and lastName
// - returns the two names in this format: "firstName lastName"

// Example: fullName("Chett", "Tiller") ==> "Chett Tiller"

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}


// 2. Create a fn getRemainder()
// - accepts two arguments: num and divisor
// - use the modulo (%) to get the remainder of num and the divisor
// - return result

// Example: getRemainder(5,3) ==> 2

const getRemainder = (num, divisor) => {
    return num % divisor
}

const shortRemainder = (num, divisor) => num % divisor


// 3. Create a fn displayHours()
// - accepts two arguments: opening and closing
// - returns a string formatted like this: "We are open from opening until closing."

// Example: displayHours("7am", "5pm") ==> "We are open from 7am until 5pm"
// `We are open from ${timeOne} until ${timeTwo}`

function displayHours(open, close) {
    // return "We are open from " + open + " until " + close
    return `We are open from ${open} until ${close}`
}

// RETURNS //

// when you return, the fn ends
function multipleReturns(open, close) {
    return `We are open from ${open} until ${close}`
    // everything below is dead code in the fn
    return `I would never open between ${open} and ${close}`
    return `OPEN: ${open} CLOSE: ${close}`
    return "I AM THE FOURTH RETURN STATEMENT"
}