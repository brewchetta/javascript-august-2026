// PURCHASES ARRAY EXERCISES //

const purchases = [
    { item: "Orange", price: 3.99, purchasedBy: "Tim" },
    { item: "Pasta", price: 2.99, purchasedBy: "Tim" },
    { item: "Easy Ramen", price: 5.99, purchasedBy: "Jane" },
    { item: "Pasta", price: 2.99, purchasedBy: "Jane" },
    { item: "Beans", price: 6.99, purchasedBy: "Jimothy" },
    { item: "Trash", price: 0.99, purchasedBy: "Jimothy" },
    { item: "Champagne", price: 29.95, purchasedBy: "Tim" },
    { item: "Literally Just Coffee Beans", price: 6.49, purchasedBy: "Jane" },
    { item: "Pasta", price: 1.99, purchasedBy: "Jane" },
    { item: "Banana", price: 3.99, purchasedBy: "Jane" },
    { item: "Ice Cream", price: 5.95, purchasedBy: "Tim" },
    { item: "Ice Cream", price: 5.95, purchasedBy: "Jimothy" },
    { item: "Trash", price: 3.95, purchasedBy: "Jimothy" },
    { item: "Trash", price: 20.90, purchasedBy: "Jimothy" },
    { item: "Trash", price: 0.01, purchasedBy: "Jimothy" },
]

// Use a method to see a new array of only "Ice Cream" purchases
purchases.filter( purchaseObj => purchaseObj.item === "Ice Cream" )

// Use a method to group all purchases alphabetically by the `purchasedBy` name
purchases.sort( (a,b) => a.purchasedBy > b.purchasedBy )

// Use a method to add all prices together and see the total as a number for the day
purchases.reduce((acc, purchaseObj) => acc + purchaseObj.price, 0)
// the 0 at the end is important as an initial value!

// Use .filter() and .reduce() to get the total spent by a "Jimothy"
purchases
.filter( purchaseObj => purchaseObj.purchasedBy === "Jimothy" )
.reduce( (acc, purchaseObj) => acc + purchaseObj.price, 0 )

// Use .filter() and .reduce() to get the total spent on "trash"
purchases
.filter( purchaseObj => purchaseObj.item === "Trash" )
.reduce( (acc, purchaseObj) => acc + purchaseObj.price, 0 )

// Use methods along with some mathematical operations to get the average price of an item sold

const total = purchases.reduce((acc, purchaseObj) => acc + purchaseObj.price, 0) 
const average = total / purchases.length
// OR
purchases.reduce((acc, purchaseObj) => acc + purchaseObj.price, 0) / purchases.length

// HINT: average = sum / number of items