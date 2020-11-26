// Problema "operadora"
// Uma operadora de telefonia cobra R$ 50.00 por um plano básico que dá direito a 100 minutos de
// telefone. Cada minuto que exceder a franquia de 100 minutos custa R$ 2.00. Fazer um programa para
// ler a quantidade de minutos que uma pessoa consumiu, daí mostrar o valor a ser pago.

let planoBasico, minutos, total;

minutos = parseFloat(prompt('Digite a quantidade de minutos'));

planoBasico = 50.00;

if(minutos > 100) {
    total = planoBasico + 2 * (minutos - 100);
} else {
    total = planoBasico;
}

console.log('Valor a pagar: R$ ' + total.toFixed(2));
