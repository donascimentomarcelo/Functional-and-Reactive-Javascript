const generateNumbersBetween = (min, max, forbiddenNumbers) => {
    if (min > max)
        [max, min] = [min, max];
    
    return new Promise((resolve, reject) => {
        const randomNumber = parseInt(Math.random() * (max - min + 1)) + min;

        if (forbiddenNumbers.includes(randomNumber))
            reject('Repetitive number');
        else
            resolve(randomNumber);
    });
}

const betNumber = async qtdNumber => {
    try {
        const numbers = [];
        for (let _ of Array(qtdNumber).fill())
            numbers.push(await generateNumbersBetween(1, 60, numbers));
        return numbers;
    } catch (e) {
        throw 'Error generating bet numbers';
    }
}

betNumber(15)
    .then(console.log)
    .catch(console.log);