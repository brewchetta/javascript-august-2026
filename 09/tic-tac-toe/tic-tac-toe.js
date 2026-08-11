// TIC TAC TOE //

// MVP - minimum viable product

// when a square is clicked, it has been chosen by the player who clicked it

// the player alternates between X's and O's

// when three items in a row / column / diagonal have been chosen by a single player, that player wins

let currentPlayer = "X"

const allSquares = document.querySelectorAll('#board div')

// for every square... add click event listener
for (let i = 0; i < allSquares.length; i++) {
    const square = allSquares[i]
    square.addEventListener('click', handleClickSquare)
}

function handleClickSquare( event ) {
    if (event.target.dataset.owner) return
    event.target.dataset.owner = currentPlayer
    addImgToSquare( event.target )
    checkVictory()
}

function addImgToSquare( currentSquare ) {
    let currentImgPath
    if (currentPlayer === "X") {
        currentImgPath = 'assets/x.svg'
    } else if (currentPlayer === "O") {
        currentImgPath = 'assets/o.svg'
    }

    const img = document.createElement('img')
    img.src = currentImgPath
    currentSquare.append(img)
}

function togglePlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O"
    } else {
        currentPlayer = "X"
    }
}

function checkVictory() {
    const rowVictory = checkAllRows()
    const colVictory = checkAllColumns()
    const diagVictory = checkAllDiagonals()
    if ( rowVictory || colVictory || diagVictory ) {
        alert( "Tic tac toe three in a row!" )
    } else {
        togglePlayer()
    }
}

function checkAllRows() {
    let result = false

    const rowOneSquares = document.querySelectorAll('.row-1')
    if ( checkLine(rowOneSquares) ) {
        result = true
    }

    const rowTwoSquares = document.querySelectorAll('.row-2')
    if ( checkLine(rowTwoSquares) ) {
        result = true
    }

    const rowThreeSquares = document.querySelectorAll('.row-3')
    if ( checkLine(rowThreeSquares) ) {
        result = true
    }

    return result
}


function checkAllColumns() {
    let result = false

    const colOneSquares = document.querySelectorAll('.col-1')
    if ( checkLine(colOneSquares) ) {
        result = true
    }

    const colTwoSquares = document.querySelectorAll('.col-2')
    if ( checkLine(colTwoSquares) ) {
        result = true
    }

    const colThreeSquares = document.querySelectorAll('.col-3')
    if ( checkLine(colThreeSquares) ) {
        result = true
    }

    return result
}


function checkAllDiagonals() {
    let result = false

    const diagOneSquares = document.querySelectorAll('.diag-1')
    if ( checkLine(diagOneSquares) ) {
        result = true
    }

    const diagTwoSquares = document.querySelectorAll('.diag-2')
    if ( checkLine(diagTwoSquares) ) {
        result = true
    }

    return result
}


function checkLine( squares ) {
    const firstMatch = squares[0].dataset.owner === currentPlayer
    const secondMatch = squares[1].dataset.owner === currentPlayer
    const thirdMatch = squares[2].dataset.owner === currentPlayer
    
    return firstMatch && secondMatch && thirdMatch
}

function reset() {
    // set current player back to "X"
    currentPlayer = "X"
    
    // delete all imgs inside #board
    const allImgs = document.querySelectorAll('#board img')
    for (let i = 0; i < allImgs.length; i++) {
        allImgs[i].remove()
    }

    // reset all the datasets inside the squares
    for (let i = 0; i < allSquares.length; i++) {
        const square = allSquares[i]
        square.dataset.owner = ''
    }
}

const resetButton = document.querySelector('button')

resetButton.addEventListener("click", reset)