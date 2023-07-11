const start = Date.now();

console.log('starting timer...');
//

setTimeout(() => {
    const millis = Date.now() - start;

    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
    // expected output: seconds elapsed = 2
}, 2000);