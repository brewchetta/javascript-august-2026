// TODO LIST //

// ELEMENTS //

const todoList = document.querySelector('#todo-list')
const todoForm = document.querySelector('#todo-form')
const todoNameInput = document.querySelector('#todo-name-input')
const todoDescriptionInput = document.querySelector('#todo-description-input')
const todoDeadlineInput = document.querySelector('#todo-deadline')
const todoColorInput = document.querySelector('#todo-color-input')

// EVENT LISTENERS //

todoForm.addEventListener("submit", handleTodoSubmit)

function handleTodoSubmit( event ) {
    event.preventDefault()

    const name = todoNameInput.value
    const description = todoDescriptionInput.value
    const deadline = todoDeadlineInput.value
    const color = todoColorInput.value

    console.log("name:", name, "description:", description, "deadline:", deadline)
    
    addTodoToList(name, description, deadline, color)
}

function addTodoToList( name, description, deadline, color ) {
    // make list item
    const newLi = document.createElement('li')
    // change the list item text to the data
    newLi.textContent = `${name}: ${description} by ${deadline}`
    // change the color of the li
    newLi.style.color = color
    // append to the list
    todoList.append( newLi )

    // add event listener to newLi
    newLi.addEventListener('click', handleToggleTodo)
}

function handleToggleTodo( event ) {
    // event.target is the thing that triggered the event
    const clickedLi = event.target
    
    const textDecoration = clickedLi.style.textDecoration

    if (textDecoration === "") {
        clickedLi.style.textDecoration = "line-through"
    } else if (textDecoration === "line-through") {
        clickedLi.style.textDecoration = ""
    }
}