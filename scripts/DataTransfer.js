let csv2json = require('csv2json');
let fs = require('fs');

fs.createReadStream('./ratings.csv')
    .pipe(csv2json({
        // Defaults to comma.
        separator: ','
    }))
    .pipe(fs.createWriteStream('./ratings.json'));
