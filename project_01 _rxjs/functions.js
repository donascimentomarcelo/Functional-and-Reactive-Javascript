const fs = require('fs');
const path = require('path');
const { Observable } = require('rxjs');

function createPipeableOperator(operatorFn) {
    return function (source) {
        return Observable.create(subscriber => {
            const sub = operatorFn(subscriber);
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (e => subscriber.complete(e)),
            });
        });
    }
}

function readDir(subtitlesPath) {
    return new Observable(subscriber => {
        try {
            fs.readdirSync(subtitlesPath)
                .forEach(file => subscriber.next(path.join(subtitlesPath, file)));
            subscriber.complete();
        } catch (e) {
            subscriber.error(e);
        }
    });
}

function readFile() {
    return createPipeableOperator(subscriber => ({
        next(path) {
            try {
                const content = fs.readFileSync(path, { encoding: 'utf-8' });
                subscriber.next(content.toString());
                subscriber.complete();
            } catch (e) {
                subscriber.error();
            }
        }
    }));
}

function elementsEndingWith(textualPattern) {
    return createPipeableOperator(subscriber => ({
        next(text) {
            if (text.endsWith(textualPattern))
                subscriber.next(text);
        }
    }));
}

function removeElementsEmptyLine() {
    return createPipeableOperator(subscriber => ({
        next(text) {
            if (text.trim())
                subscriber.next(text);
        }
    }));
}

function removeElementsIfIncludes(textualPattern) {
    return createPipeableOperator(subscriber => ({
        next(text) {
            if (!text.includes(textualPattern))
                subscriber.next(text);
        }
    }));
}

function removeElementsIfIsNumber() {
    return createPipeableOperator(subscriber => ({
        next(text) {
            const num = parseInt(text.trim());
            if (num !== num)
                subscriber.next(text);
        }
    }));
}

function removeSimbols(simbols) {
    return createPipeableOperator(subscriber => ({
        next(text) {
            const textWithoutSimbols = simbols.reduce((acc, simbol) => {
                return acc.split(simbol).join('');
            }, text);
            subscriber.next(textWithoutSimbols);
        }
    }));
}

function splitTextBy(simbol) {
    return createPipeableOperator(subscriber => ({
        next(text) {
            text.split(simbol)
                .forEach(part => subscriber.next(part));
        }
    }));
}

function agroupWords() {
    return createPipeableOperator(subscriber => ({
        next(words) {
            const groupedWords = Object.values(words.reduce((acc, item) => {
                const word = item.toLowerCase();
                const qtd = acc[word] ? acc[word].qtd + 1 : 1;
                acc[word] = { word, qtd };
                return acc;
            }, {}));
            subscriber.next(groupedWords);
            subscriber.complete();
        }
    }));
}

module.exports = {
    readDir,
    elementsEndingWith,
    readFile,
    removeElementsEmptyLine,
    removeElementsIfIncludes,
    removeElementsIfIsNumber,
    removeSimbols,
    splitTextBy,
    agroupWords
}