import {writeFile, readFile} from 'fs/promises'

class ProductService {

    // AEP Ex: 1 - Passo 1 -> a service está recebendo um dado (data) - que vai ser inserido lá no Insomnia/Postman - como parâmetro e escrever isso no arquivo de texto (.json)
    async createProduct(data){
        try{
            console.log('Salvando os produtos em JSON')
            await writeFile('products.json', JSON.stringify(data,null,2))    
        }
        catch(error){
            console.log(error);
        }
    }

    // AEP Ex: 2 - Passo 1 -> a service vai ler o que está np arquivo products.json e jogar isso na constante listaprodutos
    async readProducts(){
        
        // Criei uma constante que vai receber a função que está lendo o arquivo products.json
        const listaprodutos = await readFile('products.json',"utf-8")
        
        // Retorno o listaprodutos como JSON
        return JSON.parse(listaprodutos)
        
    }

    // AEP Ex: 4 - Passo 1 -> a service vai ler o que está na constante listaprodutos, fazer o map (percorrer cada item do listaprodutos) e montar um novo objeto com as informações que eu quero 
    async stockList(){
        const listaprodutos = await this.readProducts()

        const stock = listaprodutos.map(produto => {
            
            console.log(produto)
            let obj = {
                nome: produto.nome,
                qtde: produto.qtde,
                preco: produto.preco,
                valor_estoque: produto.qtde * produto.preco
            }   
            return obj         
        })
        return stock
    }

    // AEP EXTRA 
    async sumStockProducts (){

        const listaEstoque = await this.stockList()

        const valorEstoque = listaEstoque.reduce((acc,atual) =>{
            return acc + atual.valor_estoque
        },0)
        return valorEstoque
    }


}

export default new ProductService()