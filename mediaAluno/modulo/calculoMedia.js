
const CalculoDaMedia = function (nomeAluno, nomeProfessor, cursoAluno, disciplinaAluno, nota1Aluno, nota2Aluno, nota3Aluno, nota4Aluno){

    let aluno = nomeAluno
    let professor = nomeProfessor
    let curso = cursoAluno
    let disciplina = disciplinaAluno
    let nota1 = nota1Aluno
    let nota2 = nota2Aluno
    let nota3 = nota3Aluno
    let nota4 = nota4Aluno
    let resultado

    if (aluno == '' || professor == '' || curso == '' || disciplina == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        console.log('ERRO: todos os requisitos devem ser preenchidos')
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('ERRO: todas as notas devem ser números')
    } else if (nota1 > 100 || nota1 < 0 && nota2 > 100 || nota2 < 0 && nota3 > 100 || nota3 < 0 && nota4 > 100 || nota4 < 0) {
        console.log('ERRO: as notas devem ser entre 0 e 100')
    } else {
        resultado = (nota1 + nota2 + nota3 + nota4) / 4
    }

    return resultado.toFixed(2)
}    

module.exports = {
    CalculoDaMedia
}