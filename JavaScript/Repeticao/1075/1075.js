var input = require('fs').readFileSync('1075/1075.txt', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines[0]);
for (let i = 1; i <= 100; i++) {
    if (i % N == 2) {
        console.log(i);
    }
}