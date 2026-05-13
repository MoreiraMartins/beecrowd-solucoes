var input = require('fs').readFileSync('1038/1038.txt', 'utf8');
var lines = input.split('\n');

let aux = lines[0].split(' ');
let codigo = parseInt(aux[0]);
let quantidade = parseInt(aux[1]);
let valor;

switch (codigo) {
    case 1:
        valor = quantidade * 4.00;
        break

    case 2:
         valor = quantidade * 4.50;
        break

    case 3:
        valor = quantidade * 5.00;
        break

    case 4:
        valor = quantidade * 2.00;
        break

    case 5:
        valor = quantidade * 1.50;
        break

} console.log(`Total: R$ ${valor.toFixed(2)}`);
