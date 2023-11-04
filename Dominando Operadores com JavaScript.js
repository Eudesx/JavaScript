let num1 = parseInt(gets());
let num2 = parseInt(gets());

// Calcula o XP ganho com base no nível do monstro e na dificuldade da batalha
const xpGanho = num1 * num2 * 100;

// Imprime a quantidade de XP ganho
print("Voce ganhou " + xpGanho + " XP!");