var input = require('fs').readFileSync('1095/1095.txt', 'utf8');
var lines = input.split('\n');

let I = 1;
for (let J = 60; J >= 0; J-=5) {
    console.log(`I=${I} J=${J}`);
        I+=3;
}