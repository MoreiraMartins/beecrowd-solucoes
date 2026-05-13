var input = require('fs').readFileSync('1043/1043.txt', 'utf8');
var lines = input.split('\n');

let valores = lines[0].split(' ');
let A = parseFloat(valores[0]);
let B = parseFloat(valores[1]);
let C = parseFloat(valores[2]);

if (A < (B + C) && B < (A + C) && C < (A + B)) {
    let perimetro = (A + B + C);
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
    let area = ((A + B) * C) / 2; 
    console.log(`Area = ${area.toFixed(1)}`);

}