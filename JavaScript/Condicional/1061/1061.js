var input = require('fs').readFileSync('1061/1061.txt', 'utf8');
var lines = input.split('\n');

let inicio = lines[0].split(' ');
let diaString1 = inicio[0];
let diaInt1 = parseInt(inicio[1]);

let tempoI = lines[1].split(' : ');
let horaI = parseInt(tempoI[0]);
let minutoI = parseInt(tempoI[1]);
let segundoI = parseInt(tempoI[2]);

let final = lines[2].split(' ');
let diaString2 = final[0];
let diaInt2 = parseInt(final[1]);

let tempoF = lines[3].split(' : ');
let horaF = parseInt(tempoF[0]);
let minutoF = parseInt(tempoF[1]);
let segundoF = parseInt(tempoF[2]);

let totalI = (diaInt1 * ((60 * 60) * 24)) + (horaI * (60 * 60)) + (minutoI * 60) + segundoI;  
let totalF = (diaInt2 * ((60 * 60 ) * 24)) + (horaF * (60 * 60)) + (minutoF * 60) + segundoF;

let duraçao = totalF - totalI;

let dias = duraçao / ((60 * 60) * 24);
let horas = ((duraçao % ((60 * 60) * 24)) / (60 * 60));
let minutos = ((duraçao % ((60 * 60) * 24)) % (60 * 60) / 60);
let segundos = ((duraçao % ((60 * 60) * 24)) % (60 * 60) % 60);

console.log(`${Math.floor(dias).toFixed(0)} dia(s)`);
console.log(`${Math.floor(horas).toFixed(0)} hora(s)`);
console.log(`${Math.floor(minutos).toFixed(0)} minuto(s)`);
console.log(`${Math.floor(segundos).toFixed(0)} segundo(s)`);