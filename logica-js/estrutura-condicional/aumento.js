// Problema "aumento" (adaptado de URI 1048)
// Uma empresa vai conceder um aumento percentual de
// salário aos seus funcionários dependendo de quanto
// cada pessoa ganha, conforme tabela ao lado. Fazer um
// programa para ler o salário de uma pessoa, daí mostrar
// qual o novo salário desta pessoa depois do aumento,
// quanto foi o aumento e qual foi a porcentagem de
// aumento.

let salario, novoSalario, aumento, porcentagem;
salario = parseFloat(prompt('Digite o salário da pessoa'));

if(salario <= 1000.00) {
    aumento = (salario / 100) * 20;
    novoSalario = salario + aumento;
    porcentagem = '20%';

} else if(salario <= 3000.00) {
    aumento = (salario / 100) * 15;
    novoSalario = salario + aumento;
    porcentagem = '15%';
} else if(salario <= 8000.00) {
    aumento = (salario / 100) * 10;
    novoSalario = salario + aumento;
    porcentagem = '10%';
} else {
    aumento = (salario / 100) * 5;
    novoSalario = salario + aumento;
    porcentagem = '5%';
}

console.log('Novo salário = R$ ' + novoSalario.toFixed(2));
console.log('Aumento: ' + aumento.toFixed(2));
console.log('Porcentagem = ' + porcentagem);