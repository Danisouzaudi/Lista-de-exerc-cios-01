let quantidade = Number(prompt('Quantas maçãs foram adquiridas? '))
let total = 0

if(isNaN(quantidade) || quantidade <= 0){
    console.log('Por favor digite um número válido!')
}else if(quantidade >= 12){
    total = (quantidade*0.25)
    console.log(`Total da compra de ${quantidade} maçãs é de R$ ${total.toFixed(2)}`)
}else{
    total = (quantidade*0.30)
    console.log(`Total da compra de ${quantidade} maçãs é de R$ ${total.toFixed(2)}`)
}