function a() {
    let grandpa = 'grandpa';
    return function b() {
        let father = 'father';
        let random = 234543; // vars that aren't referenced are thrown away
        return function c() {
            let son = 'son';
            return `${grandpa} > ${father} > ${son}`
        }
    }
}
console.log(a()()());
// function c remembers the vars in b and a because the garbase collector saw it as closure and put it inside the memory heap

// closures are lexical scoping


// function boo(string) {
//     return function (name) {
//         return function (name2) {
//             console.log(`${string} ${name} ${name2}`)
//         }
//     }
// }

// const boo = (string) => (name) => (name2) =>  console.log(`${string} ${name} ${name2}`);
// boo('hi')('john')('doe');
//
// const booString = boo('hi');
// // 5 years passed
// const booStringName = booString();



// exercise
function callMeMaybe() {
    // const callMe = 'hi! hey!';
    setTimeout(function () {
        console.log(callMe);
    }, 4000);
    // no hoisting in async, this var will still exist
    const callMe = 'hi! hey!';
}
callMeMaybe();
