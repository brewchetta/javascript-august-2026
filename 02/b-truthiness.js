// TRUTHINESS //

// BOOLEANS - true false

true
false

4 % 2 === 0 // true

function isTruthy(value) {
    if (value) {
        return "TRUTHY"
    } else {
        return "FALSEY"
    }
}

// all values have an inherent truthiness to them

Boolean(15) // true
Boolean(0) // false

Boolean(NaN) // false

Boolean('hello') // true
Boolean('') // false
Boolean(' ') // true

Boolean(true) // true
Boolean(false) // false

Boolean({name: "Chett"}) // true
Boolean({}) // true - which is WEIRD

Boolean(["Chett", "Bob", "Jimothy"]) // true
Boolean([]) // true - which is WEIRD

Boolean(undefined) // false
Boolean(null) // false