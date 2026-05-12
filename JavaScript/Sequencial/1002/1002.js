var input = require('fs').readFileSync('1002/1002.txt', 'utf8');
var lines = input.split('\n');

let a = parseFloat (lines [0])**2; // ** serve para elevar o número desejado (potenciação. ex: 2²)
let pi = 3.14159;

console.log("A=" + (a * pi).toFixed(4)); // toFixed() irá limitar a quantidade de casas decimais. Há parênteses entre as variáveis a e pi para que o toFixed seja aplicado somente ao resultado final.
