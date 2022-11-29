const path = require('path');
const fn = require('./functions');
const { toArray, map, groupBy, mergeMap } = require('rxjs/operators');
const _ = require('loadsh');

const subtitlesPath = path.join(__dirname, '..', 'data', 'subtitles');

const promise = fn.readDir(subtitlesPath);

const simbols = [
    '.', '?', '-', ',', '!', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')', '!',
];

fn.readDir(subtitlesPath)
    .pipe(
        fn.elementsEndingWith('.srt'),
        fn.readFile(),
        fn.splitTextBy('\n'),
        fn.removeElementsEmptyLine(),
        fn.removeElementsIfIncludes('-->'),
        fn.removeElementsIfIsNumber(),
        fn.removeSimbols(simbols),
        fn.splitTextBy(' '),
        fn.removeElementsEmptyLine(),
        fn.removeElementsIfIsNumber(),
        groupBy(el => el.length),
        mergeMap(group => group.pipe(toArray())),
        map(words => ({ elements: words[0], qtd: words.length })),
        toArray(),
        map(array => _.sortBy(array, el => -el.qtd)),
    )
    .subscribe(console.log);