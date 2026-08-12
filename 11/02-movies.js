// MOVIES ARRAY EXERCISES //

const movies = [
    "The Dark Knight",
    "Pulp Fiction",
    "The Matrix",
    "Spirited Away",
    "Inception",
    "Gladiator",
    "Avatar",
    "Interstellar",
    "Spiderman"
]

// Use .sort() to reorder the array alphabetically
movies.sort((a,b) => a > b)

// Use .filter() to return an array of movies with multiple words (HINT: they'll include a space)
movies.filter(movieTitle => movieTitle.includes(' ')) 

// Use .slice() to return a new array of only the first 5 movies
movies.slice(0, 5)

// Use .join() to return a string representing all the movies
movies.join()
movies.join(" | ") 