// OBJECT EXERCISES

// 1. Create an object named `favoriteTVShow` with `title`, `numberOfSeasons`, and `numberOfEpisodes`. You may fill it with real data or make the data up.

const favoriteTVShow = {
    title: "The Wire",
    numberOfSeasons: 5,
    numberOfEpisodes: 50
}


// 2. Inside `favoriteTVShow` create a nested object with a key of `review`. That review has a `title`, a `reviewer` (can be your name or someone else) and `reviewContent`

favoriteTVShow.review = {
    title: "BEST TV SHOW OMERGERD",
    reviewer: "Chett Tiller",
    reviewContent: "I LOVE THIS TV SHOW BLAH BLAHG BLAHY BLAH BLAH"
}


// 3. Use `printTVShowInfo` to console.log:
// - the title
// - the number of episodes
// - a pretty printed version of the review that looks like this: 
// "{review title} by {reviewer name}: {review content}"

function printTVShowInfo() {
    console.log(favoriteTVShow.title)
    console.log(favoriteTVShow.numberOfEpisodes)
    console.log( `${favoriteTVShow.review.title} by ${favoriteTVShow.review.reviewer}: ${favoriteTVShow.review.reviewContent}` )
}

// 4. Create a new object `car` with these attributes: `make`, `model`, `gallonsInTank`, `maxGallons`, `currentMiles`.

const car = {
    make: "Ford",
    model: "Taurus",
    gallonsInTank: 20,
    maxGallons: 20,
    currentMiles: 5000
}


// 5. Give the `car` a method `describeMakeAndModel` which returns the `make` and `model` for the car. For example: "Ford Taurus"

car.describeMakeAndModel = function () { 
    return `${this.make} ${this.model}` 
}


// 6. Give the `car` a method `fillTank` which sets the `gallonsInTank` to the `maxGallons`
// HINT: Inside your car's method, the keyword `this` refers to the car object itself

car.fillTank = function() {
    this.gallonsInTank = this.maxGallons
}


// 7. Give the `car` a method `goForADrive` which sets the `gallonsInTank` to 5 less than it was and also sets `currentMiles` to be 100 more than it was

car.goForADrive = function() {
    this.gallonsInTank -= 5
    this.currentMiles += 100
}


// 8. Give the `car` a method `rewindMiles` which sets `currentMiles` to 0
// the gauge for a car's mileage is called an odometer for those curious
// rewinding the odometer is illegal btw

car.rewindMiles = function() {
    this.currentMiles = 0
}