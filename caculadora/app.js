var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('   CALCULADORA')
entradaDados.question(' \nPrimeiramente, selecione a operação matmática (pelo número) \n 1- somar \n 2- subtrair \n 3- multiplicar \n 4- dividir \n\n opção:', function (escolhaOperacao) {

    let escolha = escolhaOperacao
    s
    console.log('Selecione os números')
    entradaDados.question('1º número: ', function (escolhaNumero1) {

        n1 = escolhaNumero1.replace(',', '.')

        entradaDados.question('2º número: ', function (escolhaNumero2) {

            n2 = escolhaNumero2.replace(',', '.')

            let resultado = 0

            if (isNaN(n1) || isNaN(n2)) {
                console.log('\n ERRO: os valores estão errados!')
                entradaDados.close()
            } else if (escolha == '1') {
                resultado = (Number(n1) + Number(n2))
                console.log('\n o valor desta operação é: ' + String(resultado.toFixed(1)).replace('.', ','))
                entradaDados.close()
            } else if (escolha == '2') {
                resultado = (Number(n1) - Number(n2))
                console.log('\n o valor desta operação é: ' + String(resultado.toFixed(1)).replace('.', ','))
                entradaDados.close()
            } else if (escolha == '3') {
                resultado = (Number(n1) * Number(n2))
                console.log('\n o valor desta operação é: ' + String(resultado.toFixed(1)).replace('.', ','))
                entradaDados.close()
            } else if (escolha == '4') {
                resultado = (Number(n1) / Number(n2))
                console.log('\n o valor desta operação é: ' + String(resultado.toFixed(1)).replace('.', ','))
                entradaDados.close()
            } else {
                console.log('\n esta operação é invália!!!')
                entradaDados.close()
            }
        })
    })
})

//Ctrl A, shift alt F