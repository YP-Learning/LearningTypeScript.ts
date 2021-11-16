let input: unknown;
let myAge: number;

input = "23"
input = 17

myAge = input; // will yield an error if input is `unknown` but will not if input is `any`
// thus will force the dev to convert input to number before assignment
