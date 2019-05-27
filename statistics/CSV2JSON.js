const fs = require("fs");
const readLine = require("readline");

let readFileToArr = (fReadName, func, callBack) => {
    let arr = [];
    let readObj = readLine.createInterface({
        input: fs.createReadStream(fReadName)
    });

    readObj.on('line', (line) => {
        func(arr, line);
    });
    readObj.on('close', () => {
        callBack(arr);
    });
};

let getYearList = (arr, line) => {
    let month = line.split(',')[3];
    if (!arr.includes(month)) {
        arr.push(month);
    }
};

let getTypes = (arr, line) => {
    let types = line.split("_")[2].split("|");
    console.log(types + "\n");
    types.forEach((value) => {
        if (!arr.includes(value))
            arr.push(value);
    })
};

readFileToArr('ratings.csv', getYearList, (arr) => {
    let obj = {};
    obj.year = arr.sort();
    fs.writeFile("Year.json", JSON.stringify(obj), (err) => {
        if (err) {
            throw err;
        }
    });
});

readFileToArr('movies.csv', getTypes, (arr) => {
    let obj = {};
    obj.types = arr;
    fs.writeFile("Types.json", JSON.stringify(obj), (err) => {
        if (err) {
            throw err;
        }
    });
});




