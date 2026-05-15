var input = require('fs').readFileSync('1078/1078.txt', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines[0]);
for (let i = 1; i <= 10; i++) {
    let multiplos = i * N;

    console.log(`${i} x ${N} = ${multiplos}`);
}