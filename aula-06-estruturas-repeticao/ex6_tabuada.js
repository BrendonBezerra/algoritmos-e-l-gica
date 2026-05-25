const prompt = require(prompt-sync) ()

console.log("---Tabuada---")

let numero = Number(prompt("Digite um número para que seja gerado a tabuada: "))

for(let i = 1; i <= 10; i ++) {
    console.log(numero + " X " + i + " = "(numero * 1))
}