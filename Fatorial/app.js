var calculadofatorial = require('./modulo/calculofatorial')

var readline = require('readline')

var entradaDados = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

entradaDados.question('valor do fatorial: ', function(valorDoFatorial){

    fatorial = valorDoFatorial
    let resultado

    resultado = calculadofatorial.calculadora(fatorial)

    entradaDados.close()


})