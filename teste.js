let xp = 7002
let nomeHeroi = "EudesX";
const inicio = "Seja bem-vindo ao classificador de herói";
console.log(inicio);

if (xp === 1000) {
    console.log("O Herói de nome" + nomeHeroi + "está no nível de" + xp + "= FERRO");
} else if (xp >= 1001 && xp <= 2000) {
    console.log("O Herói de nome" + nomeHeroi + " está no nível de" + xp + "= Bronze");
} else if (xp >= 2001 && xp <= 5000) {
    console.log("O Herói de nome" + nomeHeroi + "está no nível de" + xp +  "= Prata");
} else if (xp >= 6001 && xp <= 7000) {
    console.log("O Herói de nome" + nomeHeroi + "está no nível de" + xp + "= Ouro");
} else if (xp >= 7001 && xp <= 8000) {
    console.log("O Herói de nome" + nomeHeroi + "está no nível de" + xp + "= Platina");
} else if (xp >= 8001 && xp <= 9000) {
    console.log("O Herói de nome" + nomeHeroi + "está no nível de" + xp + "= Ascendente");
} else if (xp >= 9001 && xp <= 10000) {
    console.log("O Herói de nome" + nomeHeroi + "está no nível de" + xp + "= Imortal");
} else if (xp >= 10001 && xp <= 10002) {
    console.log("O Herói de nome" + nomeHeroi + "está no nível de" + xp + "= Radiante");
}
