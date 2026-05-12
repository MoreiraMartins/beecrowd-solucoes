var input = require('fs').readFileSync('1006/1006.txt', 'utf8');
var lines = input.split('\n');

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);

let media = (a * 2 + b * 3 + c * 5) / 10

console.log("MEDIA = " + media.toFixed(1));