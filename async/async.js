setTimeout(()=>{console.log('1', 'is the loneliest number')}, 0);
setTimeout(()=>{console.log('2', 'can be as bad as one')}, 10);

//2
Promise.resolve('hi').then((data)=> console.log('2', data));

//3
console.log('3','is a crowd');


// what is program?
// allocate memory
// parse and execute --read and run commands
// jsengine v8 --consist of memory heap and call stack
// memory leak --unused memory in memory heap --that's why global vars are bad
const a = 1;
const b = 1;
const c = 1;
// call stack --
console.log('1');
console.log('2');
console.log('3');

// synchronous
// js is a single threaded language the can be non-blocking
// single threaded --only one call stack --multi threaded has -deadlocked

//async --in order to not block the synchronous thread
// goes to webapi --consists of DOM, AJAX, Timeout
element.addEventListener('click', () => {
    console.log('click');
});
