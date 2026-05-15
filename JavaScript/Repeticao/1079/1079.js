var input = require('fs').readFileSync('1079/1079.txt', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines[0]);
for (let i = 1; i <= N; i++) {
    let notas = lines[i].split(' ');
    
    let n1 = parseFloat(notas[0]);
    let n2 = parseFloat(notas[1]);
    let n3 = parseFloat(notas[2]);

    let peso1 = n1 * 2;
    let peso2 = n2 * 3;
    let peso3 = n3 * 5;

    let media = (peso1 + peso2 + peso3) / 10; // pesos: 2 + 3 + 5 = 10
    console.log(media.toFixed(1));
} 