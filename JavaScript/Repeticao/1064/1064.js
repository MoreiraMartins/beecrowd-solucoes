var input = require('fs').readFileSync('1064/1064.txt', 'utf8');
var lines = input.split('\n');

let positivos = 0;
let soma = 0;
for (let i = 0; i <= 6; i++) {
    let aux = parseFloat(lines[i]);
    if (aux > 0) {
        positivos++;
        soma = soma + aux;
    } 
} console.log(`${positivos} valores positivos`);

let media = soma / positivos;
console.log(media.toFixed(1));