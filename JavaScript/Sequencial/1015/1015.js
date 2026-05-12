var input = require('fs').readFileSync('1015/1015.txt', 'utf8');
var lines = input.split('\n');

let ponto1 = lines[0].split(' ');
let x1 = parseFloat(ponto1[0]);
let y1 = parseFloat(ponto1[1]);

let ponto2 = lines[1].split(' ');
let x2 =  parseFloat(ponto2[0]);
let y2 = parseFloat(ponto2[1]);

let distancia = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2).toFixed(4); //Math.sqrt está submetendo todo o restante a uma raiz quadrada.
console.log(distancia);
