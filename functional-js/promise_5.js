const worksOrNot = (value, errorChance) => {
    return new Promise((resolve, reject) => {
        const chance = Math.floor(Math.random() * 100);
        if (chance < errorChance)
            reject('Promise Error...');
        else 
            resolve(value);
    })
}


worksOrNot('testing...', 50)
    .then(console.log)
    .catch(console.log);