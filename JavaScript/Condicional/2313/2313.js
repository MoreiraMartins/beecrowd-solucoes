var input = require('fs').readFileSync('2313/2313.txt', 'utf8');
var lines = input.split('\n');

let lados = lines[0].split(' ');
let A = parseInt(lados[0]);
let B = parseInt(lados[1]);
let C = parseInt(lados[2]);

let equilatero;
let isoceles;
let escaleno;

let ordem = [A, B, C].sort((a, b) => b - a);  // Ordenação dos lados. Põe o maior valor no índice 0
A = ordem[0];
B = ordem[1];
C = ordem[2];

if ((A + B > C) && (A + C > B) && (B + C > A)) {
    if (A == B && B == C) {
    console.log("Valido-Equilatero");
} else if (A == B || B == C || A == C) {
    console.log("Valido-Isoceles");
    } else {
    console.log("Valido-Escaleno");
} if (A**2 == B**2 + C**2) {
    console.log("Retangulo: S");
} else {
    console.log("Retangulo: N")
}
} else {
    console.log("Invalido");
}