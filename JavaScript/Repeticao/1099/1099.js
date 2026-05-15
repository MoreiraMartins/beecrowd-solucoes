var input = require('fs').readFileSync('1099/1099.txt', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) {
    let aux = lines[i].split(' ');
    let X = parseInt(aux[0]);
    let Y = parseInt(aux[1]);

    let soma = 0;

    let menor = Math.min(X, Y);
    let maior = Math.max(X, Y);
    
    for (let j = menor + 1; j < maior; j++) {            // j = menor + 1 e j < maior porque o enunciado pede os valores ENTRE X e Y
        if (j % 2 != 0) {
            soma+=j;
        }
    }
    console.log(soma);
}