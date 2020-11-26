// Problema "temperatura"
// Deseja-se converter uma medida de temperatura da escala Celsius para Fahrenheit ou vice-versa. Para
// isso, você deve construir um programa que leia a letra "C" ou "F" indicando em qual escala vai ser
// informada uma temperatura. Em seguida o programa deve mostrar a temperatura na outra escala comduas casas decimais. A seguir é dada a fórmula para converter de Fahrenheit para Celsius (você deve
// 5
// deduzir a fórmula de Celsius para Fahrenheit): C  ( F  32 )

let F, C, escala;
escala = prompt('Você vai digitar a temperatura em qual escala (C/F) ?');

if(escala == 'F') {
     F = parseFloat(prompt('Digite a temperatura em Fahrenheit'));

    C = 5.0 / 9.0 * (F - 32.0);
    console.log('Temperatura equivalente em Celsius: ' + C.toFixed(2));
} else {
    C = parseFloat(prompt('Digite a temperatura em Celsius'));

    F = C * 9.0 / 5.0 + 32.0;
    console.log('Temperatura equivalente em Fahrenheit: ' + F.toFixed(2));
}