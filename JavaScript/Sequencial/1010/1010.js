var input = require('fs').readFileSync('1010/1010.txt','utf8');
var lines = input.split('\n');

let peca1 = lines[0].split(' ');
let codigo1 = parseInt(peca1[0]);
let numero1 = parseInt(peca1[1]);
let valor1 = parseFloat(peca1[2]);

let total1 = numero1 * valor1;

let peca2 = lines[1].split(' ');
let codigo2 = parseInt(peca2[0]);
let numero2 = parseInt(peca2[1]);
let valor2 = parseFloat(peca2[2]);

let total2 = numero2 * valor2;

console.log("VALOR A PAGAR: R$ " + (total1 + total2).toFixed(2));