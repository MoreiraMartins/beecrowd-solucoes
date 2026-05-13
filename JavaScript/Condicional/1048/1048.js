var input = require('fs').readFileSync('1048/1048.txt', 'utf8');
var lines = input.split('\n');

let salario = parseFloat(lines[0]);
let porcentagem;
let novoSalario;
let acrescimo;

if (salario >= 0.00 && salario <= 400.00) {
    porcentagem = 15;
    acrescimo = salario * (15 / 100);
    novoSalario = salario + acrescimo;
    console.log(`Novo salario: ${novoSalario.toFixed(2)}\nReajuste ganho: ${acrescimo.toFixed(2)}\nEm percentual: ${porcentagem} %`);
} else if (salario >= 400.01 && salario <= 800.00) {
    porcentagem = 12;
    acrescimo = salario * (12 / 100);
    novoSalario = salario + acrescimo;
    console.log(`Novo salario: ${novoSalario.toFixed(2)}\nReajuste ganho: ${acrescimo.toFixed(2)}\nEm percentual: ${porcentagem} %`);
} else if (salario >= 800.01 && salario <= 1200.00) {
    porcentagem = 10;
    acrescimo = salario * (10 / 100);
    novoSalario = salario + acrescimo;
    console.log(`Novo salario: ${novoSalario.toFixed(2)}\nReajuste ganho: ${acrescimo.toFixed(2)}\nEm percentual: ${porcentagem} %`);
} else if (salario >= 1200.01 && salario <= 2000.00) {
    porcentagem = 7;
    acrescimo = salario * (7 / 100);
    novoSalario = salario + acrescimo;
    console.log(`Novo salario: ${novoSalario.toFixed(2)}\nReajuste ganho: ${acrescimo.toFixed(2)}\nEm percentual: ${porcentagem} %`);
} else {
    porcentagem = 4;
    acrescimo = salario * (4/100);
    novoSalario = salario + acrescimo;
    console.log(`Novo salario: ${novoSalario.toFixed(2)}\nReajuste ganho: ${acrescimo.toFixed(2)}\nEm percentual: ${porcentagem} %`);
}