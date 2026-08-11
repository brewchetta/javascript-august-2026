// CALLBACKS //

const h1 = document.querySelector('h1')

h1.addEventListener("click", functionCallback)

function functionCallback(event) {
    alert("Triggered by a callback")
}

// callback - A function we don't call directly, instead another fn calls it for us

function helloWorld() {
    console.log("Hello World")
}

function callThreeTimes( callback ) {
    callback()
    callback()
    callback()
}

// anonymous fn - this fn doesn't have a name associated with it

// arrow fn - this is a syntax shortened version of a normal fn
// they are very good as callback fns

function myNormalFn(x,y,z) {
    return x + y + z
}

const myArrow = (x,y,z) => { 
    return x + y + z 
}

// if you only have one line for the arrow fn you can remove the {}'s and the 'return' and it will automatically return
const myShortenedArrow = (x,y,z) => x + y + z

// otherwise you still need the {}'s and the return if you need a return

// with exactly one parameter we can get rid of the ()'s around the parameters
const withOneParam = x => console.log(x)

callThreeTimes( () => console.log("HELLO FRIEND") )


// setTimeout - trigger the callback once after the millisecond time has elapsed

//            callback                      milliseconds
setTimeout(() => console.log("hello there"), 5000)

// 1000 milliseconds === 1 second


const usStates = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

// do the callback for each item in the array
function doForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        callback(item)
    }
}

const upperCasedStates = []

doForEach( usStates, state => upperCasedStates.push(state.toUpperCase()) )

doForEach( upperCasedStates, s => console.log(s) )

let secondsElapsed = 0
const secondsElapsedSpan = document.querySelector("#seconds-elapsed")

// setInterval - trigger the callback every X milliseconds
setInterval(() => {
    secondsElapsed++
    secondsElapsedSpan.textContent = secondsElapsed
}, 1000)

secondsElapsedSpan.addEventListener( "click", () => secondsElapsed += 1 )