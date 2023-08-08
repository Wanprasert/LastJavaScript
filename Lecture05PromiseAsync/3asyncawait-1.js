function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    // logic
    console.log("Start!!");
    // try take of wait and compare
    await promiseTimeout(2000);
    console.log("Stop!!");
}

run();