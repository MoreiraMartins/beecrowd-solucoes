var input = require('fs').readFileSync('1012/1012.txt', 'utf8');
var lines = input.split('\n');

let valores1 = lines[0].split(' ');
let a1 = parseFloat(valores1[0]);
let b1 = parseFloat(valores1[1]);
let c1 = parseFloat(valores1[2]);

let valores2 = lines[1].split(' ');
let a2 = parseFloat(valores2[0]);
let b2 = parseFloat(valores2[1]);
let c2 = parseFloat(valores2[2]);

let pi = 3.14159;

console.log("TRIANGULO: " + (a1 * c1/2).toFixed(3));
console.log("CIRCULO: " + (c1**2 * pi).toFixed(3)); // c1**2 equivale a c1²
console.log("TRAPEZIO: " + ((a1 + b1) * c1 / 2).toFixed(3));
console.log("QUADRADO: " + (b1**2).toFixed(3));
console.log("RETANGULO: " + (a1 * b1).toFixed(3));
