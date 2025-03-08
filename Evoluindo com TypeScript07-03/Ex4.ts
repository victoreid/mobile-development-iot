interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}


interface Usuario {
    nome: string;
    email: string;
}


class RepositorioUsuarios implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];

    salvar(dado: Usuario): void {
        this.usuarios.push(dado);
    }

    obterTodos(): Usuario[] {
        return this.usuarios;
    }
}


const repo = new RepositorioUsuarios();
repo.salvar({ nome: "João", email: "joao@email.com" });
repo.salvar({ nome: "Maria", email: "maria@email.com" });

console.log("Usuários cadastrados:", repo.obterTodos());
