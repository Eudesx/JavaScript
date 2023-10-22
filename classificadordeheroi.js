let xp = "10.000"
let nomeHeroi = "EudesX"
const inicio = "Seja bem vindo ao classificador de heroi"
    console.log(inicio)

if(xp === "1.000"){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + xp + " = FERRO")
}
if(xp === "1.001" || xp === "2.000"){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + xp + " = Bronze")
}
if(xp === "2.001" || xp === "5.000"){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + xp + " = Prata")
}
if(xp === "6.001" || xp === 7.000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + xp + " = Ouro ")
}
if(xp == 7.001 || xp === "8.000"){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + xp + " = Platina")
}
if(xp === 8.001 || xp == "9.000"){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + xp + " = Ascendente")
}
if(xp === 9.001 || xp == "10.000"){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + xp + " = Imortal")
}
if(xp >= 10.001){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + xp + " = Radiante")
}