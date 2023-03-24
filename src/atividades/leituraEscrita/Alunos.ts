import {writeFile, readFile} from 'fs/promises'

const alunosArr = [
    {
        nome: 'Luana',
        idade: '19',
        ra: '00000-01'
    },
    {
        nome: 'Mykaelly',
        idade: '20',
        ra: '00000-02'
    },
    {
        nome: 'Gabriel',
        idade: '23',
        ra: '00000-03'
    },
    {
        nome: 'Wilson',
        idade: '102',
        ra:'00000-00'
    }
]

export class Alunos{
    private alunos = alunosArr

    constructor(){

    }

    writeStudent(data){

        try{
            console.log('Criando a lista de alunos...');
            
            writeFile('alunos.json',JSON.stringify(this.alunos,null,2)) 
        } catch(err){
            console.log('Erro ao tentar escrever arquivo',err);
        }

    }

   async readStudent(){
       const leuMemo = await readFile('alunos.json', "utf-8")
       console.log('Será que leu mesmo?', JSON.parse(leuMemo));

       let result = JSON.parse(leuMemo)
       let findLuana = result.find(pessoa => pessoa.nome === 'Luana')

       console.log('Buscando o nome da primeira posição do array(posição 0):',result[0].nome);
       console.log('Usando o find: ',findLuana);
       
    }
}



