var input = require('fs').readFileSync('1019/1019.txt', 'utf8');
var lines = input.split('\n');


let tempo = parseInt(lines[2]);
let horas = Math.floor(tempo / 3600);            // 1h = 60 min, 1 min = 60 s   60 * 60 = 3600 
let restoHoras = Math.floor(tempo % 3600);
let minutos = Math.floor(restoHoras / 60);
let restoMinutos = restoHoras % 60;

console.log(`${horas}: ${minutos}: ${restoMinutos}`)

