// Problema "lanchonete" (adaptado de URI 1038)
// Uma lanchonete possui vários produtos. Cada produto possui um código
// e um preço. Você deve fazer um programa para ler o código e a
// quantidade comprada de um produto (suponha um código válido), e daí
// informar qual o valor a ser pago, com duas casas decimais, conforme
// tabela de produtos ao lado.

let codigo, quantidade, valor;
codigo = parseInt(prompt('Digite o código do produto comprado'));
quantidade = parseInt(prompt('Quantidade comprada'));

switch(codigo) {
    case 1:
        valor = quantidade * 5.00;
    break;

    case 2:
        valor = quantidade * 3.50;
    break;

    case 3:
        valor = quantidade * 4.80;
    break;

    case 4:
        valor = quantidade * 8.90;
    break;

    case 5:
        valor = quantidade * 7.32;
    break;

    default:
        console.log('Código inválido.');
}

console.log('Valor a pagar: R$ ' + valor.toFixed(2));