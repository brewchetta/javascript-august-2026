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

// <!-- 1. Can you console.log the text inside the h2 in the second div -->

const secondDiv = document.querySelectorAll('div')[1]
secondDiv.querySelector('h2')
// OR
document.querySelectorAll('div')[1].querySelector('h2') 
// OR
document.querySelectorAll('div')[1].children[0]

// <!-- 2. Can you console.log the text for the first li inside the second div -->

document.querySelectorAll('div')[1].children[3].children[0].textContent 

// <!-- 3. Can you console.log the span text inside the inner li -->

document.querySelectorAll('div')[1].querySelector('ul').children[3].children[0]

// OR

document.querySelector('span') 
// this only works because we only have a single span on the page

// <!-- 4. Can you console.log the value inside the textarea (what a user has typed) -->

document.querySelector('textarea').value

document.querySelector('#likes-about-js').value

document.querySelectorAll('div')[1].querySelector('form').querySelector('textarea').value