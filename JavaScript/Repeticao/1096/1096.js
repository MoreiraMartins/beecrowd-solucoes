var input = require('fs').readFileSync('1096/1096.txt', 'utf8');
var lines = input.split('\n');

for (let I = 1; I <= 9; I+=2) {
    for (let J = 7; J >= 5; J-=1) {
        console.log(`I=${I} J=${J}`)
    }
}
