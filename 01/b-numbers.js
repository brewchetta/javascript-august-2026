// NUMBERS //

// basic data types

// strings
const myString = "I am some text";

// numbers
const myNumber = 15;

// booleans
const myTrue = true;
const myFalse = false;


// integer --> whole number
const classicInteger = 1;

// float / floating point --> has a decimal
const classicFloat = 3.1415;

const addition = classicInteger + classicFloat;

const subtraction = classicInteger - classicFloat;

const multiplication = classicInteger * classicFloat;

const division = classicInteger / classicFloat;

// PEMDAS - order of operations -> parentheses, exponents, multiplication/division, addition/subtraction

const modulo = 5 % 3;
// returns the remainder --> 2
const moduloTwo = 4 % 2;
// returns 0
const moduloThree = 31 % 3;
// returns 1

Math.round(3.14159); // round --> 3
Math.ceil(3.00001); // round up! --> 4
Math.floor(3.999) // round down! --> 3

Math.abs(-3) // absolute number --> 3

// parsing --> converting from one type into another

// NaN means Not a Number

parseInt("42 is the meaning of life");
// 42
parseFloat("42.001 is my fav number");
// 42.001
Number("42");
// 42
Number("42 is a good number");
// NaN

String(42);
// "42"

"20" + 26;
// "2026"