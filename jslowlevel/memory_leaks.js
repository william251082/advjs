// // memory heap
// let array = [];
//
// for (let i=5; i > 1; i++) {
//     array.push(i-1)
// }
// FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory

// Global variable
// keep adding more and more pieces of object in the memory can cause memory heap
var a = 1;
var b = 1;
var c = 1;

// Event listeners
// event listeners that are not removed cause memory heap
// var el = document.getElementById('button');
// el.addEventListener('click', onclick);
// as the user click back and forth, more events are added and not purged

// set interval
// soundcloud is problem example, the js runs in the background of this game console and users never close it
// keep adding data to memory
// setInterval(() => {
//     // referencing objects...
//     // these objects inside are never be collected by the garbage collector
// });
// // sound cloud memory leaks problem
// https://developers.soundcloud.com/blog/garbage-collection-in-redux-applications
// // setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval


// single threaded languages has on call stack --parallel --synchronous
// alert() // mimics a long running js


// http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBiYXonKTsNCn0NCg0KZnVuY3Rpb24gYmF6KCkgew0KICAgIHNldFRpbWVvdXQocHJpbnRIZWxsbywgMzAwMCk7DQp9DQoNCmZ1bmN0aW9uIGJhcigpIHsNCiAgICBiYXooKTsNCn0NCg0KZnVuY3Rpb24gZm9vKCkgew0KICAgIGJhcigpOw0KfQ0KDQpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// Web API in the browser
// window
// wb apis are async
// 1. if there's a call that's passed on the call stack that's part of js, it will pass it to Web api.
// 2. Web api is consists of --DOM, fetch(), setTimeout()
// 3. After web api is done with it, it will pass the data to the event loop
// 4. Event loop has a queue where the first data is passed to the call stack, as soon as the call stack is free.
// 5. Event loop is the one constantly checking if the call stack is empty

//added to the stack
console.log('1');
// remove from the stack

// get removed from the call stack and passed to web api
setTimeout(() => {console.log('2')}, -100);
// sent to the event loop
// waited 'til the call stack is empty

//added to the stack
console.log('3');
// remove from the stack
