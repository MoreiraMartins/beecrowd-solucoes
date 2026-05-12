var input = require('fs').readFileSync('1021/1021.txt', 'utf8');
var lines = input.split('\n');

let valor = Math.round(parseFloat(lines[0]) * 100); //Math.round é uma função da classe Math que arredonda o número para o inteiro mais próximo
let valorInicial = valor;
let cedulas = [10000, 5000, 2000, 1000, 500, 200];
let moedas = [100, 50, 25, 10, 5, 1];

console.log(`NOTAS:`);

for (let i = 0; i < cedulas.length; i++) {
    let cedula = cedulas[i];
    let quantidade = Math.floor(valor / cedula);
    valor = valor % cedula; 

    console.log(`${quantidade} nota(s) de R$ ${(cedula / 100).toFixed(2)}`);
}

console.log(`MOEDAS:`);

for (let i = 0; i < moedas.length; i++) {
    let moeda = moedas[i];
    let quantidade = Math.floor(valor / moeda);
    valor = valor % moeda;
    
    console.log(`${quantidade} moeda(s) de R$ ${(moeda / 100).toFixed(2)}`);
}
