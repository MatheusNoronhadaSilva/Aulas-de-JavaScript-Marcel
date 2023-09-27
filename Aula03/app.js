/*****************************
 * Objetivo: realizar calculo da media escolar de um aluno
 * data: 09/08/23
 * Autor: Matheus
 * versão: 1.0
 */

var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    entradaDados.question('digite o nome do(a) aluno(a): ', function(nomeAluno){

        var nome = nomeAluno

        entradaDados.question('digite o curso do ' + nome + ': ', function(cursoAluno){

            var curso = cursoAluno

            entradaDados.question('digite o nome da disciplina: ', function(disciplinaAluno){

                var disciplina = disciplinaAluno

                console.log('digite as notas do ' + nome)

                entradaDados.question('nota1: ', function(notas1){

                    var nota1 = notas1

                    entradaDados.question('nota2 ', function(notas2){

                        var nota2 = notas2

                        entradaDados.question('nota3: ', function(notas3){

                            var nota3 = notas3

                            entradaDados.question('nota4: ', function(notas4){

                                var nota4 = notas4

                                var media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

                                console.log('\nNome: ' + nome + '\nCurso: ' + curso + '\nDiciplina ' + disciplina + '\nNotas: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '\nMédia: ' + media)

                                if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
                                    console.log('ERRO: Todas as notas devem ser preenchidas')
                                   
    
    
    
    
                                } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                                  console.log('ERRO: Todas as notas devem ser números')
    
                                } else if ( (nota1 > 10) || (nota1 < 0) || (nota2 >10) || (nota2 < 0) || (nota3 > 10) || (nota3 < 0) || (nota4 > 10) || (nota4 < 0)) {
                                    console.log('ERRO: Todas as notas devem ser entre 0 e 10')
                                    entradaDados.close()
                                } else{
                                    console.log('\nNome: ' + nome + '\nCurso: ' + curso + '\nDiciplina ' + disciplina + '\nNotas: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '\nMédia: ' + media )
                                }
                            })
                        })
                    })

                    })
                })
            })

        })
