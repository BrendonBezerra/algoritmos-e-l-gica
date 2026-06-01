// Importar módulo (para rolar algoritmos)
const prompt = require('prompt-sync')();

// Título
console.log('---Tabuada---')
console.log("")

// Pergunta (Qual tabuada gerar)
let numero = Number(prompt('Digite um número para gerar a tabuada: '))

// Laço de repetição (Tabuada)
for (let i = 1; i <= 10; i++) { 
    console.log(numero + " x " + i + " = " + (numero * i))
}