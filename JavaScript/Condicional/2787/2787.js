var input = require('fs').readFileSync('2787/2787.txt', 'utf8');
var lines = input.split('\n');

let L = parseInt(lines[0]);
let C = parseInt(lines[1]);

if ((L + C) % 2 == 0) {
    console.log("1");
} else if ((L + C) % 2 == 1) {
    console.log("0");
}