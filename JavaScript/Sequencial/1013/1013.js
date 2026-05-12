var input = require('fs').readFileSync('1013/1013.txt', 'utf8');
var lines = input.split('\n');

let linha1 = lines[0].split(' ');
let a = parseInt(linha1[0]);
let b = parseInt(linha1[1]);
let c = parseInt(linha1[2]);

let maior = ((a + b + Math.abs (a - b))/2); // Math.abs() retorna o valor absoluto do número, ou seja, remove o sinal negativo, se houver.
let maiorfinal = ((maior + c + Math.abs (maior - c))/2);
console.log(maiorfinal + " eh o maior");