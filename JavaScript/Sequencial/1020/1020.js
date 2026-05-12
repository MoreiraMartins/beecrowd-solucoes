var input = require('fs').readFileSync('1020/1020.txt', 'utf8');
var lines = input.split('\n');

let idadeEmDias = parseInt(lines[0]);
let anos = Math.floor(idadeEmDias / 365);
let restoAnos = idadeEmDias % 365;
let meses = Math.floor(restoAnos / 30);
let dias = restoAnos % 30;

console.log(`${anos} ano(s)\n${meses} mes(es)\n${dias} dia(s)`);