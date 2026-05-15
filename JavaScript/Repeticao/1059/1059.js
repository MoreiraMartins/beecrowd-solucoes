var input = require('fs').readFileSync('1059/1059.txt', 'utf8');
var lines = input.split('\n');

for (let i = 2; i <= 100; i+=2) {
    console.log(i);
}