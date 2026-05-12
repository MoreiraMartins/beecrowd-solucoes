var input = require('fs').readFileSync('1004/1004.txt', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);

let prod = (a * b)

console.log("PROD = " + prod);