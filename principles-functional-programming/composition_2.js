function composition(...fns) {
    return (value) =>
        fns.reduce(async (acc, fn) => {
            if (Promise.resolve(acc) === acc)
                return fn(await acc);
            return fn(acc);
        }, value);
}

function scream(text) {
    return text.toUpperCase();
}

function highlight(text) {
    return `${text}!!!`;
}

function makeSlow(text) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(text.split('').join(' '));
        }, 3000);
    });
}

const runFn = composition(
    scream,
    highlight,
    makeSlow
);

const runFnWithoutMakingSlow = composition(
    scream,
    highlight,
);

runFn('stop')
    .then(console.log);

runFnWithoutMakingSlow('watch out for the hole')
    .then(console.log);