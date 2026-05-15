var input = require('fs').readFileSync('1094/1094.txt', 'utf8');
var lines = input.split('\n');

let total = 0;
let tCoelhos = 0;
let tRatos = 0;
let tSapos = 0;

let N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) {
    let casos = lines[i].split(' ');
    let qtd = parseInt(casos[0]);
    let tipo = casos[1].trim();

    if (tipo == "C") {
        tCoelhos += qtd;
    } else if (tipo == "R") {
        tRatos += qtd;
    } else {
        tSapos += qtd;
    }
} total = tCoelhos + tRatos + tSapos;
let perCoelhos = (tCoelhos * 100) / total;
let perRatos = (tRatos * 100) / total;
let perSapos = (tSapos * 100) / total;

 console.log(`Total: ${total} cobaias`);
 console.log(`Total de coelhos: ${tCoelhos}`);
 console.log(`Total de ratos: ${tRatos}`);
 console.log(`Total de sapos: ${tSapos}`);
 console.log(`Percentual de coelhos: ${perCoelhos.toFixed(2)}%`);
 console.log(`Percentual de ratos: ${perRatos.toFixed(2)}%`);
 console.log(`Percentual de sapos: ${perSapos.toFixed(2)}%`);
 