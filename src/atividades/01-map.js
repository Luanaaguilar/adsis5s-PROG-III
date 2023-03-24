// criando uma constante 'nums'
const nums = [1,2,3,4,5]

// dobro recebe cada item no array acima multiplicando por 2
const dobro = (item) => item * 2
console.log(nums.map(dobro))




// Criando a constante com vários itens 
const nomes = ['Ana','Guilherme','Tiago','Luana','Soldado','Versales']

// Jogando pra constante 'letras' o conteúdo que tem na constante 'nomes' utilizando a função map para aqui no caso pegar a 1ª letra de cada item do array 
const letras = nomes.map(text => text[0])
console.log(letras)




// montando uma constante com um objeto 
const carrinho = [
    {nome: 'Caneta',qtde: 10, preco: 7.99},
    {nome: 'Impressora',qtde: 0, preco: 649.50},
    {nome: 'Caderno',qtde: 4, preco: 27.10},
    {nome: 'Lapis',qtde: 3, preco: 5.82},
    {nome: 'Tesoura',qtde: 1, preco: 19.20},

]

// 1 - Utilizando o map para mostrar somente o nome dos produtor no carrinho
const getNome = carrinho.map(item => item.nome)
console.log(getNome)

// 2 - Exibam um array com a multiplicação da qtde pelo preço 
const getValor = carrinho.map(item => item.qtde * item.preco)
console.log(getValor)
