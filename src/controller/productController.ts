import { Request, Response } from "express";
import productService from "../service/productService";

class productController{

    // AEP Ex: 1 - Passo 3 -> - Método que vai ser chamado pela rota /products
    async create(req: Request, res: Response){

        // AEP Ex: 1 - Passo 2 -> - Esse cara é o service e eu estou chamando o createProduct da classe ProductService
        await productService.createProduct(req.body)
        return res.status(201).send()

    }

    // AEP Ex: 2 - Passo 2 -> Método que vai ser chamado pela rota /products 
    async list(req: Request, res: Response){
        
        // A constante listaprodutos está recebendo a função que chama o service executando o metódo readProducts
        const listaprodutos =  await productService.readProducts()

        // Aqui ele retorna o resultado no postman/insomnia na rota em que está apontando para esse cara no arquivo routes.ts 
        return res.status(200).send(listaprodutos)

    }

    // AEP Ex: 4 - Passo 2 -> Método que vai ser chamado pela rota /products/stock
    async stock(req: Request, res: Response){

        // A constante listaprodutos está recebendo a função que chama o service executando o método stockList
        const listaprodutos = await productService.stockList()

        // Aqui ele retorna o resultado no postman/insomnia na rota em que está apontando para esse cara no arquivo routes.ts 
        return res.status(200).send(listaprodutos)
    }

    async stockValue(req: Request, res: Response){

        // A constante somaEstoque está recebendo a função que chama o service executando o método sumStockProducts
        const somaEstoque = await productService.sumStockProducts()

        // Aqui ele retorna o resultado(somaEstoque) no postman/insomnia na rota em que está apontando para esse cara no arquivo routes.ts 
        return res.status(200).json(somaEstoque)
    }
}

export default new productController()