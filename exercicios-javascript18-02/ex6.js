// Array de idades
const idades = [12, 25, 17, 30, 14, 19, 16];

// Usando filter() para pegar apenas as idades menores de 18 anos
const menoresDeIdade = idades.filter(idade => idade < 18);

// Exibindo o resultado
console.log(menoresDeIdade); // [12, 17, 14]
