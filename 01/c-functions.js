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