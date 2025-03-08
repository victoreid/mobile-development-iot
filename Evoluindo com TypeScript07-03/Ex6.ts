type Estudante = {
    nome: string;
    curso: string;
};

type Trabalhador = {
    empresa: string;
    cargo: string;
};

type EstudanteTrabalhador = Estudante & Trabalhador;

const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Carlos Silva",
    curso: "Engenharia de Software",
    empresa: "Tech Solutions",
    cargo: "Desenvolvedor Júnior"
};

console.log("Dados do Estudante Trabalhador:", estudanteTrabalhador);
