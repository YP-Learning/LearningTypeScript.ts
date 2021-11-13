// numbers
let my_num = 123;
let my_num2:number = 23.34;

console.log(my_num);
console.log(`typeof my_num`, typeof my_num);
console.log(my_num2);
console.log(`typeof my_num2`, typeof my_num2);

// const type
const m = 23;
console.log(m);
console.log(`typeof m`, typeof m);

const mys = "type-1";

// for constants the type is the value itself inside TS, in JS its one of the core types...
const hello: "hello" = "hello";

// string
let str = "type string string";
console.log(str);
console.log(`typeof str`, typeof str);

// 'string', "string", `string`

// booleans
let truth = true;
console.log(truth);
console.log(`typeof truth`, typeof truth);

let lie: boolean = false;

// any
// any type accepts everything, weather it is bool, string, number, object etc...
let lol: any = false;
lol = "lol";
