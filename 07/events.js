// EVENTS //

// event --> user interaction on the page
// button clicks, typing into a form, submitting a form, hovering over an item, moving your cursor away from an item

function handleClickMe() {
    console.log("The button has been clicked")
}

// with event listener
const callbackBtn = document.querySelector('#callback-button')

                            // event       fn to run
callbackBtn.addEventListener("click", handleClickMe)

// a callback fn is CALLED BY THE FUNCTION
// we just pass a fn definition and it runs the fn for us
function callThreeTimes( callbackFunction ) {
    callbackFunction()
    callbackFunction()
    callbackFunction()
}


// EVENT OBJECT

const eventObjBtn = document.querySelector('#event-object-button')


function showEventObject(event) {
    console.log("THE EVENT:")
    console.log( event )
    console.log( "THE TARGET:", event.target )
    // event.target.remove()
}

eventObjBtn.addEventListener("focus", showEventObject)


const colorInput = document.querySelector('input[type="color"]')

function handleColorChange(event) {
    // event.target gets the color input
    // value is what the user has chosen
    console.log(event.target.value)
}

// "change" is whenever the user chooses something new / types into the input
colorInput.addEventListener("change", handleColorChange)

function handleHover() {
    console.log("WE ARE HOVERING")
}

// mouseover is when you hover on an element
colorInput.addEventListener("mouseover", handleHover)

function handleLeave() {
    console.log("OK BYEEEEEEEE")
}

// mouseleave is when you stop hovering over an element
colorInput.addEventListener("mouseleave", handleLeave)

function handleChangeBgColor(event) {
    // get the color from the input using its .value
    const color = event.target.value
    // change the bg color of the body
    document.body.style.backgroundColor = color
}

colorInput.addEventListener("change", handleChangeBgColor)


// SHOW / HIDE MENU

let menuShown = false

function toggleMenu(event) {
    // flip false to true OR flip true to false
    menuShown = !menuShown

    const hiddenMenu = document.querySelector("#hidden-menu")
    if (menuShown === false) {
        hiddenMenu.style.display = "none"
    } else {
        hiddenMenu.style.display = "block"
    }

}

const hiddenMenuButton = document.querySelector('#hidden-menu-button')

hiddenMenuButton.addEventListener("click", toggleMenu)