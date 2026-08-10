// WEEK TWO REVIEW //

// THE DOM //

// the Document Object Model
// HTML - the blueprint to build a website
// DOM  - the constructed website itself


// SELECT - querySelector - get a single item for a selection

const h1 = document.querySelector('h1')

const ul = document.querySelector('ul')

// SELECT - querySelectorAll - get all items on the page for a selection

const allLi = document.querySelectorAll('li')

const importantTopics = document.querySelectorAll('.important')

// MANIPULATE / CHANGE ELEMENTS

// change the text

h1.textContent // "Week Two Review"

h1.textContent = "August 10th 2026 JavaScript Review"

// change the style

h1.style.textDecoration
h1.style.textDecoration = "underline"

h1.style.color = "#932f2f"

// remove

allLi[5] // get the 6th item
allLi[5].remove()

// add elements to an item

// 1. Create a new element (it won't be on the page)
const newLi = document.createElement('li')

// 2. Add textContent or anything else you need
newLi.textContent = "Debugging"

// 3. Put the new element where it's going to live
ul.append( newLi )

// Adding elements using a FN
function addNewReviewItem( text ) {
    const newLi = document.createElement('li')
    newLi.textContent = text
    ul.append( newLi )
}

// adding a new button

const deleteButton = document.createElement('button')

deleteButton.textContent = "Delete Last Item"

document.body.append( deleteButton )

// watch for an event (for example: clicking the item)

// an event is any sort of user interaction on the page

deleteButton.addEventListener( "click", callbackFunction )

function callbackFunction() {
    const allUlItems = ul.children
    const lastIndex = allUlItems.length - 1
    const lastItem = allUlItems[ lastIndex ]
    lastItem.remove()
}


// ul.addEventListener("mouseover", handleMouseOver)

// function handleMouseOver() {
//     ul.style.color = "#111"
// }


// PROMPT //

function addNewReviewItemFromInput() {
    const newReviewItem = prompt("What new review item should we add?")
    addNewReviewItem( newReviewItem )
}


// SHOWING / HIDING FORM //

let isFormOpen = true

const toggleFormButton = document.querySelector('#toggle-form-button')

toggleFormButton.addEventListener("click", handleToggleForm)

function handleToggleForm( event ) {
    console.log( event )
    const form = document.querySelector('form')

    if ( isFormOpen ) {
        form.style.display = "none"
        isFormOpen = false
    } else {
        form.style.display = ""
        isFormOpen = true
    }
}


// SWITCH //

// switch - conditional logic

function calculator(num1, num2, operation) {
    let result = 0
    // switch is a lot like a big "if / else if"
    switch( operation ) {
        case "+":
            console.log("We are in the +")
            // add the numbers together if "+"
            result = num1 + num2
            break // stops the switch from checking more cases
        case "-":
            console.log("We are in the -")
            // subtract the numbers if "-"
            result = num1 - num2
            break // if we don't have these it WILL ALSO do the default
        default:
            console.log("We are in the default")
            // default code if nothing above was true
            throw Error("You must use a valid operation for the calculator: '+', '-'")
    }

    return result
}


// FORM SUBMISSION //

const form = document.querySelector('form')

let submissionCounter = 0

form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit( event ) {
    // by default the page refreshes
    event.preventDefault() // stop default refreshing

    const reviewInput = document.querySelector('#review-input')
    addNewReviewItem( reviewInput.value )

    submissionCounter++
    if (submissionCounter >= 3) {
        form.reset() // resets the form to its default state
        submissionCounter = 0
    }
}