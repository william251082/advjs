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


// function a() {
//     const b = new Error('What??');
//     return b;
// }
// console.log(a());
// console.log(a().stack);

// // catch the error
// // sunc errors
// function fail() {
//     try {
//         // // this will stop the program
//         // throw new Error('oopsie!!!!')
//         // this will go to the catch()
//         // consoe.log('this works');
//         console.log('this works');
//         throw new Error('oopsie!!!!')
//     } catch (e) {
//         // handling the error internally
//         console.log('we have made an oopsie', e)
//     } finally {
//         console.log('still good')
//         return'returning fail';
//     }
//     // not gonna be ran
//     console.log('!!!!!!')
// }
// console.log(fail());

// nest try
try {
    // async codes don't work
    try {
        something();
    } catch (e) {
        throw new Error(e)
    }
} catch (e) {
    console.log('got it', e)
}
