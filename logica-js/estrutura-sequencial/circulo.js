// Problema "circulo"
// Fazer um programa para ler o valor "r" do raio de um círculo, e depois mostrar o valor da área do
// círculo com três casas decimais. A fórmula da área do círculo é a seguinte: area = π. r . Você pode
// usar o valor de π fornecido pela biblioteca da sua linguagem de programação, ou então, se preferir, use
// diretamente o valor 3.14159.

var area, raio;
raio = 13.2;
area = Math.PI * (raio * raio);

console.log('ÁREA: ' + area.toFixed(3));
