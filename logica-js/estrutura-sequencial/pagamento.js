// Problema "pagamento"
// Fazer um programa o nome de um(a) funcionário(a), o valor que ele(a) recebe por hora, e a quantidade
// de horas trabalhadas por ele(a). Ao final, mostrar o valor do pagamento do funcionário com uma
// mensagem explicativa, conforme exemplo.

var nome, valor, quantidadeHoras, total;

nome = 'Rodrigo Regis';
valor = 60.00;
quantidadeHoras = 100.00;

total = valor * quantidadeHoras;

console.log('O pagamento de ' + nome + ' deve ser ' + total.toFixed(2));