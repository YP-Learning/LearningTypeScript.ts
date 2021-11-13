// lets have a look at arrays in TS
let myArray: any[]; // array of any type, like list in python
myArray = [1, "hello", false];
console.log("array: any[] ", myArray);

let numArray: number[] = [1, 3, 4, 5, 6, 7,] // array of numbers, will give error when different type entered
console.log(`numArray`, numArray);

let myArr = [1, 3, 5]; // automatically recognized that the array is of numbers
let list = [1, "hello", 66]; // recognized type is (number | string)
let myArray3 = [1, "hello", false]; // recognized type is (number | string | boolean)
