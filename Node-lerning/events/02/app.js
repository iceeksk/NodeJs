let fileReader = require('./readFile.js');

let reader = new fileReader.Reader();

reader.readDataFromFile('file.js', (responce) => console.log(responce));