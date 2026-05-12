var input = require('fs').readFileSync('1003/1003.txt', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);

console.log ("SOMA = " + (a + b)); // As variáveis precisam estar entre parênteses para que o resultado não seja concatenado. Ex: 3010 em vez de 40