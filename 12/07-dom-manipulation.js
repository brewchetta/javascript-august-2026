// DOM MANIPULATION EXERCISES


// 1. Use `.querySelector()` to select the <form> and save it to the variable `topicForm`.

const topicForm = document.querySelector('form') 


// 2. Use `.querySelectorAll()` to select all <code> and save them to the variable `codeElements`.

const codeElements = document.querySelectorAll('code') 


// 3. Use `.querySelector()` to select the <ul> and save it to the variable `topicsList`.

const topicsList = document.querySelector('ul') 


// 4. Use `.querySelector()` to select the element with an id of "topic-input" and save it to the variable `topicInput`.

const topicInput = document.querySelector('#topic-input')


// 5. Use `.querySelector()` to select the element with an id of "important-information" and save it to the variable `importantInformation`.

const importantInformation = document.querySelector('#important-information')


// 6. Change the `topicForm` to use a "solid grey 2px" border styling.

topicForm.style.border = "solid grey 2px" 
topicForm.style.padding = "1em" 


// 7. Change the styling for all <code> so that they are the color "red".

codeElements.forEach( code => code.style.color = "red" ) 


// 8. Change the first item inside `codeElements` so its text properly reads "defer".

codeElements[0].textContent = "defer"


// 9. Remove the last <li> within `topicsList`.

const lastIndex = topicsList.children.length - 1
const lastItem = topicsList.children[ lastIndex ]
lastItem.remove()


// 10. When the <button> is clicked, change the styling for every element within `topicList` to use a textDecoration of "line-through".

const button = document.querySelector('button')

button.addEventListener('click', handleCrossOut)

function handleCrossOut() {
    const topics = topicsList.children

    for (let i = 0; i < topics.length; i++) {
        const element = topics[i]
        element.style.textDecoration = "line-through"
    }
}


// 11. When the <form> is submitted, add the current `value` from `topicInput` to the `topicsList` as a <li>.

topicForm.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const newItemString = topicInput.value
    const li = document.createElement('li')
    li.textContent = newItemString
    topicsList.append( li )
    event.target.reset()
}