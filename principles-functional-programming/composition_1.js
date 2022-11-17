function composition(...fns) {
    return (value) =>
        fns.reduce((acc, fn) => {
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
    return text.split('').join(' ');
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

const result = runFn('stop');
const result1 = runFnWithoutMakingSlow('watch out for the hole');

console.log(result);
console.log(result1);