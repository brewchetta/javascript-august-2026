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

allLi[3] // get the 4th item
allLi[3].remove()

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


ul.addEventListener("mouseover", handleMouseOver)

function handleMouseOver() {
    ul.style.color = "#777"
}