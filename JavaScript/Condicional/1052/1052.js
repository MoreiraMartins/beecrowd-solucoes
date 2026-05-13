var input = require('fs').readFileSync('1052/1052.txt', 'utf8');
var lines = input.split('\n');

let entrada = parseInt(lines[0]);
let meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let indice = entrada - 1;
let  mes = meses[indice];
console.log(mes);