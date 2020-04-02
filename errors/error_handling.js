// // during runtime, throw will stop the program, the execution of the current function will stop
// // and control will be pass on the next part of the call stack
// throw 'string';
// throw true;
// throw Error;
// throw new Error();
//
// const myError = new Error('oopsie');
// myError.name;
// myError.message;
// myError.stack;


function a() {
    const b = new Error('What??');
    return b;
}
console.log(a());
console.log(a().stack);

// catch the error
