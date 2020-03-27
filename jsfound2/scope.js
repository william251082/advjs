// func scope vs block scope

// on js this is possible
if (5 > 4) {
    var secret = '12345';
}

console.log(secret);


// func scope
function a() {
    var secret2 = '12345';
}

console.log(secret2); // RE: not defined


// block scope in js can be achieved using let and const
if (5 > 4) {
    const secret = '12345';
}

console.log(secret);

