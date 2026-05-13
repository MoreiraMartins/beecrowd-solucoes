var input = require('fs').readFileSync('1045/1045.txt', 'utf8');
var lines = input.split('\n');

let aux = lines[0].split(' ');
let A = parseFloat(aux[0]);
let B = parseFloat(aux[1]);
let C = parseFloat(aux[2]);
let ordem = [A, B, C];

ordem.sort((a, b) =>  b - a);

A = ordem[0];
B = ordem[1];
C = ordem[2];

if (A >= (B + C)) {
    console.log("NAO FORMA TRIANGULO");
    
} else {

if (A ** 2 == (B ** 2 + C ** 2)) {
    console.log("TRIANGULO RETANGULO");
} if ((A ** 2) > (B ** 2 + C ** 2)) {
    console.log("TRIANGULO OBTUSANGULO");
} if ((A ** 2) < (B ** 2 + C ** 2)) {
    console.log("TRIANGULO ACUTANGULO")
} if (A == B && A == C) {
    console.log("TRIANGULO EQUILATERO");
} else if (A == B && A != C || A == C && A != B || B == C && B != A) {
    console.log("TRIANGULO ISOSCELES");
} }