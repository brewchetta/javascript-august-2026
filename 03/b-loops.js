// LOOPS //

const colors = [
    "red",      // 0
    "orange",   // 1
    "yellow",   // 2
    "green",    // 3
    "blue",     // 4
    "indigo",   // 5
    "violet",   // 6
]

// iteration / looping:
// we do something for each item in an array 
// usually starting with the first item and ending with the last item


// WHILE LOOP

// the index tracks which item in the array we're accessing at the moment
let index = 0

// while loop will go until index is not less than colors.length
while (index < colors.length) {
    console.warn( colors[index] )
    // if we forget to increase index the loop will go FOREVER
    index += 1
}

// example inside a fn
function printAnimals() {
    let index = 0
    
    while (index < animals.length) {
        console.log( animals[index] )
        index += 1
    }
}


// FOR LOOP
//      index          end condition       increment
for (let index = 0; index < colors.length; index += 1) {
    console.log( colors[index] )
}

// FOR LOOP BACKWARDS
const lastIndex = colors.length - 1
//      index                end condition   increment
for ( let index = lastIndex; index >= 0; index -= 1 ) {
    console.error( colors[index] )
}

// you can nest for loops
// for () {
//     for () {
//         for () {

//         }
//     }
// }


// RETURN AT 2:10 EST
// RETURN AT 2:10 EST
// RETURN AT 2:10 EST
// RETURN AT 2:10 EST
// RETURN AT 2:10 EST
// RETURN AT 2:10 EST
// RETURN AT 2:10 EST
// RETURN AT 2:10 EST
// RETURN AT 2:10 EST
// RETURN AT 2:10 EST
// RETURN AT 2:10 EST
// RETURN AT 2:10 EST
// RETURN AT 2:10 EST
// RETURN AT 2:10 EST
// RETURN AT 2:10 EST
// RETURN AT 2:10 EST
// RETURN AT 2:10 EST
// RETURN AT 2:10 EST
// RETURN AT 2:10 EST