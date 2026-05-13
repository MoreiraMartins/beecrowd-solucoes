var input = require('fs').readFileSync('2780/2780.txt', 'utf8');
var lines = input.split('\n');

let D = parseInt(lines[0]);
if (D <= 800) {
    console.log(1);
} else if (D > 800 && D <= 1400) {
    console.log(2);
} else if (D > 1400 && D <= 2000) {
    console.log(3);
}