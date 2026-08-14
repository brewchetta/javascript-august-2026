// Reference the Exercises In 06-additional-practice.md for instructions


// Exercise One - Triangles

function isItTriangle(angle1, angle2, angle3) {
    if (angle1 <= 0) return false
    if (angle2 <= 0) return false
    if (angle3 <= 0) return false

    const total = angle1 + angle2 + angle3
    return total === 180
}

// Exercise Two - Farenheit to Celsius

// (farenheit - 32) x 5/9
function farToCel(tempF) {
    if ( tempF < -459.67) {
        throw TypeError("farToCel only accepts farenheit arguments above absolute zero (-459.67)")
    }

    if ( typeof tempF !== "number" ) {
        throw TypeError("farToCel only accepts numbers as arguments")
    }

    const result = (tempF - 32) * 5 / 9
    return Math.round(result * 10) / 10
}

// Exercise Three - Cake

function isItCake( str ) {
    return str
    .toLowerCase()
    .replaceAll(" ", "")
    .includes("cake")
}

// Exercise Four - FizzBuzz



// Exercise Five - Geometry

function isItGeometry(...angles) {
    // check if some of the angles are less than / equal to zero
    if (angles.some(a => a <= 0)) return false
    
    // total the angles up for all
    const total = angles.reduce( (acc, angle) => acc + angle )

    // check total and number of angles to see what we have
    const numberOfAngles = angles.length

    if (total === 180 && numberOfAngles === 3) {
        return "triangle"
    }

    if (total === 360 && numberOfAngles === 4) {
        return "quadrilateral"
    }

    if (total === 540 && numberOfAngles === 5) {
        return "pentagon"
    }

    return false
}
