// CONDITIONALS & BOOLEANS //

// booleans are either true or false
true
false

function isSameWords(wordOne, wordTwo) {
    // === returns true if strictly equal
    return wordOne.trim().toLowerCase() === wordTwo.trim().toLowerCase()
}

function isNotSameWords(wordOne, wordTwo) {
    // !== returns true if not strictly equal
    return wordOne.trim().toLowerCase() !== wordTwo.trim().toLowerCase()
}

// .trim() is a string method
// a method is a fn tied to a specific piece of data

// strictly equals
24 === "24" // false

// loosely equals
24 == "24" // true

24 > 23 // true
24 > 24 // false
24 >= 24 // true
24 >= 23 // true

24 < 25 // true
24 <= 23 // false

"aardvark" < "bat" // true
"zebra" < "marmot" // false

// AND //
// && stands for "and"
// checks that both statements are true

5 > 4 && 4 > 3 // true
"hello" === "HELLO".toLowerCase() && "hello" === "GOODBYE"
// false

// you may check as many conditions as you want
5 > 4 && 4 > 3 && 3 > 2 && 2 > 1 // true


// OR //
const myNum = 5;
myNum > 6 || myNum < 4 // false

function login(usernameOrEmail, password) {
    const validUsername = usernameOrEmail === "Chett"

    const validEmail = usernameOrEmail === "chett@chett.net"

    const validPW = password === "password123"

    const valid = (validUsername || validEmail) && validPW

    return valid
}

// EXAMPLE OF REAL WORLD IF / ELSE / AND ///////////
function validateLogin(username, password) {
    const user = User.find({username: username})
    const validPassword = bcrypt.validate(password, user.password)

    if (user && validPassword) {
        authenticate()
    }
}
////////////////////////////////////////////////////


// IF ELSE //

function simpleLogin(username) {

    // if statements want `true` or `false`
    if (username === "Chett") {
        return "Successful login"
    } else {
        return "Invalid login"
    }

}

function divideByThree(num) {
    if (typeof num !== "number") {
        return `${num} is not a number, try again`
    }

    return num / 3
}

// sm       md      lg      xl
// 480px    720px   980px   1200px

function pixelsToSizeCategory(pixelWidth) {

    const parsedPixels = parseInt(pixelWidth)

    if (parsedPixels >= 1200) {
        return 'xl'
    } else if (parsedPixels >= 980) {
        return 'lg'
    } else if (parsedPixels >= 720) {
        return 'md'
    } else if (parsedPixels >= 480) {
        return 'sm'
    } else {
        return 'xsm'
    }

}