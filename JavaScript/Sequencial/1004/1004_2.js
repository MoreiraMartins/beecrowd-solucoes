var input = require('fs').readFileSync('1004/1004.txt', 'utf8');
var lines = input.split('\n');

function produto (ent1, ent2) {
    return ent1 * ent2;
}

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);

console.log(`PROD = ${produto(a, b)}`);