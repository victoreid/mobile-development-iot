function processarResposta(resposta) {
    if (typeof resposta === "string") {
        console.log("Mensagem do servidor:", resposta);
    }
    else if (typeof resposta === "boolean") {
        console.log("Status do servidor:", resposta ? "Sucesso" : "Falha");
    }
}
processarResposta("Operação concluída com sucesso.");
processarResposta(true);
processarResposta(false);
