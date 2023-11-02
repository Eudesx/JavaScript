let nome = "naruto"
let cpf = "00000000"
let nivelProcurado = "3000"


coletarDados()
salvarDados()
nivelDeProcurado()

while(nivelProcurado >= 1000){
    salvarDados()
    break;
}
if (nivelProcurado < 1000) {
    console.log("Parando coleta de dados!")
}
    
function coletarDados() {
    if(nome === "naruto" && cpf === "00000000") {
    console.log(nome + " Voçê esta sendo procurado! seu CPF " + cpf)
    
    }   

}
function salvarDados() {
    if (nome === "naruto" || cpf === "00000000") {
        console.log("Salvando arquivos no banco de dados de criminosos!")
    }
    else {
        console.log("Voçê não e procurado")
    }
    
}
function nivelDeProcurado() {
    if(nivelProcurado >= "1000")
    console.log("voçê esta no nivel " + nivelProcurado + " Seu rank de procurado e  [ D ]" )
} 
    if(nivelProcurado <= 100) {
    console.log("Voçê não tem rank de procurado!")
}
