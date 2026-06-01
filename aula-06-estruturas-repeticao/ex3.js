// Importar módulo (para rolar algoritmos)
const prompt = require('prompt-sync')();

// Título
console.log('---Soma de Inteiros---')
console.log("")

//soma de inteiros positivos até um número fornecido pelo usuário
let numero = parseInt(prompt("Digite um número inteiro positivo:"));
let soma = 0;
let contador = 1;

// Validação simples para garantir que é positivo
if (numero > 0) {
    while (contador <= numero) {
        soma += contador; // Soma o valor atual do contador
        contador++;       // Incrementa o contador
    }
    console.log("A soma final é: " + soma);
} else {
    console.log("Por favor, digite um número válido maior que 0.");
}