//Desafios JavaScrip têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : Lê UMA linha com dado(s) de esntrada (inputs) do usuário;
//- "print": Imprime um texto de saída (output), pulando linha.

//Lê os valores de Entrada:
const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

//Calcula o imposto através da função "calcularImposto":
const valorImposto = calcularImposto(valorSalario);
//Calcula e imprime a saída (com 2 casas decimais):
const saida = valorSalario - valorImposto + valorBeneficios;

//Função útil para calculo do imposto (baseado nas aliquotas).
function calcularImposto(salario) {
    let aliquota = 0;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
    } else if (salario >= 1100 && salario <= 2500.00) {
        aliquota = 0.10;
    } else {
        aliquota = 0.15;
    }
    return aliquota * salario;
}

