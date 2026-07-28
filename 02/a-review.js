// REVIEW EXERCISES - UNTIL 10:35 EST //

// Build a function `divisibleByTwo()` 
// - accepts an argument `num`
// - if `num` is divisible by two returns `"EVEN"`
// - otherwise returns `"ODD"`
// - HINT: Use the modulo (%) operator

// divisibleByTwo(12) ==> 'EVEN'

function divisibleByTwo(num) {
    if (num % 2 === 0) {
        return "EVEN"
    } else {
        return "ODD"
    }
}

// Build a function `extremeWeather()`
// - accepts argument `tempF` and `precipitation`
// - if `tempF` is above 100 degrees or below 32 degrees return `true`
// - if `precipitation` is above 12 return `true`
// - otherwise return `false`

// extremeWeather(110, 36) ==> true

function extremeWeather(tempF, precipitation) {
    if (tempF > 100 || tempF < 32) {
        return true
    } else if (precipitation > 12) {
        return true
    } else {
        return false
    }
}

// Build a function `fizzBuzz()`
// - accepts an argument `num`
// - if `num` is divisible by 3 return `"FIZZ"`
// - if `num` is divisible by 5 return `"BUZZ"`
// - if `num` is divisible by 3 and 5 return `"FIZZBUZZ"`
// - otherwise return the number

// fizzBuzz(6) ==> "FIZZ"
// fizzBuzz(10) ==> "BUZZ"
// fizzBuzz(60) ==> "FIZZBUZZ"
// fizzBuzz(8) ==> 8

function fizzBuzz(num) {
    let key = ""

    if (num % 3 === 0) {
        key += "FIZZ"
    }

    if (num % 5 === 0) {
        key += "BUZZ"
    }

    if (key === "") {
        return num
    } else {
        return key
    }

    // TERNARY STATEMENT

    // if         true           false
    // "if this" ? "true value" : "false value"

    // return key === "" ? num : key
}

function fizzBuzzTwo(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FIZZBUZZ"
    } else if (num % 5 === 0) {
        return "BUZZ"
    } else if (num % 3 === 0) {
        return "FIZZ"
    } else {
        return num
    }
}