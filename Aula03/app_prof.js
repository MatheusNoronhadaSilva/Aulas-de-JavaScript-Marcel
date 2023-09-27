var readline = require('readline');




var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




entradaDados.question('Digite o nome do aluno: ', function(nomeAluno){
    let nome = nomeAluno




    entradaDados.question('Digite o curso do aluno: ', function(cursoAluno){
        let curso = cursoAluno




        entradaDados.question('Digite a disciplina do aluno: ', function(disciplinaAluno){
            let disciplina = disciplinaAluno




            entradaDados.question('Digite a nota 1: ', function(nota1Aluno){
                let nota1 = nota1Aluno.replace(',','.')




                entradaDados.question('Digite a nota 2: ', function(nota2Aluno){
                    let nota2 = nota2Aluno.replace(',','.')
                    // replace permite encontrar um caractere, caso este caracter estiver
                    //presente no que o usuário digitar, ele pode trocar para outro




                    entradaDados.question('Digite a nota 3: ', function(nota3Aluno){
                        let nota3 = nota3Aluno.replace(',','.')




                        entradaDados.question('Digite a nota 4: ', function(nota4Aluno){
                            let nota4 = nota4Aluno.replace(',','.')




                            var media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4




                            if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
                                console.log('\nERRO: Todas as notas devem ser preenchidas')
                                entradaDados.close()
                    
                            } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                                //isNaN serve para verfificar se uma variável é um número
                              console.log('\nERRO: Todas as notas devem ser números')
                              entradaDados.close()

                            } else if ( (nota1 > 10) || (nota1 < 0) || (nota2 >10) || (nota2 < 0) || (nota3 > 10) || (nota3 < 0) || (nota4 > 10) || (nota4 < 0)) {
                                console.log('\nERRO: Todas as notas devem ser 0 ou 10')
                                entradaDados.close()
                            } if (media >= 7) {
                                console.log('\nVocê foi aprovado!!')
                                console.log('\nNome: ' + nome + '\nCurso: ' + curso + '\nDiciplina ' + disciplina + '\nNotas: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '\nMédia: ' + String(media.toFixed(1)).replace('.',','))
                                entradaDados.close()
                            } else if (media > 5 && media < 7) {
                                console.log('\nVocê esta em exame')
                                console.log('\nNome: ' + nome + '\nCurso: ' + curso + '\nDiciplina ' + disciplina + '\nNotas: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '\nMédia: ' + String(media.toFixed(1)).replace('.',','))
                                entradaDados.close()
                            } else if (media < 5){
                                console.log('\nVocê está reprovado')
                                console.log('\nNome: ' + nome + '\nCurso: ' + curso + '\nDiciplina ' + disciplina + '\nNotas: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '\nMédia: ' + String(media.toFixed(1)).replace('.',','))
                                entradaDados.close()
                            }else{
                                console.log('\nNome: ' + nome + '\nCurso: ' + curso + '\nDiciplina ' + disciplina + '\nNotas: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '\nMédia: ' + String(media.toFixed(1)).replace('.',','))
                                //String() - converte um tipo de dados para caracter
                                //Number() - converte um tipo de dados para numero real ou inteiro
                                //rplace() - localiza um caracter e substitui por outro
                                //toFixed() - permite limitar a qtde de casas decimais em um numero
                            }
                        })
                    })
                })
            })
        })
    })
})