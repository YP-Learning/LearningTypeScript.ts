function f1(param: number): string {
    return param.toString();
}
// example of typing of a function

let fn: Function = f1;

let add: Function = (num1: number, num2: number) => num1 + num2;

function caller(func: Function, ...params) {
    return func(...params);
}

// Callbacks

// can specify return type and parameters of function callback too
function specificCaller(fn: (n1:number) => string, num:number) {
    console.log(fn(num));
}

specificCaller(f1, 12)
specificCaller(add, 12) // yields an error
