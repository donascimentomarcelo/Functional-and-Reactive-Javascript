const fs = require('fs');
const path = require('path');

const myPath = path.join(`${__dirname}/files`, 'data.txt');

function showContent(err, content) {
    console.log(content.toString())
}


console.log('Start...')
fs.readFile(myPath, {}, showContent);
console.log('End...')


console.log('Start Sync...')
const content = fs.readFileSync(myPath, {}, showContent);
console.log(content.toString());
console.log('End Sync...')