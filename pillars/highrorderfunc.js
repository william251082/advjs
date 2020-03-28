// hof
// functions that can take functions as arguments
// or can return another functions

// normal func
function letJohnLogin() {
    let array = [];
    // you can add checks here for person.level
    for (let i = 0; i < 50000; i++) {
        array.push(i)
    }
    return 'Access granted'
}

letJohnLogin();



// func that accepts args
const giveAccessTo = (name) =>
    'Access Granted to ' + name;

function authenticate(person) {
    let array = [];
    // you can add checks here for person.level
    for (let i = 0; i < 50000; i++) {
        array.push(i)
    }
    return giveAccessTo(person.name)
}



//func that accepts func
function letPerson(person, fn) { // ++ We now tell the function what data to use when we call it not when we define it + tell it what to do.
    if (person.level === 'admin') {
        return fn(person)
    } else if (person.level === 'user') {
        return fn(person)
    }
}

function sing(person) {
    return 'la la la my name is ' + person.name
}

letPerson({level: 'user', name: 'Tim'}, sing);


// problem
// Make a generic multiplyBy HOF that can make other functions like: multiplyByTwo, multiplyByTen and so on...
// // You should be able to do:
// const multiplyByTwo = multiplyBy(2);
// multiplyByTwo(4); // 8

// solution
// Make a generic multiplyBy HOF that can make other functions like: multiplyByTwo, multiplyByTen and so on...
const multiplyBy = (num1) => {
    return function (num2) {
        return num1 * num2;
    }
};

const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4);
