// recebe uma função como parâmetro  e essa função irá retornar um novo array de acordo com o que passou na condição do filtro

const carrinho = [
    {nome: 'Caneta',qtde: 10, preco: 7.99},
    {nome: 'Impressora',qtde: 0, preco: 649.50},
    {nome: 'Caderno',qtde: 4, preco: 27.10},
    {nome: 'Lapis',qtde: 3, preco: 5.82},
    {nome: 'Tesoura',qtde: 1, preco: 19.20},

]

// 'itensValidos' vai receber cada item do carrinho e filtrar quem tem a quantidade maior que 1
const itensValidos = carrinho.filter(item => item.qtde > 1)
console.log(itensValidos)

// 'itensValidosNomes' vai receber o nome (por conta da função map) de cada item do carrinho e filtrando quem tem a quantidade maior que 1
const itensValidosNomes = carrinho.filter(item => item.qtde > 1).map(item => item.nome)
console.log(itensValidosNomes)

