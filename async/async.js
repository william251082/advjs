// setTimeout(()=>{console.log('1', 'is the loneliest number')}, 0);
// setTimeout(()=>{console.log('2', 'can be as bad as one')}, 10);
//
// //2
// Promise.resolve('hi').then((data)=> console.log('2', data));
//
// //3
// console.log('3','is a crowd');
//
//
// // what is program?
// // allocate memory
// // parse and execute --read and run commands
// // jsengine v8 --consist of memory heap and call stack
// // memory leak --unused memory in memory heap --that's why global vars are bad
// const a = 1;
// const b = 1;
// const c = 1;
// // call stack --
// console.log('1');
// console.log('2');
// console.log('3');
//
// // synchronous
// // js is a single threaded language the can be non-blocking
// // single threaded --only one call stack --multi threaded has -deadlocked
//
// //async --in order to not block the synchronous thread
// // goes to webapi --consists of DOM, AJAX, Timeout
// element.addEventListener('click', () => {
//     console.log('click');
// });

// Promises
// instead of callback
// an object that may produce some value in some time in the future
// fulfilled, rejected or pending

// // callback pyramid of doom
// movePlayer(100, 'Left', function () {
//     movePlayer(100, 'Left', function () {
//         movePlayer(100, 'Left', function () {
//             movePlayer(100, 'Left', function () {
//
//             })
//         })
//     })
// });
//
// // with a promise
// movePlayer(100, 'Left')
//     .then(() => movePlayer(100, 'Left'))
//     .then(() => movePlayer(100, 'Left'))
//     .then(() => movePlayer(100, 'Left'))
//     .then(() => movePlayer(100, 'Left'));


const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff works');
    } else {
        reject('Error')
    }
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII')
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'HOOO')
});


const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'HUUUU')
});


promise
    .then(result => { throw Error; return result + '!' })
    .then(result2 => { console.log(result2) })
    .catch(() => console.log(('error')))
    .then(results3 => {
        console.log(results3 + '!');
    });

// wait until all the promise have been resolved
Promise.all([promise, promise2,promise3, promise4])
    .then(value => { console.log(value)} );


// paste on the browser console
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url => {
    // fetch() returns a promises
    return fetch(url)
        .then(resp => resp.json())
        .then(results => {
            console.log(results[0]);
            console.log(results[1]);
            console.log(results[2]);
        })
        .catch(() => console.log('error'))
}));
