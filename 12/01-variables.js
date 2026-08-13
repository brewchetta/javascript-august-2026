// STRING EXERCISES

// 1. Create a new variable called `currentTime` and assign a string of the current time to that variable --> Example: "10:52am EST". This variable should be changeable.
let currentTime = "3:35pm EST"


// 2. Create a new variable using concatenation (the `+`) with your currentTime variable and create a string that reads "The current time is now 10:52am EST".
const concatString = "The current time is now " + currentTime


// 3. Create a new variable using interpolation (`${}`) with your `currentTime` variable and create a string that reads "The current time is now 10:52am EST".
const interString = `The current time is now ${currentTime}`


// 4. Create a new variable called `currentTimeUpcased` which uppercases one of the previous either concatenation or interpolation variables.
const currentTimeUpcased = concatString.toUpperCase()
