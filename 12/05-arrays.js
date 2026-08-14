// ARRAY EXERCISES

// 1. Create a new array named `sodasArray` - make sure there are at least 2 sodas in the array.

const sodasArray = [
	"Dr Pepper",
	"Coca Cola",
	"Pepsi",
	"Sprite",
	"Fanta",
	"Jarritos",
	"Nuka Cola"
]


// 2. Use the function `printBigSodas()` to console.log each soda.toUpperCase.

function printBigSodas() {
	sodasArray.forEach(soda => console.log( soda.toUpperCase() ))
}


// 3. Use the function `printSodaFizz()` to iterate through the sodas and print out "{soda} is super fizzy" using a `.forEach()`.

function printSodaFizz() {
    sodasArray.forEach( soda => console.log(`${soda} is super fizzy`) )
}


// 4. Use the function `allColas()` and the `.filter()` method to return all sodas with the word "cola" inside of them.

function allColas() {
	return sodasArray.filter( soda => soda.toLowerCase().includes("cola") )
}


// For the next set of exercises use the array `clientsArray`

const clientsArray = [
    "john smith",       // [0]
	"jane smith",       // [1]
	"john doe",         // [2]
	"jane doe",         // [3]
	"john carpenter",   // [4]
	"jane fonda"        // [5]
]

// 1. Complete the function `printAllNames` which uses a `.forEach()` to console.log each of the client names.

function printAllNames() {
	clientsArray.forEach( client => console.log(client) )
}


// 2. Complete the function `filterJohns()` which uses `.filter()` to return an array of all `clients` with the name "john".

function filterJohns() {
	return clientsArray.filter( client => client.toLowerCase().includes("john") )
}


// 3. Complete the function `findJane()` which uses `.find()` to return the first person with a name of "Jane" in `clients`.

function findJane() {
	return clientsArray.find( client => client.toLowerCase().includes("jane") )
}


// 4. Complete the function `secondHalf()` which uses `.slice()` to return a new array of only the second half of `clients`.

function secondHalf() {
	const halfwayIndex = Math.ceil(clientsArray.length / 2) 
	return clientsArray.slice( halfwayIndex )
}


// 5. Complete the function `capitalizedNames()` which returns a new array using `.map()` based on the `clients` array with every first name properly capitalized.
// BONUS - Both the first and last names are properly capitalized when `capitalizedNames()` is called.

function capitalize(string) {
	return string[0].toUpperCase() + string.slice(1)
}

function capitalizedNames() {
	return clientsArray.map( client => {
		return client
		.split(" ")
		.map( str => capitalize(str) )
		.join(" ")
	})
}


// 6. Complete the function `sortNames()` which alphabetically sorts the names in `clients`.
// BONUS - The function `sortNames()` does not alter the original array but instead creates a copy of the array and returns a sorted copy.
// HINT - You'll have to look up how to create a copy of an array.

function sortNames() {
	const copy = [...clientsArray] // create a copy
	return copy.sort( (clientA, clientB) => clientA > clientB )
}