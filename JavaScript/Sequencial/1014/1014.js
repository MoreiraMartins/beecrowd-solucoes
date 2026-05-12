var input = require('fs').readFileSync('1014/1014.txt', 'utf8');
var lines = input.split('\n');

let km = parseInt(lines[0]);
let combustível = parseFloat(lines[1]);
let media = (km / combustível);
console.log(media.toFixed(3) + " km/l");
