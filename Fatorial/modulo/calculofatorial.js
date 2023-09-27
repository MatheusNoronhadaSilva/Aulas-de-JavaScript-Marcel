const calculadora = function(valorDoFatorial) {

    let fatorial = valorDoFatorial

    if (fatorial == '') {
        console.log('\nERRO: o valor não pode estar vazio\n')
    } else if (isNaN(fatorial)) {
        console.log('\nERRo: o valor deve ser um número\n')
    } else if (fatorial <= 1) {
        console.log('\nERRO: o valor deve ser maior que 1\n')
    } else {
        let resultado = 0
        for (decrescente = fatorial; decrescente > 0; decrescente--) {
            resultado = fatorial * decrescente
            console.log(`${fatorial} x ${decrescente} = ${resultado}`)
            fatorial = resultado
        }
    }
}

module.exports = {
    calculadora
}