// REVIEW //

const beverages = [
    "brotein coffee",
    "iq coffee",
    "fireball whiskey",
    "coca cola",
    "literal coffee beans",
    "tea"
]

const beverageObjects = [
    {name: "brotein coffee", temp: "hot"},
    {name: "iq coffee", temp: "hot"},
    {name: "fireball whiskey", temp: "cool"},
    {name: "coca cola", temp: "cool"},
    {name: "literal coffee beans", temp: "room temp"},
    {name: "tea", temp: "hot"}
]


// DESTRUCTIVE / MUTATE
// alter or change the original array

// NON-DESTRUCTIVE / MUTATE
// DOES NOT alter or change the original array


// .forEach()
// generic iterator - do something for each item in the array

beverages.forEach( bev => {
    const newP = document.createElement('p')
    newP.textContent = bev
    document.body.append(newP)
})
// for each item (bev) create a new <p> and append it to the DOM

// .forEach does NOT return anything


// .map() - [non-destructive]
// returns a new array
// the array has been altered / transformed in some way (usually)
// the transformation is entirely dependent on what the callback fn returns

beverages.map(bev => bev.toUpperCase())
// [ "BROTEIN COFFEE", "IQ COFFEE", "FIREBALL WHISKEY", "COCA COLA", "LITERAL COFFEE BEANS", "TEA" ]

beverages.map(bev => `${bev} beverage`)
// [ "brotein coffee beverage", "iq coffee beverage", "fireball whiskey beverage", "coca cola beverage", "literal coffee beans beverage", "tea beverage" ]


// .slice() - [non-destructive]
// starting index / ending index (stops right before this index)
beverages.slice(3, 5)
beverages.slice([3], [5])
beverages.slice("3", "5")
// [ "coca cola", "literal coffee beans" ]

// there is no callback used in .slice, just the two indices (indexes)

// returns just a slice of the array

// also works with array of objects
beverageObjects.slice(3,5)
// [{ name: "coca cola", temp: "cool" }, { name: "literal coffee beans", temp: "room temp" }]


// .splice() - [destructive]
// removes a sub-array of the original area and returns the new sub-array

// const secondHalf = beverages.splice(3)
// [ "coca cola", "literal coffee beans", "tea" ]
// beverages
// [ "brotein coffee", "iq coffee", "fireball whiskey" ]

const removedItem = beverages.splice(4,1)
// the second argument in .splice is how many items to "splice" and remove
// in this case we only remove one item at index 4 ("literal coffee beans")


// .find() - [non-destructive]
// return the FIRST item in the array that matches `true` in the callback fn

beverageObjects.find(bevObj => bevObj.temp === "room temp")
// { name: "literal coffee beans", temp: "room temp" }

beverageObjects.find(bevObj => bevObj.temp === "cool") 
// { name: "fireball whiskey", temp: "cool" }

beverageObjects.find(bevObj => bevObj.temp === "like the surface of the sun")
// undefined


// .filter() - [non-destructive]
// return a new array of ALL the items in the array that match `true` in the callback fn

beverageObjects.filter(bevObj => bevObj.temp === "room temp")
// [ { name: "literal coffee beans", temp: "room temp" } ]

beverageObjects.filter(bevObj => bevObj.temp === "cool") 
// [
//     { name: "fireball whiskey", temp: "cool" },
//     { name: "coca cola", temp: "cool" }
// ]

beverageObjects.filter(bevObj => bevObj.temp === "like the surface of the sun")
// []


// .sort() - [destructive]
// sort the original based on a condition
beverages.sort((a,b) => a > b) 
// [ "brotein coffee", "coca cola", "fireball whiskey", "iq coffee", "tea" ]

beverageObjects.sort((a,b) => a.name > b.name) 
beverageObjects.sort((a,b) => a.temp > b.temp) 
// with objects you will need to sort based on a key/value inside the object


// .join() - [non-destructive]
// takes each item in the array and creates a new string joining them together

beverages.join()
// "brotein coffee,coca cola,fireball whiskey,iq coffee,tea"

// with an argument of a delimiter
beverages.join("|")
// "brotein coffee|coca cola|fireball whiskey|iq coffee|tea" 


// .reduce
