//Desenvolva um algoritmo que mostre um contagem regressiva de 30 até 1, marcando os números que forem divisíveis por 4.
let contagem = "";
for (let i = 30; i >=1; i--)  {  //para cada ";" define uma condição para o "for", o primeiro ponto e vírgula define a inicialização que será usada para a condição, o segundo ponto e vírgula define a condição da variável, e o último é encremento ou decremento para finalizar a condição do "for"
    if (i % 4 === 0) {
        contagem +=`[${i}] `;
    } else {
        contagem += `${i} `;
    }
} 
alert (contagem);