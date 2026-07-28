// SCOPE //

// GLOBAL VARIABLES
let darkMode = true
// these variables have been declared IN THE GLOBAL SCOPE

// FUNCTION SCOPING

function turnOffDarkMode() {
    // the variable darkMode gets pulled from the global scope
    darkMode = false 

    // locally scoped variable
    let message = "Dark Mode Off"
    console.log(message)
} // message no longer exists

// console.log(message)

function turnOnDarkMode() {
    let darkMode = "LASER TAG MODE"

    console.log('DARK MODE:', darkMode)
}

function findNothing() {
    console.log(nothing)
}

// CONDITIONAL BLOCK SCOPING

let currentUser = null

if (true) {
    let currentUser = "Chett"
    // console.log(currentUser)
}

if (true) {
    let message = "Welcome back user"
} else {
    let message = "Invalid credentials"
}
// console.log(message)


// NESTED FN SCOPE

const outerVariable = "I AM THE MOST OUTEREST VARIABLE"

function outerFunction() {

    outerVariable = "I AM THE OUTER"

    if (true) {
        outerVariable = "I AM THE INNER VARIABLE NOW"
    }

    console.log(outerVariable)
}


let callDaughter = true

function parentFunction() {
    let counter = 0

    function daughterFunction() {
        console.log("DAUGHTER CALLED")
        counter++
    }
    
    function sonFunction() {
        console.log("SON CALLED")
    }

    if (callDaughter && counter < 3) {
        daughterFunction()
    } else {
        sonFunction()
    }

    console.log("COUNTER:", counter)
}


// FUNCTION FACTORY - a function that makes functions

function toThePowerOf(firstNum) {

    function powerOf(secondNum) {
        return secondNum ** firstNum
    }

    return powerOf
}