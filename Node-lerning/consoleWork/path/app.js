let path = require('path');
let filename = path.basename(__filename);
console.log("filename: ",filename);
console.log(path.resolve('./tast'));
let extention = path.extname(__filename);
console.log("curent file extention: ",extention);

let abs = path.isAbsolute(__dirname);
console.log("path.isAbsolute: ",__dirname, "abs: ", abs);
console.log(path.isAbsolute("nodejs/node-learning"));
