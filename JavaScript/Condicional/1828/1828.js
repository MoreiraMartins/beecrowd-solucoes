var input = require('fs').readFileSync('1828/1828.txt', 'utf8');
var lines = input.split('\n');

let testes = parseInt(lines[0]);
for (let i = 1; i <= testes; i++) {
    let escolhas = lines[i].trim().split(' ');
    let Sheldon = escolhas[0];
    let Raj = escolhas[1];

    if (Sheldon == Raj) {
        console.log(`Caso #${i}: De novo!`)
    } else if (
    
    (Sheldon == "tesoura" && Raj == "papel") ||
    (Sheldon == "papel" && Raj == "pedra") || 
    (Sheldon == "pedra" && Raj == "lagarto") ||
    (Sheldon == "lagarto" && Raj == "Spock") ||
    (Sheldon == "Spock" && Raj == "tesoura") ||
    (Sheldon == "tesoura" && Raj == "lagarto") ||
    (Sheldon == "lagarto" && Raj == "papel") ||
    (Sheldon == "papel" && Raj == "Spock") ||
    (Sheldon == "papel" && Raj == "Spock") ||
    (Sheldon == "Spock" && Raj == "pedra") ||
    (Sheldon == "pedra" && Raj == "tesoura") 

    ) {
        console.log(`Caso #${i}: Bazinga!`);
    } else {
        console.log(`Caso #${i}: Raj trapaceou!`);
    }
}

