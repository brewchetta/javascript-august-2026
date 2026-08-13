// FUNCTION EXERCISES

// 1. Define a function helloWorld() which returns the string "hello world!"

function helloWorld() {
    return "hello world!"
}


// 2. Define a function today() which gets the current date ( look up how to use `Date()` ) and returns "Today is: { currentDate }". You don't need to format the date nicely unless you feel like, look up Date.toLocaleString if you're curious!

// epoch time - the number of seconds 1970

function today() {
    const currentDate = new Date()
    return `Today is: ${currentDate}`
}


// 3. Define a function sayMyName() which has a parameter `name` and returns "My name is { name }"

function sayMyName( name ) {
    return `My name is ${name}`
}


// 4. Define a function alterString() which has two parameters `string` and `transformation`. If `transformation` is `uppercase` it returns the string.toUpperCase(), if `transformation` is `lowercase` it returns the string.toLowerCase(), if the transformation is `first` it returns the first letter of the string (you'll have to look that last part up!)

function alterString( string, transformation ) {
    if (transformation === "uppercase") {
        return string.toUpperCase()
    } else if (transformation === "lowercase") {
        return string.toLowerCase()
    } else if (transformation === "first") {
        return string[0]
    }
}


// 5. Define a function `sing()` which has a parameter `songTitle` and returns "Now singing: {songTitle}". If no song title are given, the default parameter should be "Never Gonna Give You Up".

// function sing( songTitle="Never Gonna Give You Up" ) {
//     return `Now singing: ${songTitle}`
// }

const sing = (songTitle="Never Gonna Give You Up") => `Now singing: ${songTitle}`


// 6. Define a function `updateCurrentTime` which gets the current hour and minute and changes the currentTime variable in global scope so that its value is: "{hour}:{minute}", for example "10:53". 

// You can get the current hour and minute with: 
// const time = new Date() 
// const hour = time.getHours()
// const minute = time.getMinutes() 

function updateCurrentTime() {
    const time = new Date()
    const hour = time.getHours()
    const minute = time.getMinutes()
    currentTime = `${hour}:${minute}`
}