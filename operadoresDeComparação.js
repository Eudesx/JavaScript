let marca = "Aplle"
console.log(marca !== "Sansung")

// = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo
// !== é diferente?

//guardar o valor em uma variável de resultado TRUE?FALSE
let marca2 = "Aplle"
let resultado = marca2 === "Sansung"

console.log(resultado)

//guardar o valor em uma variável de resultado TRUE?FALSE
let cpfBloqueado = "111.222.333-0"
let cpfUsuario = "111.222.333-1"
let ehcpfBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuario está barrado? " + ehcpfBloqueado)

let cpfPermitido = "000.000.111-01"
let CPFUsuario = "000.000.111.02"
let CPFBloqueado = cpfPermitido !== CPFUsuario

console.log("O cpf entá bloqueado? " + CPFBloqueado)

let idadeMinima = 18
let idadeUsuario = 18
let idadeValida = idadeUsuario >= idadeMinima

console.log("Ele pode sé alistar? " + idadeValida)

let idadeDeSaida = 50
let idadeUsuario2 = 49
let resultado2 = idadeUsuario > idadeDeSaida

console.log("O usuario pode ser despensado? " + resultado)