var input = require('fs').readFileSync('1009/1009.txt', 'utf8');
var lines = input.split('\n');

let vendeur = String(lines[0]);
let salaire = parseFloat(lines[1]);
let ventes = parseFloat(lines[2]);

let comission = ventes * 0.15;
let total = comission + salaire;
console.log("TOTAL = R$ " + total.toFixed(2));