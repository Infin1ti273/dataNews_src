let csv2json = require('csv2json');
let fs = require('fs');

fs.createReadStream('./movies.csv')
    .pipe(csv2json({
        // Defaults to comma.
        separator: '_'
    }))
    .pipe(fs.createWriteStream('./movies.json'));
