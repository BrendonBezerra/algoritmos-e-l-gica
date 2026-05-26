//  Instrução para poder rodar
//  npm install prompt-sync

//  Importar módulo
const prompt = require('prompt-sync') ()

let nota = parseFloat(prompt("Digite a nota do aluno: "));
let frequencia = parseFloat(prompt("Informe a frequência do aluno (0-100): "))

if (nota >= 7.0 && frequencia >= 75) {
    console.log("Aluno a provado");
} else {
    console.log("Aluno reprovado")
}