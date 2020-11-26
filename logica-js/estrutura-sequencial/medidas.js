// Problema "medidas"
// Fazer um programa para ler três medidas A, B e C. Em seguida, calcular e mostrar (imprimir os dados
// com quatro casas decimais):
// a) a área do quadrado que tem lado A
// b) a área do triângulo retângulo que base A e altura B
// c) a área do trapézio que tem bases A e B, e altura C

var A, B, C, areaQuadrado, areaTriangulo, areaTrapezio;

A = 7.13;
B = 8.05;
C = 11.912;

areaQuadrado = A * A;
areaTriangulo = (A * B) / 2;
areaTrapezio = (A + B) / 2 * C;

console.log('Quadrado: ' + areaQuadrado.toFixed(4));
console.log('Triangulo: ' + areaTriangulo.toFixed(4));
console.log('Trapezio: ' + areaTrapezio.toFixed(4));