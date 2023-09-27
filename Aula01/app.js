console.log('Nome e calculadora')




var readline = require('readline')




var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    })




    entradaDados.question('Digite seu nome: ' , function(nomeUsuario){
         var nome = nomeUsuario
       
        entradaDados.question('Digite um número: ' , function(numeroUsuario){
            var numero = numeroUsuario




            entradaDados.question('Digite um número: ' , function(numeroUsuario){
                var numero2 = numeroUsuario
       
            console.log('Olá ' + nome + ' o resultado da soma entre ' + numero + ' e ' + numero2 + ' é ' + (parseInt(numero) + parseInt(numero2)))
        })
        })
        })
