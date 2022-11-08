const fs = require('fs');
const path = require('path');

const myPath = path.join(`${__dirname}/files`, 'data.txt');

const showContent = (err, content) => console.log(content.toString());

const readFile = path => {
    return new Promise(resolve => {
        const content = fs.readFileSync(path, {}, showContent);
        resolve(content.toString());
    })
}

readFile(myPath)
    .then(console.log);