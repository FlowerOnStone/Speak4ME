const fs = require('fs');
const path = require('path');

const SVG_DIR = path.join(__dirname, '../../assets/svg');

fs.readdir(SVG_DIR, (err, files) => {
    if (err) {
        throw err;
    }
    files.forEach(file => {
        fs.readFile(path.join(SVG_DIR, file), 'utf8', (fileErr, data) => {
            if (fileErr) {
                console.log(fileErr.message);
            } else {
                console.log(file);
                console.log(data);
            }
        });
    });
});
