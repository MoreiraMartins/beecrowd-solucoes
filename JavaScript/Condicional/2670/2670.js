var input = require('fs').readFileSync('2670/2670.txt', 'utf8');
var lines = input.split('\n');

let A1 = parseInt(lines[0]);
let A2 = parseInt(lines[1]);
let A3 = parseInt(lines[2]);

let andar1 = (A2 * 2) + (A3 * 4);
let andar2 = (A1 * 2) + (A3 * 2);
let andar3 = (A1 * 4) + (A2 * 2);

let resultado = Math.min(andar1, andar2, andar3);

console.log(resultado);
