var input = require('fs').readFileSync('1060/1060.txt', 'utf8');
var lines = input.split('\n');

let positivos = 0;
for (let i = 0; i <= 6; i++) {
    let aux = parseFloat(lines[i]);
    if (aux > 0) {
        positivos++;
    } 
} console.log(`${positivos} valores positivos`);