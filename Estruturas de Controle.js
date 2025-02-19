// Condicional if-else
let hora = 14;
if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}
// Switch-case para múltiplas condições
let cor = "azul";
switch (cor) {
    case "vermelho":
        console.log("A cor escolhida foi vermelho.");
        break;
    case "azul":
        console.log("A cor escolhida foi azul.");
        break;
    default:
        console.log("Cor não reconhecida.");
}
// Laços de repetição
// For - executa um bloco de código várias vezes
for (let i = 0; i < 5; i++) {
    console.log("Contador:", i);
}
// While - executa enquanto a condição for verdadeira
let contador = 0;
while (contador < 3) {
    console.log("Número:", contador);
    contador++;
}