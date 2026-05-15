var input = require('fs').readFileSync('1114/1114.txt', 'utf8');
var lines = input.split('\n');

let i = 0;
while (true) {
    let senha = parseInt(lines[i]);
    if (senha == 2002) {
        console.log("Acesso Permitido");
        break;
    } else {
        console.log("Senha Invalida");
    }
    i++; 
}