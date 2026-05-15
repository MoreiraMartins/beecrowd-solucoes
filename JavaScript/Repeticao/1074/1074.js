var input = require('fs').readFileSync('1074/1074.txt', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines[0]);
for (let i = 1; i <= N; i++) {
    let aux = parseInt(lines[i]);
    if (aux == 0) {
        console.log("NULL");
    } else if (aux % 2 == 0) {
        if (aux > 0) {
            console.log("EVEN POSITIVE")
        } else {
            console.log("EVEN NEGATIVE");
        }
    } else {
        if (aux > 0) {
            console.log("ODD POSITIVE");
        } else {
            console.log("ODD NEGATIVE");
        }
    }
}