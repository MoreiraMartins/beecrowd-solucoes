var input = require('fs').readFileSync('1072/1072.txt', 'utf8');
var lines = input.split('\n');

let In = 0;
let Out = 0;
let N = parseInt(lines[0]);
for (let i = 1; i <= N; i++) {
    let X = parseInt(lines[i]);
    if (X >= 10 && X <= 20) {
        In++;
    } else {
        Out++;
    }
} console.log(`${In} in`);
console.log(`${Out} out`);