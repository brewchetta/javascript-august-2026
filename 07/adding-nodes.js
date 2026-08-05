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


// EXERCISES

// 1. Get the movies-watchlist element
const moviesWatchlistFirstWay = document.querySelector('#movies-watchlist') 

// ALTERNATE 

// 1. Create and append a new <ul> to the body with an id of "movies-watchlist" using JS

const moviesWatchlist = document.createElement('ul') 
moviesWatchlist.id = "movies-watchlist" 
document.body.append(moviesWatchlist) 

// 2. Add three movie <li>'s to the movies-watchlist using JS

const firstLi = document.createElement('li')
firstLi.textContent = "Spiderman"
moviesWatchlist.append(firstLi)

const secondLi = document.createElement('li')
secondLi.textContent = "The Odyssey"
moviesWatchlist.append(secondLi)

const thirdLi = document.createElement('li')
thirdLi.textContent = "Paw Patrol"
moviesWatchlist.append(thirdLi)

// BONUS: Do it using a fn
function addMovie( movieText, priority="low" ) {
    const newLi = document.createElement('li')
    newLi.textContent = movieText

    if (priority === "high") {
        movieText.style.color = "red"
    } else if (priority === "medium") {
        newLi.style.color = "orange"
    } else {
        newLi.style.color = "blue"
    }

    moviesWatchlist.append(newLi)
}

// 3. Prepend a new <h3> into movies-watchlist which says "Movies Watchlist"

const watchlistTitle = document.createElement('h3')
watchlistTitle.textContent = "Movies Watchlist"
moviesWatchlist.prepend( watchlistTitle )

// 4. Give each movie in the movies watchlist a different text color to show a priority for how much you want to see the movie (use querySelectorAll)

const allMovieLis = moviesWatchlist.querySelectorAll('li')
allMovieLis[0].style.color = "red" 
allMovieLis[1].style.color = "orange"
allMovieLis[2].style.color = "blue" 