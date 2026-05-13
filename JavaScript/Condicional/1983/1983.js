var input = require('fs').readFileSync('1983/1983.txt', 'utf8');
var lines = input.split('\n');

let nAlunos = parseInt(lines[0]);
let melhorNota = -1;
let melhorMatricula = '';
let aluno1;
let nota1;

for (let i = 1; i <= nAlunos; i++) {
    aluno1 = lines[i].split(' ');
    matricula1 = aluno1[0];
    nota1 = parseFloat(aluno1[1]);

   if (nota1 > melhorNota) {
    melhorNota = nota1;
    melhorMatricula = matricula1;
   } 
} 

if (melhorNota >= 8) { 
console.log(melhorMatricula);
} else {
    console.log("Minimum note not reached");
}
