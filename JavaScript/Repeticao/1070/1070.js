var input = require('fs').readFileSync('1070/1070.txt', 'utf8');
var lines = input.split('\n');

let impar = parseInt(lines[0]);
if (impar % 2 == 0) {
    impar++;
} for (let i = impar; i < (impar + 11); i+=2) {
    console.log(i);
}