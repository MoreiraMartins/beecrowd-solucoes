var input = require('fs').readFileSync('1066/1066.txt', 'utf8');
var lines = input.split('\n');

let aux = 0;
let pares = 0, impares = 0, positivos = 0, negativos = 0;
for (let i = 0; i < 5; i++) {
    let aux1 = parseInt(lines[i]);
    if (aux1 % 2 == 0) {
        pares++;
    } else {
        impares++;
    } if (aux1 > 0) {
        positivos++;
    } else if (aux1 < 0) {
        negativos++;
    }
}

console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);