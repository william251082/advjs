// Function Expression  --defined at runtime
var canada = function () {
    console.log('cold')
};

// Function Declaration  --defined at parse time
function india () {
    console.log('warm')
}

// Function/Invocation/Call/Execution
canada(); // invoke a function the it will create an execution context
india();


// arguments object  --only available execution context from the function is created
function marry(person1, person2) {
    console.log('arguments', arguments);
    console.log(`${person1} is now married to ${person2}`)
}

marry('john', 'sarah');
