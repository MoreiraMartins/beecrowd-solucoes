var input = require('fs').readFileSync('1080/1080.txt', 'utf8');
var lines = input.split('\n');

let maior = 0;
let posicao = 0;
for (let i = 0; i < 100; i++) {
    let num = parseInt(lines[i]);
    if (num > maior) {
        maior = num;
        posicao = i + 1;
    }
} console.log(`${maior}\n${posicao}`);