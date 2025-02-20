// Array de números
const numeros = [2, 3, 4, 5];

// Usando reduce() para calcular o produto de todos os números
const produto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);

// Exibindo o resultado
console.log(produto); // 120 (pois 2 * 3 * 4 * 5 = 120)

