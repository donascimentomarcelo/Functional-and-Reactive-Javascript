const path = require('path');
const fn = require('./functions');

const subtitlesPath = path.join(__dirname, '..', 'data', 'subtitles');

const simbols = [
    '.', '?', '-', ',', '!', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')',
];

const mostUsedWords = fn.composition(
    fn.readDir,
    fn.elementsEndingWith('.srt'),
    fn.readFiles,
    fn.mergeElements,
    fn.splitTextBy('\n'),
    fn.removeElementsEmptyLine,
    fn.removeElementsIfIncludes('-->'),
    fn.removeElementsIfIsNumber,
    fn.removeSimbols(simbols),
    fn.mergeElements,
    fn.splitTextBy(' '),
    fn.removeElementsEmptyLine,
    fn.removeElementsIfIsNumber,
    fn.agroupWords,
    fn.orderByNumericAttr('qtd', 'desc',),
    console.log,
);

mostUsedWords(subtitlesPath)
    .then(console.log);