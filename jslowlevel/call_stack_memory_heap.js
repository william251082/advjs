// Call stack + memory heap
const number = 610;  // allocate memory for number
const string = 'some text';  // allocate memory for a string
const human = { // allocate memory for an object... and it's values
  first: 'John',
  last: 'Doe'
};

function subtractTwo(num) {
    return num - 2;
}

function calculate() {
    const sumTotal = 4 + 5;
    return subtractTwo(sumTotal);
}

calculate(); // look in memory and run it
// calling the same function again will remove the previous and execute the new one
calculate();

// call stack operates in first in last out mode

