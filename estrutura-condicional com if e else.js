const numero = 3;
const numeroPar = (numero % 2) === 0;

console.log(numeroPar);

if (numero === 0){
    console.log('Formato Invalido!');    
}

else if (numeroPar) {
    console.log('Executei');

}else {
    console.log('Não e Par');
}


