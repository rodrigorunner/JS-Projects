// Problema "combustivel" (adaptado de URI 1134)
// Um posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes.
// Escreva um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma:
// 1.Álcool 2.Gasolina 3.Diesel 4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a
// 4) deve ser solicitado um novo código (até que seja válido). O programa será encerrado quando o
// código informado for o número 4, devendo então mostrar a mensagem "MUITO OBRIGADO", bem
// como as quantidades de cada combustível.

let codigo;

codigo = parseInt(prompt('Informe um codigo (1, 2, 3) ou 4 para parar'));

while(codigo != 4) {
    switch(codigo) {
        case 1:
            console.log('Alcool: 1');
        break;
        
        case 2:
            console.log('Gasolina: 2');
        break;
            
        case 3:
            console.log('Diesel: 3');
        break;
    }        
    codigo = parseInt(prompt('Informe um codigo (1, 2, 3) ou 4 para parar'));
}
console.log('MUITO OBRIGADO!');
            