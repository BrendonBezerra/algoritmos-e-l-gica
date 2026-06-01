// Importar módulo (para rolar algoritmos)
const prompt = require('prompt-sync')();

// Título
console.log('---Validação de Senha---');
console.log("");

let senha;

// Estrutura REPITA...ATÉ (DO...WHILE)
do {
    senha = prompt("Digite a senha: ");

    if (senha !== "1234") {
        console.log("Senha incorreta! Tente novamente.");
        console.log(""); // Linha em branco
    }

} while (senha !== "1234");

// Mensagem final após sair do loop
console.log("Acesso permitido!");
