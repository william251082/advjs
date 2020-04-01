// async enables js to do some work in the background
// requests that take a long time don't block the main thread
// where does web api has the computing power to run this
// fetch, setTimeout, look at db, read fs etc. they are running on their own separate background thread
// node js is able to do this with worker threads

// spawn a new web worker
// web worker --js program running on a different thread
// just like a browser creates a new thread, when new window is opened
// var worker = new Worker('worker.js');
// worker.postMessage('Hello');

const {spawn} = require('child_process');

spawn('git', ['stuff']);
