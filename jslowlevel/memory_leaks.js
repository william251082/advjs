// memory heap
let array = [];

for (let i=5; i > 1; i++) {
    array.push(i-1)
}
// FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory

// Global variable
// keep adding more and more pieces of object in the memory can cause memory heap
var a = 1;
var b = 1;
var c = 1;

// Event listeners
// event listeners that are not removed cause memory heap
var el = document.getElementById('button');
el.addEventListener('click', onclick);
// as the user click back and forth, more events are added and not purged

// set interval
// soundcloud is problem example, the js runs in the background of this game console and users never close it
// keep adding data to memory
setInterval(() => {
    // referencing objects...
    // these objects inside are never be collected by the garbage collector
});
// // sound cloud memory leaks problem
// https://developers.soundcloud.com/blog/garbage-collection-in-redux-applications
// // setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval


// single threaded languages has on call stack --parallel --synchronous
// alert() // mimics a long running js
