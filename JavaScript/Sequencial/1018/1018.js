var input = require('fs').readFileSync('1018/1018.txt', 'utf8');
var lines = input.split('\n');


let cedulas = [100, 50, 20, 10, 5, 2, 1];
let valor = parseInt(lines[0]);
let valorInicial = valor;

console.log(valorInicial);

for (let i = 0; i < cedulas.length; i++) {
    let cedula = cedulas[i];
    let quantidade = Math.floor(valor / cedula);
    valor = valor % cedula;


console.log(`${quantidade} nota(s) de R$ ${cedula},00`);
}