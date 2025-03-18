function inverterArray(array) {
    return [...array].reverse();
}
const numeros = [10, 20, 30, 40, 50];
console.log("Array de números invertido:", inverterArray(numeros));
const strings = ["a", "b", "c", "d", "e"];
console.log("Array de strings invertido:", inverterArray(strings));
