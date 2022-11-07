const waitFor = seconds => {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Running promise');
            resolve('Run boy run...')
        }, seconds);
    });
}

waitFor(3000)
    .then(console.log)