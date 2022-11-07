const promise = new Promise(function(resolvePromise) {
    resolvePromise(['Ana', 'Bia', 'Carlos', 'Daniel']);
});

const firstElement = array => array[0];
const firstLetter = string => string[0];
const toLowerCase = letter => letter.toLowerCase();

promise
    .then(firstElement)
    .then(firstLetter)
    .then(firstLetter)
    .then(toLowerCase)
    .then(console.log);