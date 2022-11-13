const path = require('path');
const fn = require('./functions');

const subtitlesPath = path.join(__dirname, '..', 'data', 'subtitles');

const promise = fn.readDir(subtitlesPath);

const simbols = [
    '.', '?', '-', ',', '!', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')',
];

promise
    .then(fn.elementsEndingWith('.srt'))
    .then(fn.readFiles)
    .then(fn.mergeElements)
    .then(fn.splitTextBy('\n'))
    .then(fn.removeElementsEmptyLine)
    .then(fn.removeElementsIfIncludes('-->'))
    .then(fn.removeElementsIfIsNumber)
    .then(fn.removeSimbols(simbols))
    .then(fn.mergeElements)
    .then(fn.splitTextBy(' '))
    .then(fn.removeElementsEmptyLine)
    .then(fn.removeElementsIfIsNumber)
    .then(fn.agroupWords)
    .then(console.log);