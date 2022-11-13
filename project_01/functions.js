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

function elementsEndingWith(textualPattern) {
    return function (array) {
        return array.filter(el => el.endsWith(textualPattern));
    }
}

function removeElementsEmptyLine(array) {
    return array.filter(el => el.trim());
}

function removeElementsIfIncludes(textualPattern) {
    return function (array) {
        return array.filter(el => !el.includes(textualPattern));
    }
}

function removeElementsIfIsNumber(array) {
    return array.filter(el => {
        const num = parseInt(el.trim());
        return num !== num;
    });
}

function removeSimbols(simbols) {
    return function (array) {
        return array.map(el => {
            let textWithoutSimbols = el;
            simbols.forEach(simbol => {
                textWithoutSimbols = textWithoutSimbols.split(simbol).join('')
            });
            return textWithoutSimbols;
        });
    }
}

function mergeElements(array) {
    return array.join(' ');
}


function splitTextBy(simbol) {
    return function(text) {
        return text.split(simbol);
    }
}

module.exports = {
    readDir,
    elementsEndingWith,
    readFiles,
    readFile,
    removeElementsEmptyLine,
    removeElementsIfIncludes,
    removeElementsIfIsNumber,
    removeSimbols,
    mergeElements,
    splitTextBy,
}