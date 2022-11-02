const fs = require('fs');
const path = require('path');

const myPath = path.join(`${__dirname}/files`, 'data.txt');

function showContent(err, content) {
    console.log(content.toString())
}

fs.readFile(myPath, {}, showContent);