// Problema "glicose"
// Fazer um programa para ler a quantidade de glicose
// no sangue de uma pessoa e depois mostrar na tela a
// classificação desta glicose de acordo com a tabela de
// referência ao lado.

let glicose, taxa;
glicose = parseFloat(prompt('Digite a medida de glicose'));

if(glicose <= 100) {
    console.log('Normal');
} else if(glicose <= 140) {
    console.log('Elevado');
} else {
    console.log('Diabetes');
}