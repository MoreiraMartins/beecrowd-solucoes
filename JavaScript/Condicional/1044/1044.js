var input = require('fs').readFileSync('1044/1044.txt', 'utf8');
var lines = input.split('\n');

let valores = lines[0].split(' ');
let V1 = parseInt(valores[0]);
let V2 = parseInt(valores[1]);

if (V1 % V2 == 0 || V2 % V1 == 0) {
    console.log("Sao Multiplos");
} else {
    console.log("Nao sao Multiplos");
}