var input = require('fs').readFileSync('1042/1042.txt', 'utf8');
var lines = input.split('\n');

let aux = lines[0].split(' ');                    // Arrow funciton ↓
let A = parseInt(aux[0]);                         // numeros.sort((a - b) => a - b) é o mesmo que:
let B = parseInt(aux[1]);                         // numeros.sort(function(a, b) {
let C = parseInt(aux[2]);                         //      return a - b;
let numeros = [A, B, C];                          //    });
numeros.sort((a, b) => a - b);                   
               
console.log(`${numeros[0]}\n${numeros[1]}\n${numeros[2]}\n`);                            
console.log(`${aux[0]}\n${aux[1]}\n${aux[2]}`);                           


// sort()
// se (a - b) for positivo, quer dizer que b é menor e virá antes de a
// se (a - b) for negativo, quer dizer que b é maior e virá depois de a