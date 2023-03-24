//1- Importamos o express
import express from 'express' // framework node js para backend 
import cors from 'cors' // Permite requisições de domínios diferentes 

// 19 - Importamos a constante Routes de routes.ts
import routes from './routes'
import mongoose from 'mongoose'


// 2- criamos uma classe App que irá conter e prover para quem chama-la as configurações da aplicação
class App {

    // 3 - Criou um atributo publico chamado express que é do TIPO express.Application
    public express: express.Application


    // 4- Criamos um construtor para a nossa classe 
    public constructor() {

        // 5 - Estamos atribuindo para o atributo express, uma instância de express(), para que assim acesse seus métodos
        this.express = express()

        // 8 - Chamamos no construtor o método middleware, ou seja, quem instaciar essa classe já irá executar esse método
        this.middleware()  // Função interceptadora
        //this.database()

        // 22 - Estamos chamando o método routes, e assim que essa classe for instanciada, ela já executará o método routes
        // OBS: Por isso, quando o server for executado ele saberá quais são as rotas da minha aplicação 
        this.routes()
    }

    // 6 - Criamos um método chamado middleware
    public middleware(): void {
        // 7 - Quem chama o método middlaware estáutilizando o método use() do express, para informar ao framework que ele deve entender requisições e respostas no formato json
        this.express.use(express.json()) // falando pro express entender json 
        this.express.use(cors()) 
    }

    private async database(){

        try{
            mongoose.set("strictQuery",true)
            await mongoose.connect('mongodb+srv://luanaaguilar:vitoraugusto@cluster0.inc9zr1.mongodb.net/?retryWrites=true&w=majority')
            console.log('Connect database success')
        } catch(err){
            console.error('Connect database fail, error:',err)
        }

    }

    // 20 - Criamos um método chamado routes 
    public routes(): void {
        // 21 - Estamos falando para o express utilizar o que está na constante routes como uma configuração 
        this.express.use(routes)
    }
}

// 9 - Estamos exportando a classe App já instanciada e já utilizando a propriedade express, ou seja, quem chama essa classe automaticamente já 
// utiliza todos os métodos de express
export default new App().express