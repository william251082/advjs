// 3 ways to have promises
// parallel
// sequencial
// race

const promisify = (item, delay) =>
    new Promise((resolve) =>
        setTimeout(() =>
            resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

// run all promises in parallel/ at the same time
async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `parallel is done: ${output1} ${output2} ${output3}`
}

// who ever finishes first will be outputed, the losers are ignored
async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `race is done: ${output1}`;
}

// has to wait for each one and run sequentially
async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)
