// Problema "media_idades"
// Faça um programa para ler um número indeterminado de dados, contendo cada um, a idade de um
// indivíduo. O último dado, que não entrará nos cálculos, contém um valor de idade negativa. Calcular
// e imprimir a idade média deste grupo de indivíduos. Se for entrado um valor negativo na primeira vez,
// mostrar a mensagem "IMPOSSIVEL CALCULAR".

let idade, media, soma, npessoas;

idade = parseFloat(prompt('Digite as idades'));

if(idade < 0) {
    console.log('IMPOSSIVEL CALCULAR');
} else {
    soma = 0;
    npessoas = 0;
    while(idade >= 0) {
        soma = soma + idade;
        npessoas++;
        idade = parseFloat(prompt('Digite as idades'));
    }
}
media = soma / npessoas;
console.log('MÉDIA: ' + media.toFixed(2));