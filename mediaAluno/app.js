var calculoMedia = require('./modulo/calculoMedia')

var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Qual o seu nome?: ', function(nomeAluno){

    let aluno = nomeAluno

    entradaDados.question('Qual o nome do seu professor?: ', function(nomeProfessor){

        let professor = nomeProfessor

        entradaDados.question('Qual o seu sexo? (M/F): ', function(sexoAluno){

            let sexoA = sexoAluno.ignorecase
            let nomeA

            entradaDados.question('Qual o sexo do seu professor? (M/F) ', function(sexoProfessor){

                let sexoP = sexoProfessor.ignorecase
                let nomeP

                entradaDados.question('Qual o seu curso?: ', function(cursoAluno){

                    let curso = cursoAluno

                    entradaDados.question('Qual o nome da sua disciplina?: ',  function(disciplinaAluno){

                        let disciplina = disciplinaAluno

                        entradaDados.question('Digite sua nota 1: ', function(nota1Aluno){

                            nota1 = nota1Aluno

                            entradaDados.question('Digite sua nota 2: ', function(nota2Aluno){

                                nota2 = nota2Aluno

                                entradaDados.question('Digite sua nota 1: ', function(nota3Aluno){

                                    nota3 = nota3Aluno

                                    entradaDados.question('Digite sua nota 1: ', function(nota4Aluno){

                                        nota4 = nota4Aluno

                                        let resultado
                                        resultado = calculoMedia.CalculoDaMedia(aluno, professor, curso, disciplina, nota1, nota2, nota3, nota4)
                                        let status
                                        let sexo

                                        switch (sexo){
                                            case sexoA == 'm':
                                            case sexoA == 'M':
                                                nomeA == 'A aluna'
                                            case sexoA == 'f':
                                            case sexoA == 'F':
                                                nomeA == 'O aluno'
                                            case sexoP == 'm':
                                            case sexoP == 'M':
                                                nomeP == 'professor'
                                            case sexoP == 'f':
                                            case sexoP == 'F':
                                                nomeP == 'professora'
                                                default:
                                                break;
                                        }        

                                        if (resultado >= 70) {
                                            status = 'aprovado'
                                        } else if (resultado < 50) {
                                            status = 'reprovado'
                                        } else {
                                            status = 'enviado para o exame'
                                        }
                                        console.log(`${nomeA} ${aluno} foi [${status}] na disciplina ${disciplina}. \nCurso: ${curso} \n${nomeP} ${professor} \n${nomeA} tirou: ${nota1}, ${nota2}, ${nota3}, ${nota4} \nMédia final: ${resultado}`)
                        })
                    })
                })
            })
        })
    })
})
        })
    })
})