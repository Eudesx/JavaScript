let escolhaDoTreinador = parseInt(gets());
let pokemonEscolhido; 

// Implementação das condições necessárias para a solução do desafio
if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";
} else if (escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else {
    pokemonEscolhido = "Mewtwo";
}

// Imprime o Pokémon escolhido
print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");