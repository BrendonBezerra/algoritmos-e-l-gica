//  Instrução para poder rodar
//  npm install prompt-sync

//  Importar módulo
const prompt = require('prompt-sync') ()

//  Lógica
let Usuario = prompt("Informe o nome de usuário: ");
let senha = prompt("Informe a senha de usuário: ");
console.log(""); // Linha em branco

// Referências
let loginBanco = "Brendon";
let senhaBanco = "123";

// Condicional SE + E
if (Usuario === loginBanco && senha === senhaBanco) {
    console.log("Acesso autorizado!")
} else {
    console.log("Acesso negado! Tente novamente mais tarde.")
}