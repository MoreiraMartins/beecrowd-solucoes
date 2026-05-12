var input = require('fs').readFileSync('1008/1008.txt', 'utf8');
var lines = input.split('\n');

let nombre = parseInt(lines[0]);
let heures = parseInt(lines[1]);
let argentHeure = parseFloat(lines[2]);

let salaire = (heures * argentHeure);
console.log("NUMBER = "+ nombre);
console.log("SALARY = U$ " + salaire.toFixed(2));
