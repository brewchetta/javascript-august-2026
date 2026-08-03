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




// REVERSE A STRING
// what about patching - and why it's dangerous

// SCRAMBLE A WORD

// CAPITALIZE EVERY WORD