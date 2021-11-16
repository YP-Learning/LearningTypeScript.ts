function printf(...args) {
    console.log(...args);
}

// ts recognized the function return type to be `void` (completely empty)

// void vs undefined
// a function can return `any` or `void`
// to make a function return undefined in TS `return;` statement is necessary,
// in JS void is coverted to undefined itself.

console.log(typeof printf("hello", "world"))
