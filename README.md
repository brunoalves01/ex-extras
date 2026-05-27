# 🔢 Atividade: Contagem Regressiva Customizada

Este projeto apresenta um algoritmo simples em JavaScript desenvolvido para realizar uma contagem regressiva de 30 até 1, aplicando uma formatação especial para os números que são divisíveis por 4.

## 📝 Descrição do Desafio

O objetivo da atividade é criar um laço de repetição que decresça de 30 a 1 e verifique cada número:
- Se o número for **divisível por 4**, ele deve ser destacado entre colchetes: `[X]`.
- Se não for, o número deve ser exibido normalmente.
- Ao final, o resultado completo deve ser exibido em um alerta (`alert`).

## 💻 Código Fonte

```javascript
let contagem = "";

// O laço 'for' é dividido por três partes separadas por ponto e vírgula (;):
// 1ª: Inicialização da variável (let i = 30)
// 2ª: Condição de parada (i >= 1)
// 3ª: Decremento da variável a cada iteração (i--)
for (let i = 30; i >= 1; i--) { 
    
    // Verifica se o resto da divisão de 'i' por 4 é igual a 0
    if (i % 4 === 0) {
        contagem += `[${i}] `; // Destaca o número divisível por 4
    } else {
        contagem += `${i} `;   // Mantém o número normal
    }
} 

// Exibe o resultado final na tela
alert(contagem);