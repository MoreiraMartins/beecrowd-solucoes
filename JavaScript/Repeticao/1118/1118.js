var input = require('fs').readFileSync('1118/1118.txt', 'utf8');
var lines = input.split('\n');

let i = 0;
let novoCalculo = 1;
while (novoCalculo !== 2) {
    if (novoCalculo == 1) {
        let notasValidas = 0;
        let soma = 0;

        while (notasValidas < 2) {
            let nota = parseFloat(lines[i]);
            i++;

            if (nota >= 0 && nota <= 10) {
                soma += nota;
                notasValidas++;
            } else {
                console.log("nota invalida");
            }
        }
        let media = soma / 2;
        console.log(`media = ${media.toFixed(2)}`);
        novoCalculo = 0;
    }
    while (novoCalculo !== 1 && novoCalculo !== 2) {
        console.log("novo calculo (1-sim 2-nao)");
        novoCalculo = parseInt(lines[i]);
        i++;
    }
}