var input = require('fs').readFileSync('1047/1047.txt', 'utf8');
var lines = input.split('\n');

let aux = lines[0].split(' ');                       // Separação dos dados por espaço
let horaI = parseInt(aux[0]);
let minutoI = parseInt(aux[1]);
let horaF = parseInt(aux[2]);
let minutoF = parseInt(aux[3]);
let tempo;

let começo = (horaI * 60) + minutoI;              // Transmando tudo em minutos
let final = (horaF * 60) + minutoF;
let umDia = 24 * 60;

if (começo < final) {
    tempo = (final - começo);
    let horas = Math.floor(tempo / 60);           // Convertendo mintos em horas e arredondando para baixo
    let minutos = tempo % 60;                     
    console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
} else if (começo > final) {
    tempo =  (umDia - começo) + final;
    let horas = Math.floor(tempo / 60);
    let minutos = tempo % 60;
    console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
} else if (começo == final) {
    let horas = Math.floor(umDia / 60);
    let minutos = umDia % 60;
    console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
}