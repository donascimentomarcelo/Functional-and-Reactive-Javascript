const path = require('path');
const fn = require('./functions');

const subtitlesPath = path.join(__dirname, '..', 'data', 'subtitles');

const files = fn.readDir(subtitlesPath);
console.log(files);