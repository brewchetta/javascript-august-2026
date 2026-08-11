// ARRAY METHODS //

// do the callback for each item in the array
function doForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        callback(item)
    }
}

doForEach(usStates, state => console.log(state))

// the built in .forEach() method for arrays
usStates.forEach(state => console.log(state))

const menuItems = ["Pizza", "Hamburger", "Salad"]

menuItems.forEach(food => {
    const p = document.createElement('p')
    p.textContent = food
    document.body.append(p)
})

// .forEach() - generic iterator - this doesn't do anything very specific... it just does a callback on each of the items


function findBy(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        if ( callback(item) ) {
            return item
        }
    }
}

findBy(usStates, state => state.length < 5) // "Guam"

usStates.find(state => state.length < 5) // "Guam"

menuItems.find(item => item === "Salad") // "Salad"
menuItems.find(item => item === "Falafel") // undefined


// BUT WHAT IF I WANT TO FIND MULTIPLE ITEMS????????

function filterBy(array, callback) {
    const filteredArray = []
    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        console.log(item, callback(item))
        if ( callback(item) ) {
            filteredArray.push(item)
        }
    }
    return filteredArray
}

filterBy(menuItems, item => item.length === 5) // ["Pizza", "Salad"]

menuItems.filter(item => item.length === 5) // ["Pizza", "Salad"]

menuItems.filter(item => item === "Falafel") // []

// .filter() is used to find an array of items
// .find() will only get you ONE item


// .map()

function mapBy(array, callback) {
    const resultArray = []
    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        const result = callback(item)
        resultArray.push( result )
    }
    return resultArray
}

mapBy( menuItems, foodItem => `${foodItem}: ${foodItem.length} characters` ) // [ "Pizza: 5 characters", "Hamburger: 9 characters", "Salad: 5 characters" ]

menuItems.map( foodItem => `${foodItem}: ${foodItem.length} characters` ) // [ "Pizza: 5 characters", "Hamburger: 9 characters", "Salad: 5 characters" ]

const lilListOfPeople = [
    {
        firstName: "Chett",
        age: 21
    },
    {
        firstName: "Luciano",
        age: 21
    },
    {
        firstName: "Ursula",
        age: 15
    }
]


// .reduce()