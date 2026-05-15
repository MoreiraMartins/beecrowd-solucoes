var input = require('fs').readFileSync('1065/1065.txt', 'utf8');
var lines = input.split('\n');

let pares = 0;
for (let i = 0; i <= 5; i++) {
    let aux = parseInt(lines[i]);
    if (aux % 2 == 0) {
        pares++;
    }
} console.log(`${pares} valores pares`);