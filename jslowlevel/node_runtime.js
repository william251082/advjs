// node is server side platform based on async io that is non blocking
// uses js outside of the browser but creates an entire runtime
// any async task can be passed to worker threads in the background
// adds capabilities odf a browser and capabilities outside of the the browser

console.log(global); // instead of window in the browser


// problem
//fill array with 60000 elements
// const list = new Array(60000).join('1.1').split('.');
//
// function removeItemsFromList() {
//     var item = list.pop();
//
//     if (item) {
//         removeItemsFromList();
//     }
// }
//
// removeItemsFromList();
//
// console.log(list);

// solution
//fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();

    if (item) {
        setTimeout(removeItemsFromList, 0)
    }
}

removeItemsFromList();

console.log(list);
