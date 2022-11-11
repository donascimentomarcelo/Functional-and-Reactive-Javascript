const fs = require('fs');
const path = require('path')

function readDir(subtitlesPath) {
    let files = fs.readdirSync(subtitlesPath);
    return files.map(file => path.join(subtitlesPath, file));
}


module.exports = {
    readDir
}