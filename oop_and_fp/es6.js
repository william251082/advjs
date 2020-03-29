// // class is blueprint of wht you want to create
// // underneath the hood calls is still using prototype
// class Elf {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }
//     // constructor gets ran everything the new keyword is used
//     // attack is shared among other instances
//     // that would take up too much memory space
//     // one function in one location
//     attack() {
//         return 'attack with ' + this.weapon
//     }
// }
//
// const fiona = new Elf('Fiona', 'ninja stars');
// console.log(fiona instanceof Elf); //
//
// const ben = new Elf('Ben', 'bow');
// console.log(fiona.attack());


// new binding this
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('John', 55);


// implicit binding
const person = {
    name: 'Karen',
    age: 40,
    hi() {
        console.log('hi' + this.name)
    }
};


// // explicit binding
// const person3 = {
//   name: 'Karen',
//   age: 40,
//   hi: function () {
//       console.log('hi' + this.setTimeout)
//       // explicitly tell this how to bind
//   }.bind(window)
// };
//
// person3.hi();  // hifunction setTimeout() { [native code] }

// arrow function --lexical scoping -- where ever you write the function, that where it binds you

const person4 = {
    name: 'Karen',
    age: 40,
    hi: function () {
        var inner = () => {
            // without arrow object, this will be global
            console.log('hi ' + this.name)
        };
        return inner();
    }
};

person4.hi();
