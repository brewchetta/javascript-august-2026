// REVIEW //

// in order to successfully use a js file with your html file you must DEFER the script tag

// DOM      ---     HTML
// HOUSE    ---     BLUEPRINTS

// SEE AND AFFECT THE DOM USING JS


// SELECT ITEMS FROM THE DOM --> QUERYSELECTOR
// .querySelector()

// get element by tag name (<h1>)
const headingOne = document.querySelector('h1')
// get element by class name (class="subtitle")
const subtitle = document.querySelector('.subtitle')
// get element by id (id="introduction")
const introduction = document.querySelector('#introduction')
// get all elements by tag name (<input>)
const formInputs = document.querySelectorAll('input')

// ACCESS INFORMATION ABOUT AN ELEMENT -- DOT NOTATION

// returns the text inside of the <h1>
headingOne.textContent
// returns the class of the <h2>
subtitle.class // "subtitle"
// returns the id of the <p>
introduction.id // "introduction"

const linkToIntro = document.querySelector('a')
linkToIntro.href // "https://google.com/"

// SET PROPERTIES AND ATTRIBUTES FOR AN ELEMENT

// setting text for subtitle
subtitle.textContent = "Blah Blah Blah Subtitle"

// get only the <span> in the <h1>
const thunderDOMSpan = headingOne.querySelector('span')

// attach animation style
thunderDOMSpan.style.animation = "animated-shadow 2s forwards" 

// change text color to red
subtitle.style.color = "red"

// using inputs
const firstInput = document.querySelector('input')
firstInput.value // whatever the user has type
firstInput.value = "123-456-7890"

// querySelectorAll gets all inputs
const allInputs = document.querySelectorAll('input')

// loop through allInputs and do something for each
// for (let i = 0; i < allInputs.length; i++) {
//     const currentInput = allInputs[i]
//     currentInput.value = "HELLO"
//     currentInput.style.color = "red"
// }

// hide the element (it's still in the DOM but invisible)
linkToIntro.style.display = "none"
// reset the element so we can see it again
linkToIntro.style.display = ""

// more or less completely remove it from the DOM
linkToIntro.remove()