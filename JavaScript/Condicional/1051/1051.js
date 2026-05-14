var input = require('fs').readFileSync('1051/1051.txt', 'utf8');
var lines = input.split('\n');

let salario = parseFloat(lines[0]);
if (salario >= 0 && salario <= 2000.00) {
    console.log("Isento");
} else if (salario > 2000.00 && salario <= 3000.00) {
    let aux = (salario - 2000.00) * 0.08;
    console.log(`R$ ${aux.toFixed(2)}`);
} else if (salario > 3000.00 && salario <= 4500.00) {
    let aux = ((salario - 3000.00) * 0.18) + (1000.00 * 0.08);
    console.log(`R$ ${aux.toFixed(2)}`);
} else if (salario > 4500.00) {
    let aux = (1000.00 * 0.08) + (1500.00 * 0.18) + ((salario - 4500.00) * 0.28);
    console.log(`R$ ${aux.toFixed(2)}`);
}