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
getHeavyDuty(700);
getHeavyDuty(800);
function heavyDuty2() {
    const bigArray = new Array(7000).fill('smiley');
    console.log('created again!');
    return function (index) {
        return bigArray[index]
    }
}

console.log(getHeavyDuty());
// Encapsulation
