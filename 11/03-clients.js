// CLIENTS ARRAY EXERCISES //

const clients = [
    {
        firstName: "Bob",
        lastName: "Builder",
        state: "Arizona"
    },
    {
        firstName: "Johnny",
        lastName: "Appleseed",
        state: "North Carolina",
    },
    {
        firstName: "Jimothy",
        lastName: "Raccoon",
        state: "Washington"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        state: "North Carolina"
    },
    {
        firstName: "Invader",
        lastName: "Zim",
        state: "Arizona"
    }
]

// Use .map() to create a new array of strings, each string is the combined first name and last name of the client object
// Example: ["Bob Builder", "Johnny Appleseed", ...]

clients.map(clientObj => `${clientObj.firstName} ${clientObj.lastName}`)
// OR
clients.map(clientObj => clientObj.firstName + " " + clientObj.lastName)


// Use .find() to return the client with the last name of "Doe"
clients.find(clientObj => clientObj.lastName === "Doe")

// Use .filter() to return an array of all clients who live in "Arizona"
clients.filter(clientObj => clientObj.state === "Arizona")

// Use .sort() to group clients by state alphabetically
clients.sort((clientA, clientB) => clientA.state > clientB.state)