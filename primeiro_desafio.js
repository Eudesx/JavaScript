/* Faça um programa para calcular o valor de uma viagem.

Voçe terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustivel do carro por KM;
3 - Distância em KM da viagem;

*/

const precoConbustivel = 5.79;
const KmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / KmPorLitros;
const valorGasto = litrosConsumidos * precoConbustivel;
console.log(valorGasto.toFixed(2));




