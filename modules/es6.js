import module1 from 'module1';
import module2 from 'module2';

const harry = 'potter';
const voldemort = 'no name';

function jump() {
    // won't pollute global namespace
    console.log('jump')
}

export function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}

return {fight: fight};


// on index.html
// <script type="module">
// import {fight, jump} from './es6.js';
// export default
// import fight, {jump} from './es6.js';
// npm install live-server
// </script>
