const generateNumbersBetween = (min, max, time) => {
    if (min > max)
        [max, min] = [min, max];
    
    return new Promise(resolve => {
        setTimeout(() => {
            const randomNumber = parseInt(Math.random() * (max - min + 1)) + min;
            resolve(randomNumber);
        }, time);
    });
}

const generateRandomNumbers = () => {
    return Promise.all([
        generateNumbersBetween(1, 60, 4000),
        generateNumbersBetween(1, 60, 1000),
        generateNumbersBetween(1, 60, 400),
        generateNumbersBetween(1, 60, 500),
        generateNumbersBetween(1, 60, 2000),
    ])
}

console.time('promise');

generateRandomNumbers()
    .then(console.log)
    .then(() => console.timeEnd('promise'));