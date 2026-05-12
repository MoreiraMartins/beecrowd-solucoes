var input = require('fs').readFileSync('1017/1017.txt', 'utf8');
var lines = input.split('\n');

let horas = parseInt(lines[0]);
let veloMedia = parseInt(lines[1]);

let litros = ((horas * veloMedia) / 12);

console.log(litros.toFixed(3));