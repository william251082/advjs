
// function findName() { var b = 'b'; return printName() }
// function printName() { var c = 'c'; return 'John Doe' }
// function sayMyName() { var a = 'a'; return findName() }
//
// sayMyName();


// var x = 'x';
// function findName() { console.log(x); var b = 'b'; return printName() }
// function printName() { var c = 'c'; return 'John Doe' }
// function sayMyName() { var a = 'a'; return findName() }
//
// sayMyName();


function sayMyName() {
    var a = 'a';
    return function findName() {
        var b = 'b';
        // console.log(c); // reference error: won't be defined not undefined type
        return function printName() {
            var c = 'c';
            // func lex env
            console.log(c);
            console.log(b);
            console.log(a);
            return 'John Doe'
        }
    }
}

// eval() and with can change how scope works in js, it will break the lexical scope

console.log(sayMyName()); // [Function: findName]
console.log(sayMyName()()); // [Function: printName]
console.log(sayMyName()()()); // 'John Doe'



