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
    event.target.textContent = currentPlayer
    checkVictory()
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
    if ( rowVictory ) {
        alert( "Tic tac toe three in a row!" )
    } else {
        togglePlayer()
    }    
    //     OR
    //     most recent square plus column squares === currentPlayer?
    //     OR
    //     most recent square plus squares in diagonal === currentPlayer?
}

function checkAllRows() {
    let result = false

    const rowOneSquares = document.querySelectorAll('.row-1')
    if ( checkRow(rowOneSquares) ) {
        result = true
    }

    const rowTwoSquares = document.querySelectorAll('.row-2')
    if ( checkRow(rowTwoSquares) ) {
        result = true
    }

    const rowThreeSquares = document.querySelectorAll('.row-3')
    if ( checkRow(rowThreeSquares) ) {
        result = true
    }

    return result
}


function checkRow( rowArray ) {
    const firstAndSecondMatch = rowArray[0].textContent === rowArray[1].textContent
    const firstAndThirdMatch = rowArray[0].textContent === rowArray[2].textContent
    
    return firstAndSecondMatch && firstAndThirdMatch
}


// TODOS AFTER MVP //

// TODO: If square has already been chosen by a player, no player may click that square again