var input = require('fs').readFileSync('1117/1117.txt', 'utf8');
var lines = input.split('\n');

let notasValidas = 0;
let soma = 0;
let i = 0;

while (notasValidas < 2) {
    let nota = parseFloat(lines[i]);
    if (nota >= 0 && nota <= 10) {
        soma += nota;
        notasValidas++;
    } else {
        console.log("nota invalida");
    }
    i++;
} let media = soma / 2;
console.log(`media = ${media.toFixed(2)}`)