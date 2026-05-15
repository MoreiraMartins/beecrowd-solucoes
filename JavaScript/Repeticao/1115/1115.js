var input = require('fs').readFileSync('1115/1115.txt', 'utf8');
var lines = input.split('\n');

let i = 0;
while (true) {
    let aux = lines[i].split(' ');
    let X = parseInt(aux[0]);
    let Y = parseInt(aux[1]);

    if (X > 0 && Y > 0) {
        console.log("primeiro");
    } else if (X < 0 && Y > 0) {
        console.log("segundo");
    } else if (X < 0 && Y < 0) {
        console.log("terceiro");
    } else if (X > 0 && Y < 0) {
        console.log("quarto");
    } else if (X == 0 || Y == 0) {
        break;
    }
    i++;
}