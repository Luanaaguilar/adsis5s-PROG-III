// 15 - Estamos importando o Router do Express 
import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import productController from './controller/productController'
import products from './controller/productController'
import userController from './controller/userController'

// 16 - Criamos uma constante chamada routes e atribuimos a ela uma instancia de Router()
// Anotações: POR QUE ROUTES É UMA CONSTANTE?
// PORQUE 
const routes = Router()

// 17 - Estamos utilizando o método get de Router() e passando como parâmetro o nome da rota e e o que será executado quando ela for chamada
routes.get('/health-check', healthCheckController.check)

routes.get('/users', userController.index)

// AEP Ex: 1 - Passo 4 -> Estou criando uma rota do tipo post, com o nome /products que quando for chamada vai executar o  productController.create
routes.post('/products', productController.create)

// AEP Ex: 2 - Passo 3 -> Estou criando uma rota do tipo get, com o nome /products 
routes.get('/products',productController.list)

// AEP Ex: 4 - Passo 3 -> Estou criando uma rota do tipo get, com o nome /products-stock
routes.get('/products-stock',productController.stock)

// AEP EXTRA  
routes.get('/products-stock-reduce',productController.stockValue)

// 18 - Estamos exportando a constante routes 
export default routes