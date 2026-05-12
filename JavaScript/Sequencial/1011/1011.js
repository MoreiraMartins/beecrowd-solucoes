var input = require('fs').readFileSync('1011/1011.txt', 'utf8');
var lines = input.split('\n');

let pi = parseFloat(3.14159);
let raio = parseInt(lines[0])**3;
let volume = (4/3.0);

let resultado = (pi * raio * volume);

console.log("VOLUME = " + resultado.toFixed(3));
