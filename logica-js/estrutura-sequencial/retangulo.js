// Problema "retangulo"
// Fazer um programa para ler as medidas da base e altura de um retângulo. Em seguida, mostrar o valor
// da área, perímetro e diagonal deste retângulo, com quatro casas decimais, conforme exemplos.
var base, altura, area, perimetro, diagonal;
base = 4.0;
altura = 5.0;

area = base * altura;
perimetro = (2 * base) + (2 * altura);
diagonal = Math.sqrt((base * base) + (altura * altura));

console.log('ÁREA: ' + area.toFixed(4));
console.log('PERIMETRO: ' + perimetro.toFixed(4));
console.log('DIAGONAL: ' + diagonal.toFixed(4));