var input = require('fs').readFileSync('1116/1116.txt', 'utf8');
var lines = input.split('\n');

let i = 1;
let N = parseInt(lines[0]);
while (i <= N) {

    let aux = lines[i].split(' ');
    let X = parseInt(aux[0]);
    let Y = parseInt(aux[1]);
    let divisão = 0;

    if (Y == 0) {
        console.log("divisao impossivel");
    } else {
        divisão = X / Y;
        console.log(divisão.toFixed(1));
    } i++;
}

