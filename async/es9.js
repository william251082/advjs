// Object spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 9
};

// const {tiger, ...rest} = animals;
// console.log(tiger);
// console.log(rest);

// es6
const array = [1,2,3,4,5];
function sum(a,b,c,d,e) {
    return a+b+c+d+e;
}

console.log(sum(...array));



// es9
function objectSpread(p1,p2,p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}
const {tiger, lion, ...rest} = animals;
console.log(objectSpread(tiger, lion, rest));



// es9 -async
// finally()
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url => {
    return fetch(url)
        .then(resp => resp.json())
        .then(results => {
            // throw will skip the code after then execute catch()
            throw Error;
            console.log(results[0]);
            console.log(results[1]);
            console.log(results[2]);
        })
        .catch(() => console.log('error'))
        .finally(data => console.log('extra', data))
}));

getData();



// es9 -async
// for await of // loop over promise iterable
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url => {
    return fetch(url)
        .then(resp => resp.json())
        .then(results => {
            // throw will skip the code after then execute catch()
            throw Error;
            console.log(results[0]);
            console.log(results[1]);
            console.log(results[2]);
        })
        .catch(() => console.log('error'))
        .finally(data => console.log('extra', data))
}));

getData();


const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data)
    }
};

getData2();

const loopThroughUrls = url => {
    for (url of urls) {
        console.log(url)
    }
};
