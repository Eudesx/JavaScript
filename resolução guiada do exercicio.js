console.log('+------BEM VINDO AO POSTO SEU DINHEIRO E NOSSA ALEGRIA------+')

const precoDoEtanol = 5.79;
const precoDaGasolina = 6.66;
const precoDoDisel = 3.50
const precoDoGas = 2.50
const precoBioDisel = 1.50

const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoDeCombustivel = 'Gas';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoDeCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoDoEtanol;
    console.log('Voçê Gastou ' + valorGasto.toFixed(2) + ' De Etanol.')

} else if (tipoDeCombustivel === 'Gasolina') {
    const valorGasto = litrosConsumidos * precoDaGasolina;
    console.log('Voçê Gastou ' + valorGasto.toFixed(2) + ' De Gasolina.')

} else if (tipoDeCombustivel === 'Disel') {
    const valorGasto = litrosConsumidos * precoDoDisel;
    console.log('Voçê Gastou ' + valorGasto.toFixed(2) + ' De Disel.')

} else if (tipoDeCombustivel === 'Gas') {
    const valorGasto = litrosConsumidos * precoDoGas;
    console.log(' Voçê Gastou ' + valorGasto.toFixed(2) + ' De Gás.')

} else if (tipoDeCombustivel === 'biodisel') {
   const  valorGasto = litrosConsumidos * precoBioDisel;
   console.log(' Voçê Gastou ' + valorGasto.toFixed(2) + ' De Bio Disel.') 
}





