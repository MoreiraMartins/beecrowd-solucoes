var input = require('fs').readFileSync('1097/1097.txt', 'utf8');
var lines = input.split('\n');

for (let I = 1; I <= 9; I+=2) {
    for (let J = I + 6; J >= I + 4; J--) {
        console.log(`I=${I} J=${J}`);
    }
}