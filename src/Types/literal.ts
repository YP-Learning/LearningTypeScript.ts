// Literal types

const myVar1: 90 = 90;
// this 90 is a literal type, it cannot be anything else than 90

let myVar: 90 = 90; // same as above

// myVar = 91; // results in an error

// combining literal using union type

let myVar2: "option 1" | "option 2" | "option 3" | "option 4";

// now this has become somthing which can be used
// for example say in a function you want to ask if the value should be processed in one type or the other, in that case you can use literal types with union.
