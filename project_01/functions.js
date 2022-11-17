const fs = require('fs');
const path = require('path')

function composition(...fns) {
    return (value) =>
        fns.reduce(async (acc, fn) => {
            if (Promise.resolve(acc) === acc)
                return fn(await acc);
            return fn(acc);
        }, value);
}

function readDir(subtitlesPath) {
    return new Promise((resolve, reject) => {
        try {
            const files = fs.readdirSync(subtitlesPath);
            const fullFiles = files.map(file => path.join(subtitlesPath, file));
            resolve(fullFiles);
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
            return simbols.reduce((acc, simbol) => {
                return acc.split(simbol).join('')
            }, el)
        });
    }
}

function mergeElements(array) {
    return array.join(' ');
}


function splitTextBy(simbol) {
    return function (text) {
        return text.split(simbol);
    }
}

function agroupWords(words) {
    return Object.values(words.reduce((acc, item) => {
        const word = item.toLowerCase();
        const qtd = acc[word] ? acc[word].qtd + 1 : 1;
        acc[word] = { word, qtd };
        return acc;
    }, {}));
}

function orderByNumericAttr(attr, order = 'asc') {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr];
        const desc = (o1, o2) => o2[attr] - o1[attr];
        return [...array].sort(order === 'asc' ? asc : desc);
    }
}

module.exports = {
    composition,
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
    agroupWords,
    orderByNumericAttr,
}