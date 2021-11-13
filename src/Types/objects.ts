let myObj = {
    name: "yash",
    age: 30
}

// typescript understands the type of this object to be 
// {name: string, age: number}

type myType = {
    name: string
    isStudent: boolean
}

let myObj2: myType = {
    name: 'Student',
    isStudent: false
}

// that works
// no need to define the type, but defined type so that it can be used in next example too

let myObj3: myType = {
    name: 'StudentLOL',
    isStudent: true,
    age: 13  // error
}

// error when adding a new property.

let myObj3: myType = { // error
    name: 'Student'
}

// error that property `isStudent` is missing
