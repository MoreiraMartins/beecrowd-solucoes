var input = require('fs').readFileSync('1001/1001.txt', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines[0]);
let B = parseInt(lines[1]); 
let X = A + B;
console.log("X = " + X);
