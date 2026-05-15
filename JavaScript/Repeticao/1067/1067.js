var input = require('fs').readFileSync('1067/1067.txt', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines[0]);
for (let i = 1; i <= X; i+=2) {
    console.log(i);
}