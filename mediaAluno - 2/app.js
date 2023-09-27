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

            entradaDados.question('Qual o sexo do seu professor? (M/F) ', function(sexoProfessor){

                let sexoP = sexoProfessor.ignorecase

                entradaDados.question('Qual o seu curso?: ', function(cursoAluno){

                    let curso = cursoAluno

                    entradaDados.question('Qual o nome da sua disciplina?: ',  function(disciplinaAluno){

                        let disciplina = disciplinaAluno

                        entradaDados.question('Digite sua nota 1: ', function(nota1Aluno){

                            nota1 = nota1Aluno

                            entradaDados.question('Digite sua nota 2: ', function(nota2Aluno){

                                nota2 = nota2Aluno

                                entradaDados.question('Digite sua nota 3: ', function(nota3Aluno){

                                    nota3 = nota3Aluno

                                    entradaDados.question('Digite sua nota 4: ', function(nota4Aluno){

                                        nota4 = nota4Aluno

                                        let resultadoStatus
                                        let nomeA
                                        let nomeP
                                        nomeP = calculoMedia.DefinicaoSexoProfessor(sexoP) 
                                        nomeA = calculoMedia.DefinicaoSexoAluno(sexoA)
                                        resultadoStatus = calculoMedia.CalculoDaMedia(aluno, professor, curso, disciplina, nota1, nota2, nota3, nota4)

                                        console.log(`- - - - - - - - - -\n${nomeA} ${aluno} foi [${resultadoStatus[1]}] na disciplina ${disciplina}. \nCurso: ${curso} \n${nomeP} ${professor} \n${nomeA} tirou: ${nota1}, ${nota2}, ${nota3}, ${nota4} \nMédia final: ${resultadoStatus[0]}\n- - - - - - - - - -`)

                                        if (resultadoStatus[0] >=50 && resultadoStatus[0] <= 69) {
                                            entradaDados.question('Você ficou em exame!!! Qual foi a nota que tirou?: ', function (notaExame){

                                                exame = notaExame
                                                let notaFinal

                                                if (exame == '') {
                                                    console.log('ERRO: As informações não podem ficae vazias')
                                                } else {
                                                    exame = Number(exame)
                                                    notaFinal = (resultadoStatus[0] + exame) / 2
                                                }                                                
                                                if ( notaFinal< 60) {
                                                    console.log( `Que pena, você foi reprovado. Sua nota final foi de: ${notaFinal}`)
                                                } else {
                                                    console.log(`Parabéns! Você foi aprovado. Sua nota final foi de: ${notaFinal}`)
                                                }
                                
                                            })
                                        }
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