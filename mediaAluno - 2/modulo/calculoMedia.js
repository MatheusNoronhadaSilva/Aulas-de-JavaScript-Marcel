
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
        nota1 = Number(nota1)
        nota2 = Number(nota2)
        nota3 = Number(nota3)
        nota4 = Number(nota4)
        resultado = (nota1 + nota2 + nota3 + nota4) / 4
    }    
        let status
    
        if (resultado > 69) {
            status = 'aprovado'
        } else if (resultado < 50) {
            status = 'reprovado'
        } else {
            status = 'enviado para o exame'
        }
    
        return [Number(resultado.toFixed(2)), status]
}    

const DefinicaoSexoAluno = function (sexoAluno){

    let sexoA = sexoAluno
    let nomeA

    if (sexoA == '' || sexoA == '') {
        console.log('ERRO: Não pode haver informações vazias')
    } else {
        if (sexoA == 'f'.ignorecase) {
            nomeA = 'A aluna'
        } else {
            nomeA = 'O aluno'
        }
    }

    return nomeA

}

const DefinicaoSexoProfessor = function (sexoProfessor){

    let sexoP = sexoProfessor
    let nomeP

    if (sexoP == '' || sexoP == '') {
        console.log('ERRO: Não pode haver informações vazias')
    } else if (sexoP == 'f'.ignorecase) {
        nomeP = 'Professora'
    } else {
        nomeP = 'Professor'
    }

    return nomeP
}

module.exports = {
    DefinicaoSexoProfessor,
    CalculoDaMedia,
    DefinicaoSexoAluno
}