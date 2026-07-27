// STRINGS //

// comment - JS ignores comments
// you can think of comments as notes for HUMANS

// VARIABLES //

// variables track values - store information
// some variables can change - CONSTANTS cannot change
// variables are helpful for functions and operations and other things - we want to use our information to DO THINGS

// numberOfHotdogsEaten --> name of the variable
// 15 --> value that the variable is tracking
// var --> this is how the variable is declared
// (var is an old way of declaring variables, don't use it)
var numberOfHotdogsEaten = 15;

// when we DECLARE with `let` the value is changeable
let numberOfPrizesWon = 3;

// when we DECLARE with `const` it CANNOT be changed
const nameOfThemePark = "Coney Island";

// reassigning values:
numberOfHotdogsEaten = 16;
numberOfPrizesWon = 2;
// nameOfThemePark = "Super Coney Island"; --> you CANT DO THIS WITH A CONSTANT

// global variable --> available in any scope (we'll talk about scope later)
// most people use global variables VERY sparingly
whatever = "whatever";


// STRINGS //

// text

const firstString = "I am a bunch of text";
const secondString = "1234567890";
const thirdString = "!@#$%^&*()_ +=";

const stringWithSingleQuotes = 'I only use "single" quotes';

// the \ is an escape character which helps us tell JS what is a character in the string
const anotherString = "I am using double quotes: \"YES\"";

let lineLength = 20;

// INTERPOLATION with backtics
const withBacktics = `Current Line Queue: ${ lineLength }`;

// CONCATENATION with the '+'
const thingOne = "I am the first string";
const thingTwo = "I am the second string";
const thingThree = thingOne + thingTwo;

// EXERCISES


// 1. -------------------

// declare two values:

const openingTime = "6am";
const closingTime = "1pm";

// Using openingTime and closingTime create a string that reads:

const hours = `We are open from ${openingTime} to ${closingTime}`;

// 2. -------------------

// declare any number of values for your name

const firstName = "Chett";
const lastName = "Tiller";

// use either concatenation or interpolation to create your full name:

const fullname = firstName + " " + lastName;
// "Chett Tiller"