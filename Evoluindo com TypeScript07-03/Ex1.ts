// Definindo a interface Carro
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;  // Propriedade opcional
}

// Criando o objeto meuCarro que implementa a interface Carro
const meuCarro: Carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    motor: '1.8'  // Propriedade opcional, pode ser removida se não for necessária
};

// Exibindo os dados no console
console.log(meuCarro);
