var input = require('fs').readFileSync('1016/1016.txt', 'utf8');
var lines = input.split('\n');

let km = parseInt(lines[0]);                //1 km = 2 minutos
let tempo = km * 2;                         //Tempo = distância * 2

console.log(tempo + " minutos");