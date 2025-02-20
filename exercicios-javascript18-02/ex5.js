// Array de preços dos produtos
const precos = [100, 200, 300, 400];

// Aplicando um desconto de 10% com map()
const precosComDesconto = precos.map(preco => preco * 0.9);

// Exibindo o resultado
console.log(precosComDesconto); // [90, 180, 270, 360]

