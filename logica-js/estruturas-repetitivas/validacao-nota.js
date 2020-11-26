// Problema "validacao_de_nota" (adaptado de URI 1117)
// Faça um programa que leia as notas referentes às duas avaliações de um aluno. Calcule e imprima a
// média semestral. Faça com que o algoritmo só aceite notas válidas (uma nota válida deve pertencer ao
// intervalo [0,10]). Cada nota deve ser validada separadamente.

let nota1, nota2, media;

nota1 = parseFloat(prompt('Digite nota1'));

while(nota1 < 0 || nota1 > 10) {
    nota1 = parseFloat(prompt('Nota inválida! Digite outra nota'));
}

nota2 = parseFloat(prompt('Digite nota2'));

while(nota2 < 0 || nota2 > 10) {
    nota2 = parseFloat(prompt('Nota inválida! Digite outra nota'));
}

media = (nota1 + nota2) / 2;
console.log('MÉDIA: ' + media);