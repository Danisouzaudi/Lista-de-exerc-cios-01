console.log(`
Escolha o que deseja fazer:
1 - Mensagem de Boas-Vindas
2 - Calcular o dobro do número
3 - Sair
`)

const menu = Number(prompt(`Digite o número da opção desejada: `))

switch(menu){
    case 1:
        console.log('Olá! Seja bem-vindo ao programa.')
        break
    case 2:
       const numero = Number(prompt("Digite um número: "));
            console.log(`O dobro de ${numero} é ${numero * 2}.`);
            break;
    case 3:
        console.log('Encerrando o programa, até a próxima!')
        break
    default:
        console.log('Por favor, selecione uma opção válida!')
        break
}