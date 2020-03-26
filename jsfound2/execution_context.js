// https://coggle.it/diagram/XE3ZoVj-rtA5hcxj/t/advanced-javascript

// function printName() { return 'John Doe' }
// function findName() { return printName() }
// function sayMyName() { return findName() }
//
// sayMyName();

// global === this
// window === this
// adding property window.a

// Lexical Environment
function printName() { return 'John Doe' }
function findName() {
    function a() {

    }
    return printName()
}
function sayMyName() { return findName() }

sayMyName();  //window lexical env
findName.a(); // findName lexical env
