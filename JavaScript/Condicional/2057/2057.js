var input = require('fs').readFileSync('2057/2057.txt', 'utf8');
var lines = input.split('\n');

let aux = lines[0].split(' ');
let s = parseInt(aux[0]);
let t = parseInt(aux[1]);
let f = parseInt(aux[2]);

let aux2 = s + t + f;
let resultado;

if (aux2 >= 24) {
    aux2 - 24;
    resultado = aux2 - 24;
    console.log(resultado);
} else if (aux2 < 0) {
    aux2 + 24;
    resultado = aux2 + 24;
    console.log(resultado);
} else {
    console.log(aux2);
}