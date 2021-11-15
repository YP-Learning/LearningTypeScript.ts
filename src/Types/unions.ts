// unions are combinations of different types, the variable can be of any one type of them.

let myVar: number | boolean = false;  // unionof number and boolean

myVar = 2;

// does not error out when assigning both the types...

let var2: string | number | boolean = false;

// the types are separated using `|` and there can be as many types you want.
