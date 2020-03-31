// improve this by caching
// function addTo80(n) {
//     console.log('long time');
//     return n + 80;
// }
// addTo80(4);
// addTo80(4);
// addTo80(4);

// improvement
// ideally cache shouldn't be global, use closures instead
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


// memoize 2
//learn to cache
// function addTo80(n) {
//     return n + 80;
// }
//
// addTo80(5)
//
// let cache = {};
// function memoizeAddTo80(n) {
//     if (n in cache) {
//         return cache[n];
//     } else {
//         console.log('long time');
//         const answer = n + 80;
//         cache[n] = answer;
//         return answer;
//     }
// }

// console.log(1, memoizeAddTo80(6))
// // console.log(cache)
// // console.log('-----------')
// console.log(2, memoizeAddTo80(6))

// let's make that better with no global scope. This is closure in javascript so.
function memoizeAddTo80(n) {
    let cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long time');
            const answer = n + 80;
            cache[n] = answer;
            return answer;
        }
    }
}

const memoized = memoizeAddTo80();
console.log(1, memoized(6))
// console.log(cache)
// console.log('-----------')
console.log(2, memoized(6))


