var input = require('fs').readFileSync('1036/1036.txt', 'utf8');
var lines = input.split('\n');

let valores = lines[0].split(' ');
let A = parseFloat(valores[0]);
let B = parseFloat(valores[1]);
let C = parseFloat(valores[2]);

let delta = B * B - 4 * A * C;

if (delta < 0 || A == 0) {
    console.log("Impossivel calcular")
} else {
    let x1 = (-B + Math.sqrt(delta)) / (2 * A);
    let x2 = (-B - Math.sqrt(delta)) / (2 * A);

console.log(`R1 = ${x1.toFixed(5)}\nR2 = ${x2.toFixed(5)}`);

} 

