// Problema "menor_de_tres"
// Fazer um programa para ler três números inteiros. Em seguida, mostrar qual o menor dentre os três
// números lidos. Em caso de empate, mostrar apenas uma vez.

let a, b, c, menor;

a = parseInt(prompt('Primeiro valor'));
b = parseInt(prompt('Segundo valor'));
c = parseInt(prompt('Terceiro valor'));

if(a < b && a < c) {
    menor = a;
} else if(b < c) {
    menor = b;
} else {
    menor = c;
}

console.log(`MENOR: ${menor}`);