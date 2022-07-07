function comparaNumeros (num1, num2){
/*    const saoIguais = num 1 === num2;
    const soma = num1 + num2;

    if (saoIguais) {
        return "São Iguais";
    }
    return "Não são iguais"; 

    return saoIguais ? "São iguais" : "Não são iguais";*/

    if(!num1 || !num2) return 'Defina dois numeros!';
    const primeiraFrase = criePrimeiraFrase (num1, num2);
    const segundaFrase = crieSegundaFrase (num1, num2);
    return `${primeiraFrase} ${segundaFrase}`
}
function criePrimeiraFrase(num1, num2){
    let saoIguais = '';

    if (num1 === num2) {
        saoIguais = 'Não';
    }

    return `Os numeros ${num1} e ${num2} ${saoIguais}são iguais.`
}

function crieSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior';
    }
    if(compara20){
        resultado20 = 'maior';
    }
    return `Sua soma é ${soma}, que é ${resultado10} que 10 e menor que ${resultado20} que 20`
}
console.log (comparaNumeros(10, d));