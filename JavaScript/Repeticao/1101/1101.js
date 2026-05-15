var input = require('fs').readFileSync('1101/1101.txt', 'utf8');
var lines = input.split('\n');

let i = 0;
while (true) {
    let aux = lines[i].split(' ');
    let M = parseInt(aux[0]);
    let N = parseInt(aux[1]);

    let soma = 0;
    let concatenacao = '';

    i++;
    
    if (M <= 0 || N <= 0) break;

    let menor;
    let maior;

    if (M > N ) {
        menor = N;
        maior = M;
    } else {
        menor = M;
        maior = N;
    }
    for (let j = menor; j <= maior; j++) {
        soma += j;
        concatenacao += j + ' ';
    }
    console.log(`${concatenacao}Sum=${soma}`);
}