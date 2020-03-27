// Function Expression  --defined at runtime
var canada = function () {
    console.log('cold')
};

// Function Declaration  --defined at parse time
function india () {
    console.log(arguments);  //undefined --there's still an arguments object inside the execution context
    console.log('warm')
}

// Function/Invocation/Call/Execution
canada(); // invoke a function the it will create an execution context
india();


// // arguments object  --only available execution context from the function is created
// function marry(person1, person2) {
//     // there are things that you could to to arguments that make the compiler less able to optimize the code
//     console.log('arguments', arguments);
//     //convert the arguments to array instead
//     console.log('arguments converted to array', Array.from(arguments));
//     console.log(`${person1} is now married to ${person2}`)
// }
//
// marry('john', 'sarah');

// another way spread operator
function marry(...args) {
    console.log('arguments', args);
    console.log('arguments converted to array', Array.from(arguments));
    console.log(`${args[0]} is now married to ${args[1]}`)
}

marry('john', 'sarah');
