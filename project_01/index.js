const path = require('path');
const fn = require('./functions');

const subtitlesPath = path.join(__dirname, '..', 'data', 'subtitles');

const promise = fn.readDir(subtitlesPath);

promise
    .then(files => fn.elementsEndingWith(files, '.srt'))
    .then(strFiles => fn.readFiles(strFiles))
    .then(console.log);