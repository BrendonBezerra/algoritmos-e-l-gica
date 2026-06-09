const prompt = require("prompt-sync") ()

nota = parseFloat(prompt("Digite a nota do próximo aluno (ou -1 para sair): "));


console.log(""); // Linha em branco para organizar o resultado

// Validação para evitar divisão por zero caso o usuário digite -1 de primeira
if (contador > 0) {
    let media = soma / contador;
    console.log(`Quantidade de notas digitadas: ${contador}`);
    console.log(`A média aritmética das notas é:  ${media.toFixed(2)}`);
} else {
    console.log("Nenhuma nota foi registrada.");
}