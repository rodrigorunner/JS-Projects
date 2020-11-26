// Problema "troco"
// Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia.
// O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto,
// e o valor em dinheiro dado pelo cliente (suponha que haja dinheiro suficiente). Seu programa deve
// mostrar o valor do troco a ser devolvido ao cliente.

var precoUnitario, quantidade, dinheiroCliente, troco;

precoUnitario = 30.00;
quantidade = 3;
dinheiroCliente = 100.00;

troco = dinheiroCliente - precoUnitario * quantidade; 

console.log('TROCO: ' + troco.toFixed(2) + ' reais');