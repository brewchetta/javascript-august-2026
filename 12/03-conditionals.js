// EXERCISES - CONDITIONAL STATEMENTS

// 1. Create variables `numberOne`, `numberTwo`, `numberThree`, these variables can be any numbers you choose, feel free to change them as you test out things in the exercises. These variables should be changeable.

let numberOne = 5
let numberTwo = 10
let numberThree = 15


// 2. Use the function `compareNumbers()`. If `numberOne` is greater than `numberTwo`, console.log "{numberOne} is greater than {numberTwo}" (use interpolation to add the actual numbers in)

function compareNumbers() {
    if (numberOne > numberTwo) {
        console.log( `${numberOne} is greater than ${numberTwo}` )
    }
}


// 3. Use the function `divideByNumberThree()`. If numberThree is NOT zero, console.log "{numberTwo} divided by {numberThree} is {X}", otherwise console.log "cannot divide {numberTwo} by {numberThree} because {numberThree} is zero!"

function divideByNumberThree() {
    if (numberThree !== 0) {
        const result = numberTwo / numberThree
        console.log( `${numberTwo} divided by ${numberThree} is ${result}` )
    } else {
        console.log(`cannot divide ${numberTwo} by ${numberThree} because ${numberThree} is zero!`)
    }
}


// 4. Use the function `checkNumberOne()`. If numberOne is positive console.log "{numberOne} is positive" otherwise if it's negative console.log "{numberOne} is negative"

function checkNumberOne() {
    if (numberOne > 0) {
        console.log(`${numberOne} is positive`)
    } else if (numberOne < 0) {
        console.log(`${numberOne} is negative`)
    }
}