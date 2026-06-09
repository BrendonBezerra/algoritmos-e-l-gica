const prompt = require("prompt-sync") ()

console.log('---- Vetores com loop ----')
console.log("Digite o nome de 5 filmes abaixo: ")
console.log("")

const filmes = []

for (let i=0; i < 5; i++) {
    filmes[i] = prompt(`Digite o nome do ${i + 1}`)
}

console.log("__________________________________________________________")
console.log("")

for (let i = 0; i < 5; i++) {
    console.log(`Nome do ${i + 1}° filme digitado: ${filmes[i]}`)
}