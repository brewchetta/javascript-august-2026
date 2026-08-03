// RANDOM MATH //

Math.random()
// gives a random float between 0 and 1
// examples:
0.44710457652069635 
0.6106072243191132
0.9020760358747977

Math.round() // default to the nearest number
Math.floor() // round to the lower number
Math.ceil() // ceil to the higher number

Math.random() * 100
// a random float between 0 and 100

let randomNumber = Math.random() * 100
Math.round( randomNumber )

const arrayOfNumbers = [1,2,4,6,8,9,12]
arrayOfNumbers[5.5] // invalid index

arrayOfNumbers.length
arrayOfNumbers[arrayOfNumbers.length] // undefined
// because it goes just past the length of the array

// create a random number between the beginning and the end of the array
// access the array at that index and we have a random item

Math.random() * arrayOfNumbers.length
// random float between 0 and the array length

const arrayOfStates = [
    "Nebraska",
    "New York",
    "New Jersey",
    "Alabama",
    "Texas",
    "California",
    "Arkansas"
]

let randomIndex = Math.floor( Math.random() * arrayOfStates.length )
// round down since 0 is a valid index but 3 (array.legnth) is not

let randomState = arrayOfStates[ randomIndex ]
// console.log( randomState, randomIndex )


// put the process into a function
function getRandomState() {
    // our array of states
    const arrayOfStates = [
        'Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'
    ]
    // create a random float b/w 0 and the length of the array
    const randomNumber = Math.random() * arrayOfStates.length
    // round down to create a random index
    const randomIndex = Math.floor( randomNumber )
    // return the state at that index
    const randomState = arrayOfStates[ randomIndex ]

    return randomState
}


                                // parameter - something we put in every time we call the fn
function planAllAmericanVacation( numberOfLocations ) {
    // empty array we will put the vacation items into
    const vacationArray = []

    // loop `numberOfLocations` times
    for (let i = 0; i < numberOfLocations; i++) {
        // get random state
        const randomState = getRandomState()
        // create string with randomState
        const formattedString = `${i + 1}. ${ randomState }`
        // put into array
        vacationArray.push( formattedString )
        // we wait to return until after the loop
    }

    // return the result array after looping
    return vacationArray
}


// EXERCISE -- GO OVER AT 11:45 EST //

// Create a function called getRandomFood()
// Use the array:
const foods = ["Pizza", "Hamburger", "Mac n Cheese", "Falafel", "Potato Salad"]

// When the array is called --> getRandomFood()
// Return a random item from the `foods` array --> "Hamburger" OR "Falafel" OR "Potato Salad" OR ANYTHING ELSE IN THE ARRAY

// Make sure to test this as you go! Try adding new items or removing items from the array, you should always get a random item and number `undefined`