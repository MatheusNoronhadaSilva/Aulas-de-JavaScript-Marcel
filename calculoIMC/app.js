var CalculoImc = require('./modulo/CalculoImc.js')

var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Coloque o seu peso(kg): ', function(FPeso){
    let peso = FPeso.replace(',','.')

    entradaDados.question('Coloque sua altura(cm): ', function(FAltura){
       let altura = FAltura.replace(',','.')
       let resultado

        resultado = CalculoImc.CalculoDoImc(peso, altura)
        console.log(`\nSeu peso -> ${peso} dividido pela sua altura -> ${altura}^2 = ${resultado}`)

        if (resultado < 18.5) {
            console.log('Você está abaixo do peso')
        } else if (resultado >= 18.5 && resultado <= 24.9) {
            console.log('Você está no peso ideal')
        } else {
            console.log('Você está acima do peso')
        }
    })
})