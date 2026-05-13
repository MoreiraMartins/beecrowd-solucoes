var input = require('fs').readFileSync('1035/1035.txt', 'utf8');
var lines = input.split('\n');

let valores = lines[0].split(' '); // separa cada valor em uma linha diferente

let A = parseInt(valores[0]);
let B = parseInt(valores[1]);
let C = parseInt(valores[2]);
let D = parseInt(valores[3]);

if ((B > C) && (D > A) && ((C + D) > (A + B)) && (C > 0) && (D > 0) && (A % 2 === 0)) {
    console.log(`Valores aceitos`);
} else {
        console.log(`Valores nao aceitos`)
    }