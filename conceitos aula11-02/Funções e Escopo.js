// Função tradicional
function saudacao(nome) {
    return "Olá, " + nome + "!";
}
console.log(saudacao("Maria"));

// Arrow Function (função moderna)
const dobro = (num) => num * 2;
console.log(dobro(5)); // Retorna 10

// Escopo de variáveis
let global = "Sou global";
function testarEscopo() {
    let local = "Sou local";
    console.log(global); // Acessa variável global
    console.log(local); // Acessa variável local
}
testarEscopo();

// console.log(local);  // Erro! 'local' não está acessível fora da função
// Callback function (introdução)
function processar(callback) {
    console.log("Processando...");
    callback();
}
processar(() => console.log("Finalizado!"));

// Função assíncrona (introdução)
async function pegarDados() {
    return "Dados recebidos!";
}
pegarDados().then(console.log); // Usa .then para lidar com a resposta