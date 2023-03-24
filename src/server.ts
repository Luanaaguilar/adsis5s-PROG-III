// 10 - Importou a classe App, já instanciada de app.ts
import app from "./app";

// 11 - Criamos uma função main(), que será executada quando o arquivo for chamado | Ela será executada por 1° 
function main() {
    // LEMBRETE: Ao chamar app.listen, já estamos informando ao servidor as configurações que foram feitas em app.ts
    try {
        // 12 - Estamos utilizando o método linten do express para criar um servidor passando como 
        // parâmetro (a porta -> 3000,"dominio" -> localhost, uma função assíncrona e anônima que irá executar 
        // a escrita na mensagem 'starting server' toda vez que o servidor for levantado)
        app.listen(3000, 'localhost', async () => {
            console.log('starting server')
        })
        // 13 - No catch estamos capturando qualquer erro que possa ocorrer na criação do servidor, e printando ele no console
    } catch (err) {
        console.error('Starting server Error', err)
    }
}

// 14 - Estamos executando a função main()
main()