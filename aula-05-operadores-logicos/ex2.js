//  Instrução para poder rodar
//  npm install prompt-sync

//  Importar módulo
const prompt = require('prompt-sync') ()

let idade = parseInt(prompt("Informe sua idade: "))

if (idade => 65 || idade <5  ) {
console.log("Entrada gratuita")
} else {
    console.log("Pague o ingresso")
}