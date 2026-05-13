var input = require('fs').readFileSync('2702/2702.txt', 'utf8');
var lines = input.split('\n');

let cardapio = lines[0].split(' ');
let F = parseInt(cardapio[0]);
let B = parseInt(cardapio[1]);
let M = parseInt(cardapio[2]);

let pedidos = lines[1].split(' ');
let pF = parseInt(pedidos[0]);
let pB = parseInt(pedidos[1]);
let pM = parseInt(pedidos[2]);

let aux1;
let aux2;
let aux3;

if (pF > F) {
    aux1 = pF - F;
} else {
    aux1 = 0;
} if (pB > B) {
    aux2 = pB - B;
} else {
    aux2 = 0;
} if (pM > M) {
    aux3 = pM - M;
} else {
    aux3 = 0;
}

let falta = aux1 + aux2 + aux3;
console.log(falta);