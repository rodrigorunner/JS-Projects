// Problema "multiplos" (adaptado de URI 1044)
// Fazer um programa para ler dois números inteiros, e dizer se um número é múltiplo do outro. Os
// números podem ser digitados em qualquer ordem.

let a, b, multiplos;

a = parseInt(prompt('Digite um número inteiro'));
b = parseInt(prompt('Digite outro número inteiro'));

if(a % b == 0 || b % a == 0) {
    console.log('São múltiplos');
} else {
    console.log('Não são múltiplos');
}