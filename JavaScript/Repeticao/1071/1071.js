var input = require('fs').readFileSync('1071/1071.txt', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines[0]);
let Y = parseInt(lines[1]);
let menor;
let maior;
let soma = 0;
if (X < Y) {
    menor = X;
    maior = Y;
} else {
    menor = Y;
    maior = X;
} for (let i = menor + 1; i < maior; i++) {
    if(i % 2 !== 0) {
        soma+=i;
    } 
} console.log(soma);