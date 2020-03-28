// types:

// primitive --data that only represents a single value, can't be broken apart
console.log(typeof 5);
console.log(typeof true);
console.log(typeof 'To be or not to be');
console.log(typeof undefined); // absence of a definition,
// used as a default value when js engine initializes the variable,
// void in function return, missing properties of an object,
// there's a variable but there's nothing there
console.log(typeof null); //absence of a value,
console.log(typeof Symbol('just me')); // the arg is useful for identifying an object,
// useful the object property to be unique

// non primitive --doesn't contain the actual value directly
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});

// functions are just objects
function a() { return 5; }
a.hi = 'rfvfsdbsdff';
console.log(a.hi);

// obj1 doesn't contain the value directly, it has the reference somewhere in the memory that the object is held
const obj1 = {
    a: 'Tom'
};


// js built in objects, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects


// primitive types have object wrappers
true.toString();
// it silently creates a wrapper object, Boolean(true).toString()
