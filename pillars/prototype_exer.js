//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

// new Date('1900-10-10').lastYear();
//'1899'


//#Bonus
// Mofify .map() to print 'map_emoji🗺' at the end of each item.
// console.log([1,2,3].map());
//1🗺map_emoji, 2map_emoji🗺, 3🗺map_emoji


// 1
Date.prototype.lastYear = function () {
    // global this
    return this.getFullYear() - 1;
};

// Date.prototype.lastYear = () => {
//     // lexically scope this on arrow function
//     return this.getFullYear() - 1;
// };

const last_year = new Date('1900-10-01').lastYear();
console.log(Date);
console.log(Date.prototype);
console.log(last_year);


// 2
// never modify core functions in the wild
Array.prototype.map = function () {
    let new_arr = [];
    for (let i = 0; i < this.length; i++) {
        new_arr.push(this[i] + ' map_emoji')
    }
    return new_arr;
};

console.log([1,2,3].map());


// problem create your own call, apply and bind
Function.prototype.bind = function(){};

// solution
Function.prototype.bind = function(whoIsCallingMe) {
    const self = this;
    return function() {
        console.log('overwritten bind');
        return self.apply(whoIsCallingMe, arguments);
    };
};


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

// console.log('1', archer);
// // call takes params
// wizard.heal.call(archer, 50, 30);
// // apply takes array
// wizard.heal.apply(archer, [50, 30]);
// console.log('2', archer);

// bind returns but not run a new function
// bind can store the this keyword
console.log('1', archer);
const healArcher = wizard.heal.bind(archer, 50, 30);
healArcher();
console.log('2', archer);




// Scheme + Java
// functional vs object oriented
// Scheme is the first language to have closures
// Java object oriented, beautiful code
