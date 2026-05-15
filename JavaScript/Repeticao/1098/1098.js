var input = require('fs').readFileSync('1098/1098.txt', 'utf8');
var lines = input.split('\n');

for (let i = 0; i <= 2; i+=0.2) {
    for (let j = 1; j <= 3; j++) {
        let jAtual = j + i;
        let iFormatado = Number(i.toFixed(1));       // O Number remove os zeros dos numeros inteiros criados pelo toFixed(1).
        let jFormatado = Number(jAtual.toFixed(1));  // Ex: o 2.0 se torna 2 com o o uso do Number.
        console.log(`I=${iFormatado} J=${jFormatado}`);
    }
}
