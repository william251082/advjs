// function currying
function multiply(a, b) { return a*b; }
console.log(multiply(2, 2));

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(2));


// this keyword
var b = {
    name: 'jay',
    say() {console.log(this)}
};

var c = {
    name: 'jay',
    say() {return function() {console.log(this)}}
};

var d = {
    name: 'jay',
    say() {return () => console.log(this)}
};

console.log(b.say());
console.log(c.say());
console.log(c.say()());
console.log(d.say()());


//problem
const character = {
    name: 'Simon',
    getCharacter() {
        return this.name;
    }
};
const giveMeTheCharacterNOW = character.getCharacter;

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't


// solution
// const character = {
//     name: 'Simon',
//     getCharacter() {
//         return this.name;
//     }
// };
// const giveMeTheCharacterNOW = character.getCharacter.bind(character);
//
//
// console.log('?', giveMeTheCharacterNOW());


// context vs scope
// context is object based, what's the value of this-keyword, which is the reference of that currently executing code
// How the func is invoked with the value of this-keyword


// scope is function based
// scope is what is the variable access of a function, when it is invoked,
// what is in the var env
// refers to the visibility of the variable
