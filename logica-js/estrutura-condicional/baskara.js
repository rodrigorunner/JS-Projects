// Problema "baskara"
// Fazer um programa para ler os três coeficientes de uma equação do segundo grau. Usando a fórmula
// de Baskara, calcular e mostrar os valores das raízes x1 e x2 da equação com quatro casas decimais,
// conforme exemplo. Se a equação não possuir raízes reais, mostrar uma mensagem.

let A, B, C, x1, x2, delta;

A = parseFloat(prompt('Coeficiente a'));
B = parseFloat(prompt('Coeficiente b'));
C = parseFloat(prompt('Coeficiente c'));

delta = Math.pow(B, 2) - (4 * A * C);

if(delta < 0 || A === 0) {
    console.log('Esta equação não possui raízes reais');
} else {
    x1 = ((-B) + Math.sqrt(delta)) / (2 * A);
    x2 = ((-B) - Math.sqrt(delta)) / (2 * A);
}

console.log('X1: ' + x1.toFixed(4));
console.log('X2: ' + x2.toFixed(4));
