// DOM //

// .querySelector() --> get an element on the page (if it exists)
const h1 = document.querySelector("h1")

// if we don't have an item on the page, querySelector returns `null`
const legend = document.querySelector("legend")

const firstLi = document.querySelector("li")

const firstUl = document.querySelector("ul")

// these all do the same thing:
firstUl.querySelector("li")
firstUl.querySelector('li:nth-child(1)') 
firstUl.children[0]
document.querySelector("ul").querySelector("li")
document.querySelector("ul").querySelector("li:nth-child(1)")
document.querySelector("ul").children[0]

// resolve getting the second ul
let animalList = document.querySelectorAll("ul")[1]
animalList = document.querySelector("#animal-list")

animalList.children[2]
animalList.querySelectorAll('li')[2]
document.querySelector("#animal-list").children[2]
document.querySelector("#animal-list").querySelectorAll('li')[2]