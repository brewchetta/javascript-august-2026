// OBJECTS & METHODS //

// data structure -- hold other information
// an object can hold information for: 
// strings, 
// numbers, 
// booleans, 
// arrays, 
// objects, 
// functions

const emptyObj = {}

const cat = {
    name: "Octavia",
    numberofLegs: 4,
    teeth: true,
    claws: true,
    numberOfLives: 9,
    sleep: function() {
        return this.name + " is currently asleep"
    }
}

// data is stored in key/value pairs

cat.claws // true
cat.claws = false
cat.claws // false

const jimothy = {
    name: ["Jimothy", "Danger", "Raccoon"],
    // for name: get the second name
    species: {
        name: "Raccoon",
        genus: "Procyon",
        family: "Procyonidae",
        scientificName: "Procyon lotor"
    },
    // for species: get the scientificName
    fanBase: [
        {
            name: "Chett",
            age: 21
        },
        {
            name: "Bob",
            age: 21
        },
        {
            name: "Jane",
            age: 21
        }
    ],
    // for fanbase: get the age for the third item
    home: {
        city: "Seattle",
        state: "Washington"
    },
    // for home: get the city
    eatTrash: function() {
        return "Yum trash I love it"
    }
}