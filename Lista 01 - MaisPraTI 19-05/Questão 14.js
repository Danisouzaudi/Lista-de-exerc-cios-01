let numero = Number(prompt('Digite um número positivo maior que 0, para calcular o fatorial: '));
let fat = 1;

if (numero <= 0 || isNaN(numero)) {
    console.log('O número inserido não corresponde ao esperado! Digite um número maior que 0.');
} else {
    for (let i = 1; i <= numero; i++) {
        fat *= i;
    }
    console.log(`O fatorial de ${numero} é: ${fat}`);
}
