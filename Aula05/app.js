var tabuada = require('./modulo/tabuada.js')

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o valor da tabuada que deseja calcular: ', function(valorTabuada){

    let valorT = valorTabuada;

    entradaDados.question('Digite o valor inicial da multiplicação: ',function(valorInicial){

        let contador = valorInicial

        entradaDados.question('Digite o valor final da multiplicação: ', function(valorFinal){

            let contadorFinal = valorFinal
            let resultado
            resultado = tabuada.gerarTabuada(valorT,contador,contadorFinal)

        })
    })
})