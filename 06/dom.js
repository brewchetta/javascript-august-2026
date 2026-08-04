// INTRO TO THE DOM //

// Document Object Model

// the structure behind the website

// structure --- HTML

// HTML -- blueprint to create the DOM

// The DOM is the living version of the HTML


// SELECTING ELEMENTS //
const h1 = document.querySelector('h1')

// document is the ROOT of the file
// .querySelector is a method that allows us to select/find an element on the DOM

const firstRedText = document.querySelector('.red-text')

// querySelector only gets one item -- the first item it finds that matches
const firstLi = document.querySelector('li') // only the first li on the page

// querySelectorAll gets ALL items on the page that match
const everyLi = document.querySelectorAll('li') // all li's

// id's are the easiest way to select things -- an id should be unique on the page
const googleLink = document.querySelector('#google-link') 

// we can change attributes / properties of elements using JS
googleLink.textContent // "To Google.com"
googleLink.textContent = "Google"

googleLink.href = "https://askjeeves.com"

googleLink.style.textDecoration = "overline"
googleLink.style.color = "black"

// styling multiple css properties at a time
googleLink.style.cssText = "color: red; background: #eee;"

const jimothy = document.querySelector('img')

// another way to get jimothy
// const jimothy = document.querySelectorAll('img')[0]

// get the src for the image
jimothy.src 
// set the src for the image
jimothy.src = "https://popcreep.com/wp-content/uploads/2026/07/Jimothy-the-Raccoon-768x432.jpg" 


// EXERCISES -- GO OVER AT 3:50 EST

// 1. Can you get the <h2> on the page using querySelector?

document.querySelector('h2')

// 2. Can you get the first <li> on the page?

document.querySelector('li')

// 3. Can you get all of the <p> on the page?

const allPTags = document.querySelectorAll('p')

// 4. Can you get the last <p> on the page?

const lastPTag = document.querySelectorAll('p')[3]
// OR
allPTags[allPTags.length - 1]

// 5. Can you change the textContent for the last <p> on the page so it reads "tortoises always win"?

lastPTag.textContent = "tortoises always win"

// 6. Can you change the src for the second <img> on the page to a different critter?

const secondImg = document.querySelectorAll('img')[1]

secondImg.src = "https://img.magnific.com/premium-photo/cute-business-cartoon-raccoon-working-office_1020514-8063.jpg"

// 7. Can you change the border for the second <img> on the page so that it's "solid green 5px"?

secondImg.style.border = "solid green 5px" 

// 8. Can you use a LOOP to change the style for all the <li> on the page so they are all "blue"

const allLi = document.querySelectorAll('li')

for (let i = 0; i < allLi.length; i++) {
    allLi[i].style.color = "blue"
}

h1.style.display = "none"
// won't display the item

h1.style.display = ""
// resets the item to its normal display

h1.remove()
// completely removes it from the page