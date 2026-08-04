// HANGMAN.js //

console.log("Welcome to Hangman")

// There is a word that we're trying to guess the letters for

// If we guess correctly then that letter is made apparent in the word
    // If we guess all correct letters we win

// If we guess incorrectly then we get one step closer to losing
    // If we guess X number of times incorrectly we lose

// For either win or loss we see the final word result

// FUNCTION : SHOW THE CURRENT GUESSES / CORRECT LETTERS / HOW CLOSE TO LOSING

// VARIABLES SECTION

const guessesBeforeLoss = 6

const listOfWords = ['apple', 'apply']

let guessedLetters = []

let guessesRemaining = 0

let wordToGuess

let victories = 0
let defeats = 0


// FUNCTION : HELPER TO SEE CURRENTLY BLANK LETTERS IN WORD
function displayWordSpaces() {
    let lettersArray = wordToGuess.split('')
    for (let i = 0; i < lettersArray.length; i++) {
        const letter = lettersArray[i]
        const isLetterInGuessedLetters = guessedLetters.includes( letter )
        if ( !isLetterInGuessedLetters ) {
            lettersArray[i] = "_"
        }
    }

    return lettersArray.join(" ")
}


// FUNCTION : TEST WHETHER A LETTER IS PART OF THE MYSTERY WORD
function guessALetter(letter) {
    // TODO: this letter should be only a single letter, not a whole word
    // TODO: we need to see whether the letter has already been guessed
    // TODO: account for upper case guesses
    // TODO: ignore numbers and special characters - only letters allowed
    
    // check whether the letter is in wordToGuess
    const isCorrectGuess = wordToGuess.includes(letter)
    if ( isCorrectGuess ) {
        correctGuess( letter )
    } else {
        incorrectGuess( letter )
    }
}


// FUNCTION : CORRECT GUESS FUNCTION
function correctGuess(correctLetter) {
    guessedLetters.push(correctLetter)
    console.log( displayWordSpaces() )
    const isVictory = testForVictory()
    if (isVictory) {
        victory()
    } else {
        console.log(`${correctLetter} is in the word!`)
    }
    
}

// check whether we have gotten all the letters in the word
function testForVictory() {
    // check each letter in the word and if it's not a guessed letter we return false immediately
    for (let i = 0; i < wordToGuess.length; i++) {
        const wordLetter = wordToGuess[i]
        // is letter included in guessed letters
        const included = guessedLetters.includes( wordLetter )
        // !included means not included - ! flips true to false or false to true
        if ( !included ) {
            // return will end the function and immediately return false
            return false
        }
    }

    // if we get through the entire word we have guessed all letters
    return true
}

// FUNCTION : WINNING FUNCTION
function victory() {
    console.log("Victory!")
    victories++
    console.log(`You have won ${victories} times and lost ${defeats} times.`)
    console.log("A new word has been chosen if you would like to play again...")
    reset()
}

// FUNCTION : INCORRECT GUESS FUNCTION
function incorrectGuess(incorrectLetter) {
    // add to guessed letters
    guessedLetters.push(incorrectLetter)
    // reduce guesses remaining by one
    guessesRemaining--
    console.log( displayWordSpaces() )
    // if they're defeated we show the lose screen
    const isDefeated = guessesRemaining <= 0
    if (isDefeated) {
        defeat()
    } else { 
        console.log(`${incorrectLetter} is NOT in the word, you have ${guessesRemaining} guesses remaining`)
    }
}

// FUNCTION : LOSING FUNCTION
function defeat() {
    console.log("Defeat!")
    defeats++
    console.log(`The word was ${wordToGuess}`)
    console.log(`You have won ${victories} times and lost ${defeats} times.`)
    console.log("A new word has been chosen if you would like to play again...")
    reset()
}


// FUNCTION : CHOOSE A RANDOM WORD AT THE BEGINNING OF THE GAME
function setRandomWord() {
    // get a random integer between 0 and last index of listOfWords
    const randomIndex = Math.floor( Math.random() * listOfWords.length )
    // get the word with the random index
    const randomWord = listOfWords[ randomIndex ]
    // set the wordToGuess
    wordToGuess = randomWord
}

// FUNCTION : RESET
function reset() {
    initialize()
}

// SETUP THE GAME
// choose a random word
function initialize() {
    // reset guesses
    guessesRemaining = guessesBeforeLoss
    // reset the guessed letters
    guessedLetters = []
    // set the random word
    setRandomWord()
    // see the letters that are in the word
    console.log( displayWordSpaces() )
    // show instructions
    console.log("Use guessALetter(letter) to guess which letters are in the word!")
}

// start the game
initialize()