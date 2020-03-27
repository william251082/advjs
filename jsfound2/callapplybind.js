// call(), apply(), --useful for borrowing methods from an object
// bind() --useful to store functions that can later be called with a certain context(this)
function a() {
    console.log('hi')
}

// all same thing
a();
a.call();
a.apply();

const wizard = {
    name: 'Merlin',
    health: 50,
    heal(num1, num2) {
        return this.health += num1 + num2;
    }
};

const archer = {
    name: 'Robin',
    health: 30
};

console.log('1', archer);
// call takes params
wizard.heal.call(archer, 50, 30);
// apply takes array
wizard.heal.apply(archer, [50, 30]);
console.log('2', archer);

// bind returns but not run a new function
// bind can store the this keyword
console.log('1', archer);
const healArcher = wizard.heal.bind(archer, 50, 30);
healArcher();
console.log('2', archer);


const array = [1,2,3];

// in this case, the 'this' keyword doesn't matter!
function getMaxNumber(arr){
    return Math.max.apply(null, arr);
}

console.log(getMaxNumber(array));
