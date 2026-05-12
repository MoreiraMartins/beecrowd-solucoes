var input = require('fs').readFileSync('1005/1005.txt', 'utf8');
var lines = input.split('\n');

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let media = (a * 3.5 + b * 7.5) / 11;
console.log("MEDIA = " + media.toFixed(5));
