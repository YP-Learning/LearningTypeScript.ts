function f1(param: number): string {
    return param.toString();
}
// example of typing of a function

let fn: Function = f1;

let add: Function = (num1: number, num2: number) => num1 + num2;

function caller(func: Function, ...params) {
    return func(...params);
}
