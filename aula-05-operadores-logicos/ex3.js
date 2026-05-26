//  Instrução para poder rodar
//  npm install prompt-sync

//  Importar módulo
const prompt = require('prompt-sync') ()
 let esgotado = prompt("O produto está esgotado? (s/n)").toLocaleLowerCase();

 if(esgotado === "n") {
    console.log("Produto disponível para venda")
 } else{
    console.log("Por favor, reabasteça o estoque")
 }