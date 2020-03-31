// improve this by caching
// function addTo80(n) {
//     console.log('long time');
//     return n + 80;
// }
// addTo80(4);
// addTo80(4);
// addTo80(4);

// improvement
let cache = {}; // {5: 85}
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        cache[n] = n + 80
    }
    return n + 80 + `${cache}`;
}
console.log(memoizedAddTo80(4));
console.log(memoizedAddTo80(4));
console.log(memoizedAddTo80(4));
console.log(memoizedAddTo80(4));
console.log(memoizedAddTo80(4));

// memoization --caching the return value of a function based on its parameters

