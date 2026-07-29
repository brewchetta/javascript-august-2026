// ARRAYS //

// arrays are data structures -- contain data

const someObject = {
    firstName: "Chett",
    lastName: "Tiller"
}
// objects are unordered

                  // 1         2
const someArray = ["Chett", "Tiller"] 
// arrays are defined with []

const bigArray = [1,2,3,4,5,6,7,8,9,10]
bigArray.length // the number of items in the array

const emptyArray = []

const stringsArray = ["Double Quotes", 'Single Quotes', `Backtics`]

const arrayOfObjects = [{},{},{}]

// ARRAY INDEXES

const arrayWithIndexes = [
    "first thing",  // 0
    "second thing", // 1
    "third thing"   // 2
]

arrayWithIndexes[0] // "first thing"
arrayWithIndexes[1] // "second thing"
arrayWithIndexes[2] // "third thing"

// arrays have an order --> ordered list

arrayWithIndexes[0] = "the very first things"

// mutable --> it can change

const todoList = []

// .push() adds to the end of the array
todoList.push("laundry")
todoList.push("dishes")
todoList.push("go on vacation")

// .pop() removes from the end
todoList.pop() // remove "go on vacation"

// .unshift() adds to the beginning of the array
todoList.unshift("study javascript")

// .shift() removes from the beginning of the array
todoList.shift()



// EXERCISES

const animals = [
    "bat",
    "cat",
    "jiraf",
    "tree"
]

// 1. add "aardvark" at the beginning of the array
animals.unshift("aardvark") 
// 2. remove "tree" from the end of the array
animals.pop() 
// 3. at the end of the array add "moose" and "zebra"
animals.push("moose") 
animals.push("zebra") 
// 4. replace "jiraf" with "giraffe"
animals[3] = "giraffe"

//         index, numItemsToRemove
animals.splice(3, 1)

// RETURN AT 11:55 EST
// RETURN AT 11:55 EST
// RETURN AT 11:55 EST
// RETURN AT 11:55 EST
// RETURN AT 11:55 EST
// RETURN AT 11:55 EST
// RETURN AT 11:55 EST