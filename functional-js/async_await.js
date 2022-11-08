const waitFor = time => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Running promise...')
            resolve();
        }, time);
    });
}

const run = async () => {
    await waitFor(1500);
    console.log('Async/Await 1...');
    await waitFor(1500);
    console.log('Async/Await 2...');
    await waitFor(1500);
    console.log('Async/Await 3...');
}


run();