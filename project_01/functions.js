const fs = require('fs');
const path = require('path')

function readDir(subtitlesPath) {
    return new Promise((resolve, reject) => {
        try {
            let files = fs.readdirSync(subtitlesPath);
            files = files.map(file => path.join(subtitlesPath, file));
            resolve(files);
        } catch (e) {
            reject(e);
        }
    });
}

function readFile(path) {
    return new Promise((resolve, reject) => {
        try {
            const content = fs.readFileSync(path, { encoding: 'utf-8' });
            resolve(content.toString());
        } catch (e) {
            reject(e);
        }
    });
}

function readFiles(paths) {
    return Promise.all(paths.map(path => readFile(path)));
}

function elementsEndingWith(array, pattern) {
    return array.filter(el => el.endsWith(pattern));
}


module.exports = {
    readDir,
    elementsEndingWith,
    readFiles,
    readFile
}