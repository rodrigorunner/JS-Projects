// Problema "troco_verificado"
// Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia.
// O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto,
// e o valor em dinheiro dado pelo cliente. Seu programa deve mostrar o valor do troco a ser devolvido
// ao cliente. Se o dinheiro dado pelo cliente não for suficiente, mostrar uma mensagem informando o
// valor restante conforme exemplo'.

let unidade, quantidade, dinheiro, troco;

unidade = parseFloat(prompt('Preço unitário do produto'));
quantidade = parseFloat(prompt('Quantidade comprada'));
dinheiro = parseFloat(prompt('Dinheiro recebido'));

if(unidade * quantidade < dinheiro) {
    troco = dinheiro - unidade * quantidade;
    console.log('TROCO: ' + troco.toFixed(2));
} else {
    troco = unidade * quantidade - dinheiro;
    console.log('TROCO: ' + troco.toFixed(2));
    console.log('Dinheiro insuficiente. Faltam ' + troco.toFixed(2) + ' reais');
}