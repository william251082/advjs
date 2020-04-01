// async await


// normal promise
movePlayer(100, 'Left')
    .then(() => movePlayer(100, 'Left'))
    .then(() => movePlayer(100, 'Left'))
    .then(() => movePlayer(100, 'Left'))
    .then(() => movePlayer(100, 'Left'));


// async await
async function playerStart() {
    const firstMove = await movePlayer(100, 'Left'); // pause
    await movePlayer(400, 'Left'); //pause
    await movePlayer(10, 'Right'); //pause
    await movePlayer(330, 'Left'); //pause
}


// normal promise
fetch(url)
    .then(resp => resp.json())
    .then(results => {
        console.log(results[0]);
        console.log(results[1]);
        console.log(results[2]);
    })
    .catch(() => console.log('error'));

// async await
// paste on the browser
async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}
fetchUser();


// another example
// paste on the browser console
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

// // normal
// Promise.all(urls.map(url => {
//     return fetch(url)
//         .then(resp => resp.json())
//         .then(results => {
//             console.log(results[0]);
//             console.log(results[1]);
//             console.log(results[2]);
//         })
//         .catch(() => console.log('error'))
// }));

// async await
const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => fetch(url)
            .then(resp => resp.json())));
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (e) {
        console.log('oops', e)
    }

};

getData();
