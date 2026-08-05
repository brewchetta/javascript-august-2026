// ADDING NODES //

// REMOVE NODE

// removes the <form> AND it's <input> children
const myForm = document.querySelector('form')

myForm.remove()


// TO ADD A NEW NODE

// 1. CREATE THE ELEMENT
const newH3 = document.createElement('h3')
// the h3 is not on the page yet, it exists but not in the DOM

// 2. GIVE IT PROPERTIES AND ATTRIBUTES
newH3.className = "exciting-heading"
newH3.id = "cool-h3"
newH3.textContent = "Hello Y'all, I'm a Cool H3"
// img.src = "path/to/img.jpg"

// 3. GIVE IT A PLACE TO LIVE
const body = document.body

body.append(newH3)      // add it to the bottom of the body
body.prepend(newH3)     // add it to the top of the body

// adding a todo to the todo-list
const todoList = document.querySelector('#todo-list')
// create new li
const newTodo = document.createElement('li')
// give it text
newTodo.textContent = 'Go To The Doctor'
// add to the end of the todo-list
todoList.append(newTodo)

// example function that adds todo items to the todo-list
function addTodo( text ) {
    const todoList = document.querySelector('#todo-list')
    const newTodo = document.createElement('li')
    newTodo.textContent = text
    todoList.append(newTodo)
}

// now we can easily add new todos to the container
addTodo("Organize Sock Drawer")