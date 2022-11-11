const fs = require('fs');
const path = require('path')

function readDir(subtitlesPath) {
    return new Promise((resolve, reject) => {
        try {
            let files = fs.readdirSync(subtitlesPath);
            files = files.map(file => path.join(subtitlesPath, file));
            resolve(files);
        } catch (error) {
            reject(error);
        }
    });
}


module.exports = {
    readDir
}