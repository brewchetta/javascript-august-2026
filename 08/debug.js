// DEBUGGING CHALLENGE //

// Find all the bugs in the code and fix them!

// BUG ZERO:
// result: the script loads correctly in the html
// HINT:
// There is one change you'll have to make to the <script> tag in `debug.html`


// BUG ONE:
// result: set width of image to 50%
// querySelector( 'img' ).width = "50%"

// SOLUTION:
document.querySelector('img').style.width = "30%"


// BUG TWO:
// result: increase number of defeated bugs when "Defeat Bug" button is clicked
// const counter = 0

// function increseCounter( defeatedBugsText ) {
//     counter += 1
//     defeatedBugsText.textContent = counter
// }

// defeatBugButton.addEventListener( "click", increaseCounter )

// const defeatBugButton = querySelector( 'defeat-bug-button' )

// SOLUTION: 
let counter = 0

function increaseCounter( unusedEvent ) {
    counter += 1
    const defeatedBugsSpan = document.querySelector('span')
    defeatedBugsSpan.textContent = counter
}

const defeatBugButton = document.querySelector( '#defeat-bug-button' )

defeatBugButton.addEventListener( "click", increaseCounter )


// BUG THREE:
// result: change list items to a color such as "yellow"
// function changeListItemsToColor( color ) {
//     const listItems = querySelector( 'li' )
//     for ( let i = 0; i < listItems; i++ ) {
//         changeListItemColor( listItems )
//     }
// }

// function changeListItemColor( listItems ) {
//     listItems.color = color
// }

// changeListItemsToColor

// SOLUTION: 
changeListItemsToColor("magenta")

function changeListItemsToColor( color ) {
    const listItems = document.querySelectorAll( 'li' )

    for ( let i = 0; i < listItems.length; i++ ) {
        changeListItemColor( listItems[i], color )
    }
}

function changeListItemColor( listItem, color ) {
    listItem.style.color = color
}


// BUG FOUR:
// result: change body background and text color
// body.style.backgroundColor = black
// body.style.color = white

// SOLUTION:
document.body.style.backgroundColor = "black"
document.body.style.color = "white"