var input = require('fs').readFileSync('1007/1007.txt', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);
let d = parseInt(lines[3]);

let dif = (a * b - c * d);

console.log("DIFERENCA = " + dif);
