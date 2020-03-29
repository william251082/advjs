// Memory efficient
function heavyDuty(index) {
    const bigArray = new Array(7000).fill('smiley');
    console.log('created!');
    console.log(bigArray[index]);
    console.log('destroyed!');
}
heavyDuty(3245);
heavyDuty(3245);
heavyDuty(3245);

console.log('----------------');

const getHeavyDuty = heavyDuty2();
getHeavyDuty(688);
getHeavyDuty(688);
getHeavyDuty(688);
function heavyDuty2() {
    const bigArray = new Array(7000).fill('smiley');
    console.log('created again!');
    return function (index) {
        return bigArray[index]
    }
}

console.log(getHeavyDuty());


// // Encapsulation
// const makeNuclearButton = () => {
//     let timeWithoutDestruction = 0;
//     const passTime = () => timeWithoutDestruction++;
//     const totalPeaceTime = () => timeWithoutDestruction;
//     const launch = () => {
//         timeWithoutDestruction = -1;
//         return 'boom';
//     };
//     setInterval(passTime, 1000);
//     return {
//         // launch: launch,  --encapsulation, to be able to not expose some sensitive data
//         totalPeaceTime: totalPeaceTime
//     }
// };
//
// const ohno = makeNuclearButton();
//
// console.log(ohno.totalPeaceTime());
// console.log(ohno.launch());



// exercise
// let view;
// function initialize() {
//     view = 'view instance';
//     console.log('view has been set!');
// }
//
// initialize();
// initialize();
// initialize();
// console.log(view);

// // solution
// let view;
// function initialize() {
//     view = 'view instance';
//     return function () {
//         console.log('view has been set!');
//     }
// }
//
// initialize();
// initialize();
// initialize()();
// console.log(view);


// // solution
// let view;
// function initialize() {
//     let called = 0;
//     return function() {
//         if (called > 0) { return; }
//         view = 'view instance';
//         called++;
//         console.log('view has been set!');
//     }
// }
//
// const startOnce = initialize();
// startOnce();
// initialize();
// console.log(view);
// // another solution, use encapsulation so initialize() can't be called anymore



// exercise
// const array = [1,2,3,4];
// for (var i=0; i < array.length; i++) {
//     setTimeout(function () {
//         console.log('I am at index ' + i)
//     }, 3000)
// }
// I am at index 4
// I am at index 4
// I am at index 4
// I am at index 4


// solution
// change the var to let, in var, the loop was already finished when the data from web api returns


// another solution closures
const array = [1,2,3,4];
for (var i=0; i < array.length; i++) {
    (function(i) {
        setTimeout(function () {
            console.log('I am at index ' + i)
        }, 3000)
    })(i)
}


