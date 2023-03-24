import { Alunos} from "./Alunos";

async function main() {

    const novosAlunos = new Alunos()

    //novosAlunos.writeStudent()  - Foi comentado para cada vez que rodar o 'npm start' não ficar criando o arquivo alunos.json

    novosAlunos.readStudent()
    
}

main ()