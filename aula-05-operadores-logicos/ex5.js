//  Instrução para poder rodar
//  npm install prompt-sync

//  Importar módulo
const prompt = require('prompt-sync') ()

let salario = parseFloat(prompt("Qaual é o seu salário? R$ "))
let Fiador = prompt("Você possuí fiador? (s/n): ") === "s"  
let nomeSerasa = prompt("Seeu nome está sujo no Serasa? (s/n)") === "s"

if(!nomeSerasa && (salario > 2000 || Fiador)) { 
    console.log("Empréstimo autorizado")
} else {
    console.log("Empréstimo não autorizado")
}