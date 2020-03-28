// primitive types are immutable, to change it it has to be completely removed

// passed by value
var c = [1,2,3];
var d = c;
d.push( 4 );

console.log(c);   // [1,2,3,4]
console.log(d);   // [1,2,3,4]

var a = 5;
var b = a;

console.log('copied a to b', b++);


// passed by reference
let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;  // here is the address in memory

obj2.password = 'changedpass';

console.log(obj1);
console.log(obj2);


var c = [1,2,3,4,5];
var d = c;
// // to not overwrite c
// var d = [].concat(c);
d.push(1234567);
console.log('the event on d also happened in c', c);


// let obj = {a: 'a', b: 'b', c: 'c'};
// let clone = Object.assign({}, obj);
// let clone2 = {...obj};
// obj.c = 5;
// console.log('obj', obj);
// console.log('clone', clone);
// console.log('clone2', clone2);


let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me'
    }
};
let clone = Object.assign({}, obj); // shallow clone
let clone2 = {...obj}; // shallow clone
let superClone = JSON.parse(JSON.stringify(obj)); // deep clone

obj.c.deep = 'hahaha';
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);


//exercise in the browser
// problem How would you compare two objects if they are pointing to a different location in memory but still have the same properties?
var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
var eq = user1 == user2;
console.log(eq); // gives false

// // solutions
// JSON.stringify(user1) === JSON.stringify(user2); //fast, only ordered property
//
// // lodash
// _.isEqual(object, other);



// passed by reference
const number = 100
const string = "Jay"
let obj1 = {
    value: "a"
}
let obj2 = {
    value: "b"
}
let obj3 = obj2;

function change(number, string, obj1, obj2) {
    number = number * 10;
    string = "Pete";
    obj1 = obj2;
    obj2.value = "c";
}

change(number, string, obj1, obj2);

//Guess the outputs here before you run the code:
console.log(number);
console.log(string);
console.log(obj1.value);
