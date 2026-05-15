var input = require('fs').readFileSync('1113/1113.txt', 'utf8');
var lines = input.split('\n');

let i = 0;
while (true) {
    let aux = lines[i].split(' ');
    let X = parseInt(aux[0]);
    let Y = parseInt(aux[1]);

    if (X == Y) break;
    if (X < Y) {
        console.log("Crescente");
    } else {
        console.log("Decrescente");
    }
    i++;
}
