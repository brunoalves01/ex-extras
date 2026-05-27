//Crie um algoritmo que leia o valor inicial da contagem, o valor final e o incremento, mostrando em seguida todos os valores no intervalo:
//Ex.: Digite o valor inicial: 3
//Digite o valor final: 10
//Digite o incremento: 2
//Contagem: 3, 5, 7, 9, Acabou!

let valorInicial = parseInt(prompt("Digite o valor inicial:"));
let valorFinal = parseInt(prompt("Digite o valor final:"));
let incremento = parseInt(prompt("Digite o incremento:"));  
let contagem = "Contagem total dos números: ";

for (let i = valorInicial; i <= valorFinal; i += incremento) { //para cada ";" define uma condição para o "for", o primeiro ponto e vírgula define a inicialização que será usada para a condição, o segundo ponto e vírgula define a condição da variável, e o último é encremento ou decremento para finalizar a condição do "for"
    contagem += `${i}, `; //+= serve para pegar o valor de uma contagem e apresentar em uma sequência de um após o outro
}   
contagem += "Acabou!";
alert(contagem);

//A interpolação de strings em JavaScript é realizada através de Template Literals (ou Template Strings), utilizando crases (`) em vez de aspas simples ou duplas. Elas permitem inserir variáveis e expressões diretamente na string usando a sintaxe ${expressão}, facilitando a legibilidade e evitando junções de textos e expressões complexas com o operador 