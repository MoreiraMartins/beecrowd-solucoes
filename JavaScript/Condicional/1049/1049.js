var input = require('fs').readFileSync('1049/1049.txt', 'utf8');
var lines = input.split('\n');

let aux1 = lines[0].trim();            // .trim() é usado para remover espaçoes em branco das extremi
let aux2 = lines[1].trim();
let aux3 = lines[2].trim();

if (aux1 == "vertebrado") {
    if (aux2 == "ave") {
        if (aux3 == "carnivoro") {
            console.log("aguia");
        } else {
            console.log("pomba");
        }
    }
    else if (aux2 == "mamifero") {
        if (aux3 == "onivoro") {
            console.log("homem");
        } else {
            console.log("vaca");
        }
    }
} else if (aux1 == "invertebrado") {                     //Segunda parte
        if (aux2 == "inseto") {
            if (aux3 == "hematofago") {
                console.log("pulga");
            } else {
                console.log("lagarta");
            } 
        } else {
        if (aux2 == "anelideo") {
            if (aux3 == "hematofago") {
                console.log("sanguessuga")
            } else {
                console.log("minhoca");
            }
        }
    }
}