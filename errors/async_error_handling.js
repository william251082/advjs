// Promise.resolve('asyncfail')
//     .then(response => {
//         // console.log(response);
//         // without catch(), this will be a silent fail on the code, after throw it will ook for the catch()
//         // throw new Error('#1 fail');
//         // return response;
//         // this will be a separate asycn code and will still return 5 regard less of what happen to the parent Promise
//         // this Promise is not handled properly without cath(), node will throw an error
//         // always put catch() on each Promise
//         Promise.resolve().then(() => {
//             throw new Error('#3 fail')
//         });
//         return 5;
//     })
//     // there's no response here, its undefined
//     .then(response => {
//         console.log(response);
//     })
//     // .catch(err => {
//     //     // console.log(err)
//     //     throw new Error('#2')
//     // })
//     .then(response => {
//         console.log(response.message)
//     })
//     .catch(err => {
//         console.log('final error', err)
//     });


// // fix
// Promise.resolve('asyncfail')
//     .then(response => {
//         Promise.resolve().then(() => {
//             throw new Error('#3 fail')
//         }).catch(console.log);
//         return 5;
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         throw new Error('#2')
//     })
//     .catch(err => {
//         console.log('final error', err)
//     });


// since async await looks like synchronous
// it can be handled by try catch
// be sure to always wrap Promises in a try catch block
// console.log((async function() {
//     try {
//         await Promise.resolve('oopsie #1');
//         await Promise.reject('oopsie #2');
//     } catch (e) {
//         console.log(e)
//     }
//     console.log('is this still good?')
// })());



// problem
console.log((function () {
    try {
        throw new Error();
    } catch (err) {
        var err = 5;
        var boo = 10;
        console.log(err);
    }
    //Guess what the output is here:
    console.log(err);
    console.log(boo);
})());
// 5
// undefined
// 10
// undefined

// extending errors
// build fully customizable Errors
class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AuthenticationError';
        this.favouriteSnack = 'grapes';
    }
}

class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DatabaseError';
        this.favouriteSnack = 'grapes';
    }
}

class PermissionError extends Error {
    constructor(message) {
        super(message);
        this.name = 'PermissionError';
        this.favouriteSnack = 'grapes';
    }
}


// throw new AuthenticationError('ooopsie');
const a = new AuthenticationError('ooopsie');
console.log(a.message);
