// SPLITTING & JOINING STRINGS //

"pizza"[0] // "p"
"pizza"[1] // "i"
"pizza"[2] // "z"
"pizza"[3] // "z"
"pizza"[4] // "a"
"pizza"[5] // undefined

// .split() will split the string into an array

// an empty string argument splits on every character (letter/number/space/special character/etc)
"pizza".split("") 
// [ "p", "i", "z", "z", "a" ]

let theWord = "bird"
theWord.split("") 
// [ "b", "i", "r", "d" ]

// a space in a string will split on every space
let theSentence = "The spry young fox jumped over the dog"
theSentence.split(" ") 
// [ "The", "spry", "young", "fox"... ]

// a punctuation mark will split on every one of those punctuation marks
let theParagraph = "I am the first sentence. And I'm the second. Hello I am the third."
theParagraph.split(". ") 
// [ "I am the first sentence", "And I'm the second", "Hello I am the third." ]

// using a regular expression to "." AND "?" AND "!"
let thePunctuation = "I use a period. I use a question mark? I use an exclamation! Yep that's it"
thePunctuation.split(/[.?!]/)
// [ "I use a period", " I use a question mark", " I use an exclamation", " Yep that's it" ]

// .join() takes an array and makes it a string
// ["The", "spry", "young", "fox"].join('')
// // "The,spry,young,fox" 

// ["The", "spry", "young", "fox"].join("")
// // "Thespryyoungfox"

// ["The", "spry", "young", "fox"].join(".")
// // "The.spry.young.fox" 

// ["The", "spry", "young", "fox"].join(" ")
// // "The spry young fox"

// // objects don't have a natural .join() but we can convert them into an array and .join() the array
const speechObject = {
    preamble: "My fellow americans",
    firstPart: "Lorem ipsum dolor",
    finalPart: "Blah blah blah",
}

const speechArray = Object.values( speechObject )
speechArray.join(". ")
// "My fellow americans. Lorem ipsum dolor. Blah blah blah" 


// CAPITALIZE A WORD

const splitStringArray = "word".split('') // [ "w", "o", "r", "d" ]
splitStringArray[0] = splitStringArray[0].toUpperCase() // [ "W", "o", "r", "d" ]
splitStringArray.join('') // "Word"


function capitalizeString( str ) {
    const splitString = str.split('')
    splitString[0] = splitString[0].toUpperCase()
    return splitString.join('')
}

capitalizeString( "chett" )
// "Chett"



// CAPITALIZE EVERY WORD



const stringOfNames = "john jim janet joe jill jerry"

const arrayOfNames = stringOfNames.split(' ')

for (let i = 2; i < 4; i++) {
    arrayOfNames[i] = capitalizeString( arrayOfNames[i] )
}


const beverages = ["coke", "pepsi", "dr pepper"]


function capitalizeWords( wordsParam ) {
    // new array we will add capitalized words
    const result = []
    
    // checking true/false if this is an array
    const isArray = Array.isArray(wordsParam)
    if ( isArray ) {
    
    
        // go through every word in the array
        for (let i = 0; i < wordsParam.length; i++) {
            // get the word from the array
            const word = wordsParam[i]
            // make the capitalized version
            const capitalWord = capitalizeString( word )
            // push the capitalized word into the result
            result.push( capitalWord )
        }
    
        return result
    
    // for strings
    } else if ( typeof wordsParam === "string" ) {
        // major difference: split the string into an array on spaces
        const splitString = wordsParam.split(' ')

        for (let i = 0; i < splitString.length; i++) {
            const word = splitString[i]
            const capitalWord = capitalizeString( word )
            result.push( capitalWord )
        }

        // major difference: join the array back into a string at the end
        return result.join(' ')

    } else {
        throw Error("That's not a string or array")
    }

}


// PATCHING / MONKEY PATCHING

function newToLowerCase() {
  return "lowercase"
} 

String.prototype.toLowerCase = newToLowerCase 

theWord.toLowerCase() // "lowercase"


function newStringMethod() {
    const splitString = this.split('')
    splitString[0] = splitString[0].toUpperCase()
    return splitString.join('')
}

String.prototype.capitalize = newStringMethod


// REVERSE A STRING

function reverseMethod(word=this) {
    // result array
    const result = []

    const splitString = word.split('')

    const finalIndex = splitString.length - 1
    // altered 'for' loop
    // start at the end
                        // while i is above 0
                                    // decrement towards the beginning 
    for (let i = finalIndex; i >= 0; i--) {
        const letter = splitString[i]
        result.push( letter )
    }

    return result.join('')
}

// attach to string
String.prototype.reverse = reverseMethod


// SCRAMBLE A WORD

const stringOfWords = "thank you"

function scramble(word) {
    // 1. split the word(s)
    const splitWordArray = word.split(' ')

    // 2. iterate through letters
    for (let i = 0; i < splitWordArray.length; i++) {
        // 3. get random index
        const randomIndex = Math.floor( Math.random() * stringOfWords.length )

        // 4. make variables for the current and random letter
        const currentLetter = splitWordArray[ i ]
        const randomLetter = splitWordArray[ randomIndex ]
        
        // 5. swap the current and random letter in the array
        splitWordArray[i] = randomLetter
        splitWordArray[randomIndex] = currentLetter
    }

    // 6. join the array back into a string and return
    return splitWordArray.join(' ')
}