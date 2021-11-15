// type alias

type num = number; // creating an alias for a type


// custom types

type Processor = "type-1" | "type-2" | "type-3"; // union of literal type

type myObj = { 
    name: string;
    type: Processor;
    depth: [num, num];
}  // a new object type
