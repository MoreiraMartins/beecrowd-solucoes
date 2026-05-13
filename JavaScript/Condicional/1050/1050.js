var input = require('fs').readFileSync('1050/1050.txt', 'utf8');
var lines = input.split('\n');

let entrada = parseInt(lines[0]);
let DDD = [61, 71, 11, 21, 32, 19, 27, 31];
let cidade = ["Brasilia", "Salvador", "Sao Paulo", "Rio de Janeiro", "Juiz de Fora", "Campinas", "Vitoria", "Belo Horizonte"];
let encontrado = false;

for (let i = 0; i < DDD.length; i++) {
    if (entrada == DDD[i]) {
        console.log(cidade[i])
        encontrado = true;
        break;
    } 
} if (!encontrado) {
    console.log("DDD nao cadastrado");
}