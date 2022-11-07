const generateNumbersBetween = (min, max) => {
    if (min > max)
        [max, min] = [min, max];
    
    return new Promise(resolve => {
        const randomNumber = parseInt(Math.random() * (max - min + 1)) + min;
        resolve(randomNumber);
    });
}

generateNumbersBetween(10, 20)
    .then(console.log)