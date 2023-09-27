const { Console } = require('console')
var paresImpares = require('./modulo/paresOuImpares')

var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Número inicial: ', function(numeroInicial){

    inicio = numeroInicial

    entradaDados.question('Número final:', function(numeroFinal){

        final = numeroFinal

        let numerospares = paresImpares.descobrirPeI(inicio, final)

        console.log('NÚMEROS PARES')
        console.table(numerospares[0])
        console.log(`Quantidade de números pares: ${numerospares.length}`)
        console.log('- - - - - - - - - - - -')
        console.log('NÚMEROS IMPARES')
        console.table(numerospares[1])
        console.log(`Quantidade de números impares: ${numerospares[1].length}`)
        


    })
})