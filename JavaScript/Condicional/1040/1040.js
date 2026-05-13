var input = require('fs').readFileSync('1040/1040.txt', 'utf8');
var lines = input.split('\n');

let aux = lines[0].split(' ');
let N1 = parseFloat(aux[0]);
let N2 = parseFloat(aux[1]);
let N3 = parseFloat(aux[2]);
let N4 = parseFloat(aux[3]);

let media = ((N1 * 2) + (N2 * 3) + (N3 * 4) + N4) / 10;

if (media >= 7.0) {
    console.log(`Media: ${media.toFixed(1)}\nAluno aprovado.`)
} else if (media < 5.0) {
    console.log(`Media: ${media.toFixed(1)}\nAluno reprovado.`)
} else {
   let notaExame = parseFloat(lines[1]);
   let mediaFinal = (media + notaExame) / 2;
   
   if (mediaFinal >= 5.0) {
    console.log(`Media: ${media.toFixed(1)}\nAluno em exame.\nNota do exame: ${notaExame.toFixed(1)}\nAluno aprovado.\nMedia final: ${mediaFinal.toFixed(1)}`);
   } else {
    console.log(`Media: ${mediaFinal.toFixed(1)}\nAluno reprovado.`)
   }
}
