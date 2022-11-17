const nestedLetters = [
    ['H','e','l','l','o'],
    [' '],
    ['w',['o',['r']],'l','d'],
    ['!','!','!'],
];

const letters = nestedLetters.flat(Infinity);
// remove os []
// nestedLetters.flat().flat() ou nestedLetters.flat(2)

const result = letters
    .flatMap(letter => letter.toUpperCase())
    .reduce((a,b) => a + b);

console.log(result);