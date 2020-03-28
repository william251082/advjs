// invoking function
function one() { return 1; }
one();


// as a method
// var obj = { two: function () { return 2; }};
// ecma
var obj = { two() { return 2; }};
obj.two();


// call()
function three() { return 1; }
three.call();


// function constructor  --creates functions
const four = new Function('num', 'return num');
four(4);


// adding property to function
function woohoo() { console.log('woohoo')}
woohoo().yell  = 'ahhhh';
// under the hood
// js creates a special type of object
const specialObj = {
    yell: 'ahhhhhhh',
    name: 'woohooo',
    (): console.log('woohoo');
};

// functions are just objects, that means it can be passed around
