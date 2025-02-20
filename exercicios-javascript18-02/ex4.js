// Função Higher-Order que recebe dois números e uma função de operação
function executarOperacao(num1, num2, operacao) {
    return operacao(num1, num2);
}

// Chamadas da função com diferentes operações matemáticas
console.log(executarOperacao(6, 3, (a, b) => a - b)); // Subtração: 6 - 3 = 3
console.log(executarOperacao(4, 5, (a, b) => a * b)); // Multiplicação: 4 * 5 = 20
console.log(executarOperacao(10, 2, (a, b) => a + b)); // Adição: 10 + 2 = 12
console.log(executarOperacao(8, 4, (a, b) => a / b)); // Divisão: 8 / 4 = 2