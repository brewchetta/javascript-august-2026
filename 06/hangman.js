// HANGMAN.js //

console.log("Welcome to Hangman")

// There is a word that we're trying to guess the letters for

// If we guess correctly then that letter is made apparent in the word
    // If we guess all correct letters we win

// If we guess incorrectly then we get one step closer to losing
    // If we guess X number of times incorrectly we lose

// For either win or loss we see the final word result

// FUNCTION : SHOW THE CURRENT GUESSES / CORRECT LETTERS / HOW CLOSE TO LOSING
// FUNCTION : WINNING FUNCTION
// FUNCTION : LOSING FUNCTION


// VARIABLES SECTION

const guessesBeforeLoss = 6

const listOfWords = ['apple']

let guessedLetters = []

let guessesRemaining = 0

let wordToGuess

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
    const isVictory = testForVictory()
    if (isVictory) {
        // TODO: RUN VICTORY FUNCTION
        console.log("VICTORY!")
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

// FUNCTION : INCORRECT GUESS FUNCTION
function incorrectGuess(incorrectLetter) {
    console.log(incorrectLetter)
    // add to guessed letters
    guessedLetters.push(incorrectLetter)
    // reduce guesses remaining by one
    guessesRemaining--
    // if they're defeated we show the lose screen
    const isDefeated = guessesRemaining <= 0
    if (isDefeated) {
        // TODO: RUN LOSS FUNCTION
        console.log("You lose! Would you like to play?")
    } else { 
        console.log(`${incorrectLetter} is NOT in the word, you have ${guessesRemaining} guesses remaining`)
    }
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

// SETUP THE GAME
// choose a random word
function initialize() {
    // reset guesses
    guessesRemaining = guessesBeforeLoss
    // reset the guessed letters
    guessedLetters = []
    // set the random word
    setRandomWord()
    // show instructions
    console.log("TODO: INSTRUCTIONS GO HERE")
}

// start the game
initialize()
