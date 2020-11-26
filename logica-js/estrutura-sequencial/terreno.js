// Fazer um programa para ler as medidas da largura e comprimento de um terreno retangular com uma
// casa decimal, bem como o valor do metro quadrado do terreno com duas casas decimais. Em seguida,
// o programa deve mostrar o valor da área do terreno, bem como o valor do preço do terreno, ambos com
// duas casas decimais, conforme exemplo.
let largura, comprimento, metroQuadrado, area, total;
largura = 10;
comprimento = 30;
metroQuadrado = 200;

area = largura * comprimento;
total = area * metroQuadrado;

console.log('Área do terreno: ' + area.toFixed(2));
console.log('Preço do terreno: ' + total.toFixed(2));