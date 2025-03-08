
interface Multiplicacao {
    (a: number, b: number): number;
}


const multiplicar: Multiplicacao = (a, b) => {
    return a * b;
};


console.log(multiplicar(2, 3));
console.log(multiplicar(5, 7));
console.log(multiplicar(10, 0));
console.log(multiplicar(-4, 3));
