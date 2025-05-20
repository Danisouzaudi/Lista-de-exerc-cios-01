let PN = Number(prompt('Digite o primeiro número: '))
let SN = Number(prompt('Digite o segundo número: '))


if (isNaN(PN) || isNaN(SN)) {
    console.log('Digite um número inteiro, por favor!')
}else if(PN === SN){
    console.log('Por favor, digite números diferentes!')
}else{
    let numeros = [PN, SN]
    numeros.sort((a, b) => a - b)
    console.log(`Ordem crescente: ${numeros[0]}, ${numeros[1]}`)
}