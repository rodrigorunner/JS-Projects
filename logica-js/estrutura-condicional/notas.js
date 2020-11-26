// Problema "notas"
// Fazer um programa para ler as duas notas que um aluno obteve no primeiro e segundo semestres de
// uma disciplina anual. Em seguida, mostrar a nota final que o aluno obteve (com uma casa decimal) no
// ano juntamente com um texto explicativo. Caso a nota final do aluno seja inferior a 60.00, mostrar a
// mensagem "REPROVADO", conforme exemplos.

let nota1, nota2, media;
nota1 = parseFloat(prompt('Digite a primeira nota'));
nota2 = parseFloat(prompt('Digite a segunda nota'));

media = nota1 + nota2;
console.log('MEDIA: ' + media);

if(media < 60) {
    console.log('REPROVADO');
}