/**********************
 * objetivo: entrada de dois números e realizar a soma entre eles
 * data: 09/08/2023 
 * autor: matheus
 * versão: 1.0
 **********************/

//import da biblioteca readline
var readline = require('readline');

//Cria um objeto de entrada de dados para interagir com o usuário
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//entrada de dados para receber o nome do usuário
entradaDados.question('Digite seu nome: ', function(nomeUsuario){

    //Recebe o nome informado pelo usuário
    var nome = nomeUsuario

    //entrada de dados para receber o valor 1
    entradaDados.question('digite o valor1: ', function(valor1Usuario){

        //recebe o valor1
        var valor1 = valor1Usuario

        //entrada de dados paa receber o valor 2
        entradaDados.question('digite o valor2: ', function(valor2Usuario){

            //recebe o valor2
            var valor2 = valor2Usuario

            /** Métodos para a conversão de String para números 
             * parseInt() - converte para int (numero inteiro)
             * parseFloat() - converte para float (numero real)
             * Numer() - converte uma String para numero, ela define se o 
             * numero será inteiro ou real
            */
            var resultado = Number(valor1) + Number(valor2);

            console.log('O nome do usuário é: ' + nome)
            console.log('A soma dos valores é: ' + resultado)

            //para mostrar o tipo de variavel
            console.log(typeof(resultado))

            //sai do termial automaticamente
            entradaDados.close()
        })


    })

})