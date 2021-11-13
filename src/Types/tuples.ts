// tuples are arrays of exact length and type 
let myTuple: [number, number, string] = [1, 7, "Yes?"];
myTuple[1] = "no?"; // not valid
myTuple[1] = 7; // works
myTuple = [1, "no?",] // errors out
myTuple = [7, 8, "ok"]; // no errors
myTuple.push(2); // uncaught ��