// Problema "dardo"
// No arremesso de dardo, o atleta tem três chances para lançar o dardo à maior distância que conseguir.
// Você deve criar um programa para, dadas as medidas das três tentativas de lançamento, informar qual
// foi a maior.

let a, b, c, maior;

a = parseFloat(prompt('Distância A'));
b = parseFloat(prompt('Distância B'));
c = parseFloat(prompt('Distância C'));

if(a > b && a > c) {
    maior = a;
} else if(b > c) {
    maior = b;
} else {
    maior = c;
}
console.log('MAIOR DISTÂNCIA: ' + maior.toFixed(2));