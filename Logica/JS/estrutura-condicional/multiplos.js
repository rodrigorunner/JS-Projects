// Fazer um programa para ler dois números inteiros, e dizer se um número é múltiplo do outro. Os
// números podem ser digitados em qualquer ordem.

let a, b;
a = 24;
b = 6;

if(a % b == 0 || b % a == 0) {
    console.log('São multiplos');
}