const  mensagem = "Mensagem De: NARUTO, Continue treinando para melhorar! "

let userName = getFistName(" Uzumaki-Naruto-Hokage ", "-")
console.log("Seja, bem vindo" + userName)

userName = getFistName("Hashirama Senju Tobirama", " ")
console.log("Seja bem vindo " + userName)

function getFistName(name, splitChar){
    let fistName = name.split(splitChar)[0]
         return fistName
}

virarHokage(userName);

function virarHokage(UserName){
    if(userName === "Uzumaki")
        console.log("Voçê se tornou HOKAGE " + userName)
}
    if(userName === "Hashirama"){
        console.log("Voçê ainde não esta pronto para virar HOKAGE " + userName)
    }
console.log(mensagem)
        

function somar(numero1, numero2) {
    return numero1 + numero2;
}

let resultado = somar(10, 3);
console.log("A soma é: " + resultado);