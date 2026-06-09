const prompt = require("prompt-sync") ()

console.log('')

let precos = [];

for (let i = 0; i < 6; i++) {
    precos[i] = parseFloat(prompt(`Digite o preço do produto ${i + 1}: `));
}

let maior = precos[0];
let menor = precos[0];

for (let i = 1; i < 6; i++) {
    if (precos[i] > maior) {
        maior = precos[i];
    }

    if (precos[i] < menor) {
        menor = precos[i];
    }
}

console.log(`Maior preço:  R$ ${maior.toFixed(2)}`);
console.log(`Menor preço:  R$ ${menor.toFixed(2)}`);