console.log("[DIGITE O NOME DO SEU JOGADOR]")

let nickName = "EudesX"
let nomePokemon = "Pikachu"
let nivel = 50

if( nivel === 50){
    console.log("Vamos subir de nivel")
}

if(nickName === "EudesX"){
console.log("Seja bem vindo!" + nickName)
console.log("Vamos escolher seu pokemon")
}else if(nivel < 50){
    console.log("Não pode subir de nivel!")
}
if(nomePokemon === "Pikachu"){
console.log("Voçê escolheu o Pikachu")
if(nivel >= 50)
console.log("Voçê subiu de nivel! PARABÉNS")
else if(nivel < 50)
console.log("Voçê ainda não pode subir de nivel!")

}
if(nickName === "barata"){
    console.log(nickName + " faça login Primeiro para escolher seu pokemon ")
}else if(nickName === "Maria"){
console.log(nickName + " Voçê não tem autorização para logar")
}else if(nickName === "xuxu")
console.log("Vamos terminar seu cadastro ok.")
else{
    console.log(nickName + " Volte a pagina de login!")
}
