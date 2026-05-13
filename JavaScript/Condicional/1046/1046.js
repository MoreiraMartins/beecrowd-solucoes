var input = require('fs').readFileSync('1046/1046.txt', 'utf8');
var lines = input.split('\n');

let aux = lines[0].split(' ');
let inicio = parseInt(aux[0]);
let fim = parseInt(aux[1]);
let tempo;

if (inicio > fim) {
    tempo = (24 - inicio + fim);
    console.log(`O JOGO DUROU ${tempo} HORA(S)`);
} else if (inicio < fim) {
    tempo = (fim - inicio);
    console.log(`O JOGO DUROU ${tempo} HORA(S)`)
} else if (inicio == fim) {
    tempo = (24);
    console.log(`O JOGO DUROU ${tempo} HORA(S)`)
}
